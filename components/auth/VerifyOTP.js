import React, { useState } from 'react'
import styles from './verify.module.css'
import axios from 'axios'
import Countdown from 'react-countdown';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'

function VerifyOTP({ mobile }) {
    const [otp, setOtp] = useState('')
    const [error, setError] = useState(null)
    const [newCodeTimer, setNewCodeTimer] = useState(Date.now() + 180000)
    const [mount, setMount] = useState(true)
    const router = useRouter()

    const handleVerifyOTP = () => {
        if (otp.length === 6) {
            axios.post('/user/verifyotp', { mobile, otp })
                .then(res => {
                   if(res.data.success){
                       toast.success('Phone number verified successfully', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    })
                   window.location.pathname='/login'
                    
                   }
                })
                .catch(err => {
                    err && err.response && setError(err.response.data)
                })
        } else {
            setError({ error: "OTP should be 6 digit" })
        }

    }

    const resendOTP = () => {
        axios.post('/user/resendotp', { mobile })
            .then(res => {
                if (res.data.success) {
                    toast.success('A new code has been sent', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    })
                    setMount(false)
                    setTimeout(() => {
                        setMount(true)
                    }, 100);
                    setNewCodeTimer(Date.now() + 180000)
                }
            })
            .catch(err=>{
                err && err.response && setError(err.response.data)
            })

    }


    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>Didn't received the code ? <span onClick={() => resendOTP()} style={{ color: "#44CD6F", cursor: "pointer" }}>Resend</span></span>;
        } else {
            // Render a countdown
            return <span>Request new code in {minutes} minutes : {seconds} seconds</span>;
        }
    };



    return (
        <div className="col-lg-6 mx-auto center1 text-center card-box2 two-step-div">
            <img className={styles.myImg} src="https://icons-for-free.com/iconfiles/png/512/locked+login+password+privacy+private+protect+protection+safe-1320196167397530530.png" />
            <p className={styles.twoTitle}>OTP verification</p>
            <p className="two-p">A code has been sent to your number
            <br />Please enter the code below</p>
            {
                error && error.error && <div class="alert alert-danger" role="alert">
                    {error.error && error.error}
                </div>
            }
            <div>
                <input onChange={(e) => setOtp(e.target.value)} value={otp} style={{ width: "50%" }} type='text' className='form-control mx-auto'></input>
            </div>
            <button onClick={() => handleVerifyOTP()} style={{ marginTop: "35px", marginBottom: "10px" }} className="btn btn-primary btn-embossed btn-verify">Verify</button><br />

            {
                mount && <Countdown
                    date={newCodeTimer}
                    renderer={renderer}


                />
            }




<ToastContainer />

        </div>
    )
}

export default VerifyOTP
