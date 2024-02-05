"use client"
import { useFormState } from 'react-dom'
import styles from './registerform.module.css'
import { register } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'


type Props = {}

const RegisterForm = (props: Props) => {


    const [state,fromAction] = useFormState(register,undefined)
    const router = useRouter()

    useEffect(() => {
     state?.success && router.push("/login")
    }, [state?.success,router])
    

  return (
    <form action={fromAction} className={styles.form}>
        <input type="text" placeholder="username" name="username" className={styles.input} />
        <input type="email" placeholder="email" name="email" className={styles.input} />
        <input type="password" placeholder="password" name="password" className={styles.input} />
        <input type="password" placeholder="password again" name="passwordRepeat" className={styles.input} />
        <button className={styles.button}>Register</button>
        {state?.error && <p className={`${styles.error} text-red-600`}>{state.error}</p>}
        <div className={"text-black pt-5"}><Link href='/login'>Have an account ? <b>Login</b></Link></div>
      </form>
  )
}

export default RegisterForm