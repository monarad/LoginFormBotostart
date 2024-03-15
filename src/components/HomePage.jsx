import React, { useState } from 'react'
import styles from "./HomePage.module.css"
import { FaQuestionCircle } from "react-icons/fa";
import SignUp from './SignUp';
import Login from './Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';



function HomePage() {

   const[mobile,setMobile]=useState("")

   const notify = () => {
      //toast.info("hhhhh")
      //toast("Success Notification !");
      toast.info('شماره موبایل وارد شده صحیح نمی باشد', {
         closeButton: <CloseButton />,
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         style: {
            width:"300px",
           background: '#ffff',
           color: 'grey',
         },
       });
    };

    const CloseButton = ({ closeToast }) => (
      <button style={{color:"#fff",width:"30px" ,height:"30px",lineHeight:"10px",backgroundColor:"red", textAlign:"center",borderRadius:"50%",fontSize:"20px",display:"flex",margin:"0px",justifyContent:"center"}} className="custom-close-button" onClick={closeToast}>
        x
      </button>
    );

    const changeHandler=(event)=>{
      setMobile(e=>event.target.value)
     
     }

    const clickHandler=(event)=>{
      event.preventDefault()
      if(mobile.length !== 11){
         notify();
         //console.log("first")
      }
    }

  return (
        <div className={styles.container}>
        <form className={styles.formContainer}>
        <div className={styles.formButtons}>
           <SignUp/>
           <Login/>
        </div>
        
        <h3 style={{color:"#333d"}}>ورود به بوتواستارت</h3>
           <div className={styles.fourItems}>
            <div className={styles.lableIcon}>
           <FaQuestionCircle className="my-anchor-element" style={{color:"grey"}}/>
           <Tooltip anchorSelect=".my-anchor-element" place="bottom" >
           لطفا شماره موبایلی که واتسپ دارد را وارد کنید تا پیام پشتیبانی برایتان ارسال شود
           </Tooltip>
           <label style={{color:"grey"}} htmlFor="phone"> شماره موبایل خود را وارد کنید</label>
           </div>
        
        
            <div className={styles.send}>
            <input type="number" id='phone' value={mobile}   onChange={changeHandler} />
            <button onClick={clickHandler} >ارسال کد تایید</button>
            <ToastContainer/>
            </div>
            </div>  

        </form>
        </div>
  
  )
}

export default HomePage




