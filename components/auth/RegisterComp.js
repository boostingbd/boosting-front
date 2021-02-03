import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from "js-cookie";
import Router from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import VerifyOTP from './VerifyOTP';

function RegisterComp() {
    const [userName, setUserName] = useState("")
    const [mobile, setMobile] = useState("")
    const [accountType, setAccountType] = useState("personal")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let dispatch = useDispatch()

    const [isVerify, setIsVerify] = useState(false)

    

    const handleRegister = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = {
            userName,
            mobile,
            accountType,
            password,
        }
        axios.post(`/user/register`, data)
            .then((res) => {
                if (res.data.success) {
                    // toast.success('User registered successfully', {
                    //     position: "bottom-left",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true
                    // })
                    setError(null)
                    setLoading(false)
                    setIsVerify(true)
                    //Router.push("/login");
                }
            })
            .catch((err) => {
                setLoading(false)
         
                err && err.response && setError(err.response.data)

            });
    }
    return (
        <section className="pricing-area ptb-80 bg-f9f6f6">
        <ToastContainer />
            <div className="container py-5">

                {
                    isVerify ? <VerifyOTP mobile={mobile} /> : <form style={{ padding: "0 15vw" }}>
                    <h3 style={{ marginBottom: "10px" }} className='text-center'>Register</h3>
                    {
                        error && error.error && <div class="alert alert-danger" role="alert">
                            {error.error && error.error}
                        </div>
                    }


                    <div className="form-group">
                        <label>User name</label>
                        <input
                            value={userName}
                            onChange={(e) =>
                                setUserName(e.target.value)}
                            type="text"
                            className={`form-control ${error && error.userName && "is-invalid"}`}
                            placeholder="Enter your username" />
                        {
                            error && error.userName && <div class="invalid-feedback">{error.userName}</div>
                        }
                    </div>


                    <div className="form-group">
                        <label>Mobile Number: </label>
                        <input
                            value={mobile}
                            onChange={(e) =>
                                setMobile(e.target.value)}
                            type="text"
                            className={`form-control ${error && error.mobile && "is-invalid"}`}
                            placeholder="01*********" />
                        {
                            error && error.mobile && <div class="invalid-feedback">{error.mobile}</div>
                        }
                    </div>

                    <div className="form-group">
                        <label>Account type</label>
                        <select value={accountType} onChange={(e)=>setAccountType(e.target.value)}  class="form-control">
                            <option value="personal">Personal</option>
                            <option value="company">Company</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className={`form-control ${error && error.password && "is-invalid"}`}
                            placeholder="Enter password" />
                        {
                            error && error.password && <div class="invalid-feedback">{error.password}</div>
                        }
                    </div>

                   

                    <button onClick={(e) => handleRegister(e)} type="submit" className="btn btn-primary btn-block">
                        {
                            isLoading ? <CircularProgress size={20} /> : "Register"
                        }

                    </button>
                    <p className="forgot-password text-right">
                        Already have an account?<Link href="/login"><a>Login now</a></Link>
                    </p>
                </form>
                }

            </div>
               {/* <button onClick={()=>setIsVerify(!isVerify)}>otp</button>  */}
        </section>
    );

}

export default RegisterComp




