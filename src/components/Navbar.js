import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly items-center  py-4 max-w-[1400px] w-11/12 mx-auto gap-x-[8rem]'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-white'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

       
        <div className='flex items-center  gap-x-4 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='text-white bg-neutral-800 rounded-[9px] border border-neutral-800 py-[8px] px-[12px] '>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='text-white  bg-neutral-800 border  border-neutral-800 py-[8px] px-[12px] rounded-[9px]'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='text-white  bg-neutral-800 border  border-neutral-800 py-[8px] px-[12px] rounded-[9px]' onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='text-white  bg-neutral-800 border  border-neutral-800 py-[8px] px-[12px] rounded-[9px]'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
