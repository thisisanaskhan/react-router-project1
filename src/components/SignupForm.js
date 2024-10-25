import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const[accountType,setAccountType]=useState("student")

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        <div className='flex text-white gap-x-4 rounded-[20px] bg-slate-900 p-[6px] max-w-max mb-4'>
            <button onClick={ ()=>setAccountType("student")}
                className={`${accountType==="student"?"bg-black text-white"
                     :"bg-transparent text-gray-300" } py-2 px-5 rounded-full transition-all duration-200`}
                 >
                Student
            </button>
            <button onClick={ ()=>setAccountType("instructor")}
                className={`${accountType==="instructor" ?" bg-black text-white":"bg-transparent text-gray-300"} py-2 px-5 rounded-full transition-all duration-200 `}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>

        {/* first name and lastName */}
            <div className='flex justify-between mb-2'>
                    <label >
                        <p className='text-white mb-1'>First Name<sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='w-full p-[10px] rounded-[8px] bg-slate-900 text-white '
                            

                        />
                    </label>

                    <label>
                        <p className='text-white mb-1'>Last Name<sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='w-full p-[10px] rounded-[8px] bg-slate-900 text-white '
                        />
                    </label>
            </div>
            {/* email Add */}
            <label  >
                    <p className='text-white mb-1'>Email Address<sup className='text-red-600'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='w-full p-[10px] rounded-[8px] bg-slate-900 text-white '
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div className='flex gap-x-10 mt-3'>
                <label className='relative'>
                    <p className='text-white mb-1'>Create Password<sup className='text-red-600'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='w-full p-[10px] rounded-[8px] bg-slate-900 text-white '
                    />
                    <span className='text-white absolute top-[2.5rem] right-2' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={18}/>) : (<AiOutlineEye fontSize={18}/>)}
                    </span>
                </label>

                <label className='relative'>
                    <p className='text-white mb-1'>Confirm Password<sup className='text-red-600'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='w-full p-[10px] rounded-[8px] bg-slate-900 text-white '
                    />
                    <span className='text-white absolute top-[2.5rem] right-2' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={18}/>) : (<AiOutlineEye fontSize={18}/>)}
                    </span>
                </label>
            </div>
        <button className='text-black bg-yellow-400 py-[8px] w-full rounded-[8px] mt-7 mb-3'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm
