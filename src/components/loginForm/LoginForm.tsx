"use client";
import { handleGithubLogin, login } from "@/lib/actions";
import styles from "./loginform.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  // useEffect(() => {
  //  state?.success && router.push("/login")
  // }, [state?.success,router])

  return (
    <div>
      <form action={formAction} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {state?.error && (
          <p className={`${styles.error} text-red-600`}>{state.error}</p>
        )}
        <div className={"text-black pt-5"}>
          <Link href="/register">
            Don't have an account? <b>Register</b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
