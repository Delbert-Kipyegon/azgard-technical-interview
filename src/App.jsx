import React, { useState, useEffect } from 'react'
import IMG1 from './assets/image.jpg'
import IMG2 from './assets/img2.jpg'
import IMG3 from './assets/img3.jpg'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookSquare } from "react-icons/bi";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { PiSirenFill } from "react-icons/pi";


function App() {

  const data =[
    {image:IMG1,}, 
    {image:IMG2,}, 
    {image:IMG3,}, 
   ]

    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % data.length);
      }, 7000);
      return () => clearInterval(interval);
    }, [currentIndex]);

  return (
    <>
   
    <div className="full border-8 border-black h-full font-raleway  m-10 rounded-3xl grid md:grid-cols-2 ">
       {/* left side  */}
      <div className="left p-10 hidden sm:block ">
          <div className="logo text-xl mb-auto font-extrabold flex flex-start gap-3 font-raleway "> <PiSirenFill className='text-3xl text-red-600 ' /> SmartPOS</div>
          <div className="img flex flex-col justify-center items-center text-center mt-20">
            <img src={`${data[currentIndex].image}`} alt="form-img" />
            <h1 className='font-bold text-xl'>Manage sales, inventory  <br /> and other transactions</h1>
          </div>
      </div>

      {/* right side  */}
      <div className="right p-10  bg-gray-100 rounded-xl  md:rounded-r-xl  flex flex-col justify-center items-center  ">

        {/* form  */}
        <div className="form my-auto ">
          <div className="form-header flex flex-col gap-4 pb-4">
            <h1 className='text-xl font-bold' >Welcome Back!</h1>
            <p className='font-thin'>Please sign in to continue</p>
          </div>

          <div className="form-body flex flex-col gap-4">
            <div className="input">
              <input className='px-4 py-2 rounded-md focus:outline-none w-full' type="text" placeholder='User ID' name="username" id="username" />
            </div>
            <div className=" pass-input flex ">
              <input className='px-4 py-2 rounded-md focus:outline-none w-full' type="password"  placeholder='Password' name="password" id="password" />
              {/* <FaEye className='text-2xl ' /> */}
            </div>
            <div className="bg-yellow-300 py-2 rounded-md text-center input">
              <button className='font-bold w-full ' type="submit">Sign in</button>
            </div>
            <p className='text-center font-thin'>or</p>
            <hr className=' h-0. text-sm bg-black' />
            <div className="input flex gap-5 ">
              
              <button className='border-2 text-sm px-2 py-3 font-bold rounded-xl flex gap-2' type="submit"> <FcGoogle  className='text-xl'/> Sign in with Google</button>
              <button className='border-2 text-sm px-2 py-3 font-bold rounded-xl flex gap-2' type="submit"> <BiLogoFacebookSquare className='text-xl text-blue-700' /> Sign in with Facebook</button>
            </div>
            <a className='text-center text-blue-400' href="">Forgot password?</a>
            <p className='text-center  font-thin'>Don't have an account? Go to Registration.</p>
          </div>

        </div>
        <div className="cr bottom-0  mt-auto">
            <p className=' bottom-0'>&copy; 2020 SmartPOS App</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
