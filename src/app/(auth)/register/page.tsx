import RegisterForm from "@/components/registerForm/RegisterForm";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage

