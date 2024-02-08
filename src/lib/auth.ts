import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

const login = async (credentials: any) => {
  try {
    connectToDb();
    const { username, password } = credentials;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Invalid User");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Invalid Credentials");
    }

    return user;
  } catch (error: any) {
    console.log("Unable to login : ", error);
    throw new Error("Unable to login", error);
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Sign in", profile);
      if (profile) {
        if (account?.provider === "github") {
          connectToDb();
          try {
            const user = await User.findOne({ email: profile.email });

            if (!user) {
              const newUser = new User({
                username: profile.login,
                email: profile.email,
                img: profile.picture,
              });
              await newUser.save();
            }
          } catch (error) {
            console.log("Unable to sign in", error);
            return false;
          }
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
