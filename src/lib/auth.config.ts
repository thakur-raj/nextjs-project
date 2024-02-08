import { NextAuthConfig } from "next-auth";

export const authConfig : NextAuthConfig = {

    pages:{
        signIn:"/login",
    },
    providers:[],

  callbacks: {

    async jwt ({token,user}){
        if(user){
            token.id = user.id;
            token.isdAdmin   = user.isAdmin;
        }
        return token;
    },
    async session({session,token}){
// Using optional chaining to handle the possibility of undefined session or user
const userId = session?.user?.id;
const isAdmin = session?.user?.isAdmin;

// Adding a check for existence before accessing properties
if (session && session.user) {
  const userId = session.user.id;
  const isAdmin = session.user.isAdmin;
}
return session
    },

    authorized({ auth, request }) {
        console.log(auth);
        
      return true;
    },
  },
};
