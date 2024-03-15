import React from 'react'
import { RiLoginBoxLine } from "react-icons/ri";
import styles from "./Login.module.css"


function Login() {
  return (
    <div>
        <button className={styles.loginButton}>
          <p>ورود</p>
         <div className={styles.icon}>
        <RiLoginBoxLine  />
        </div>
        </button>
       
        
    </div>
  )
}

export default Login