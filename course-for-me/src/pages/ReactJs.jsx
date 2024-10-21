import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropleft } from "react-icons/io";
import ReactJsVid from '../assets/ReactJs.Js';

const ReactJs = (props) => {
  return (
    props.isAuth ? (
        <div>
          <div class="p-8 rounded border border-gray-200">
          <Link to="/Payment"><div className='flex items-center w-[40px] h-[50px]'><IoMdArrowDropleft size={30}/><span className='text-black'>Back</span></div></Link>
            <h1 class="font-medium text-3xl">Register for the Course</h1>
            <br />
            <div className='w-full flex items-center justify-center'><video src={ReactJsVid} controls className='h-[400px]'></video></div>
            <p class="text-gray-600 mt-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem vel cupiditate laudantium dicta.</p>
                  </div>
        </div>
      )
    
    : (
        <div>
            <Link to="/LoginPage"><span>Go and Login</span></Link>
        </div>
    ))
}

export default ReactJs
