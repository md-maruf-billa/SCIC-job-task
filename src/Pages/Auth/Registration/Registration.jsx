import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseContext } from '../Firebase/AuthContext';
import Swal from 'sweetalert2';
import auth from '../Firebase/firebase.config';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const navigate = useNavigate();
    const { createAccount, loginWithGoogle } = useContext(firebaseContext);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passErr, setPassErr] = useState("");
    const [successMass, setSuccessPass] = useState("");

    const managePassword = (e) => {
        const password = e.target.value;
        if (password.length < 6) {
            setPassErr("Password should be more then 6 character");
            setPassword()
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setPassErr("Must be need a lower case");
            setPassword()

            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setPassErr("Must be need a Upper case");
            setPassword()
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setPassErr("Must be need a number");
            setPassword()
            return;
        }
        else if (!/(?=.*[!@#$%^&*()])/.test(password)) {
            setPassErr("Need a special character (!@#$%^&*())");
            setPassword()
            return;
        }


        else {
            setPassErr("");
            setSuccessPass("your password is too strong")
            setPassword(password)
        }

    }

    const googleLogin = () => {
        loginWithGoogle()
            .then(res => {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Successfully loged In",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/")
            })

    }

    // create account
    const singUp = (email, password) => {
       
        createAccount(email, password)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(res => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${"welcome " + userName}`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                })
                setLoading(true)
                navigate("/")
            })
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Opps! Something went wrong!!",
                    text: `${err.message}`,
                    showConfirmButton: false,
                    timer: 3000
                });
            })
    }

    return (
        <div className='flex justify-center items-center min-h-[60vh]'>
            <div className="w-full max-w-md bg-white shadow-lg p-8 space-y-3 rounded-xl ">
                <h1 className="text-2xl font-bold text-center">Create Account</h1>
                <div  className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block ">Name</label>
                        <input onChange={e => setUserName(e.target.value)} type="text" id="username" placeholder="Jhon" className="w-full px-4 py-3 rounded-md border " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block ">E-mail</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" id="email" placeholder="demo@gmail.com" className="w-full px-4 py-3 rounded-md border " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block ">Password</label>
                        <input onChange={e => managePassword(e)} type="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border " />
                        <div className="flex justify-between text-xs ">
                            <p className={`${passErr ? "text-red-500" : "text-green-500"}`}>{passErr ? passErr : successMass}</p>
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button onClick={()=>singUp(email,password)} disabled={!email || !password} className='btn w-full bg-[#00b207] rounded-full text-white'>
                        Login
                    </button>
                </div>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 "></div>
                    <p className="px-3 text-sm ">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 "></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button  onClick={googleLogin} className="p-3 rounded-sm">
                        <FcGoogle className='text-3xl' />
                    </button>

                </div>
                <p className="text-xs text-center sm:px-6 ">Have an account?
                    <Link to={"/login"} className="underline ">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;