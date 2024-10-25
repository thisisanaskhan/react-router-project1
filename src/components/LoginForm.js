import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}>
        <label className='w-full'>
            <p className='text-white mb-1'>
                Email Address<sup className='text-red-600'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className='w-full p-[10px] rounded-[8px] bg-slate-900 text-white'
            />
        </label>

        <label className='relative'>
            <p className='text-white mt-4'>
                Password<sup className='text-red-600'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='w-full  p-[10px] rounded-[8px] bg-slate-900 text-white '
            />

            <span className='text-white absolute top-[5.2rem] right-3 cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={22}/>) : (<AiOutlineEye fontSize={22}/>)}
            </span>

            <Link to="#">
                <p className='text-blue-400 text-sm max-w-max ml-auto mt-1'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='text-black bg-yellow-400 py-[8px] w-full rounded-[8px] mt-10 mb-3'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
