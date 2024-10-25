import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

   
  return (

    <div className='flex justify-evenly  h-full py-[3rem] max-w-[1400px] w-11/12 mx-auto gap-x-8'>

        <div className='max-w-[450px] w-11/12 '>
            <h1 className='text-white font-bold text-3xl mb-4  '>{title}</h1>
            <p  className='mb-5'>
                <span className='text-white' >{desc1}</span><br></br>
                <span className='text-teal-300 italic' >{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex items-center gap-x-1'>
                <div className=' h-[1px] bg-white w-full' ></div>
                <p className='text-white'>OR</p>
                <div className='h-[1px] bg-white w-full'></div>
            </div>

            <button className='w-full flex justify-center items-center  text-white bg-slate-900 px-[10px] py-[8px] rounded-[8px] gap-x-2 mt-3'>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className='relative'>
            <img  src={frameImage}
                alt="Pattern"
                width={458}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 -left-4'/>    
        </div>

    </div>
  )
}

export default Template
