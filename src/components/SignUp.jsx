import React from 'react'
import { TiUserAddOutline } from "react-icons/ti";
import styles from "./SignUp.module.css"

function SignUp() {
  return (
    <div>
        <button className={styles.signUpButton}>
          <p>ثبت نام</p>
        <div className={styles.icon}>
        <TiUserAddOutline />
        </div>
        </button>

    </div>
  )
}

export default SignUp