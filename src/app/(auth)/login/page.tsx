import { handleGithubLogin, login } from "@/lib/actions";
import { auth } from "@/lib/auth";
import styles from './login.module.css';

const LoginPage = async() => {
  return (

<div className={styles.container}>
      <form action={login} className={styles.form}>
        <input type="text" placeholder="Username" name="username" className={styles.input} />
        <input type="password" placeholder="Password" name="password" className={styles.input} />
        <button className={styles.button}>Login</button>
      </form>
      
      <form action={handleGithubLogin} className="flex justify-center items-center">
      <button className={styles.githubButton}>Login with GitHub</button>
      </form>
    </div>
  )
}

export default LoginPage