import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <form
        action={handleGithubLogin}
        className="flex justify-center items-center"
      >
        <button className={styles.githubButton}>Login with GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;
