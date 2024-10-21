import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import LoginImage from '../assets/LoginImg';


const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className="h-screen flex justify-center items-center">
        
<div class="bg-gray-100 flex justify-center items-center h-screen">
   
<div class="w-1/2 h-screen hidden lg:block">
  <img src={LoginImage} alt="Placeholder Image" class="object-cover w-full h-full"/>
</div>

<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">Sign up</h1>
  <form action="#" method="POST">

    <div class="mb-4">
      <label for="username" class="block text-gray-600">Email</label>
      <input 
      onChange={(e)=>setEmail(e.target.value)}
      type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input 
      onChange={(e)=>setPassword(e.target.value)}
      type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-blue-500"/>
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>
    
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
   </form>
  <div class="mt-6 text-blue-500 text-center flex items-center flex-col gap-4">
    <a href="#" class="hover:underline">Login Here</a>
    <button
        type="submit"
        className="bg-white text-black border-2 border-black text-xl px-6 py-3 rounded-lg flex items-center gap-2 focus:outline-none"
        onClick={props.signinwithgoogle}
      >
        <span>Sign in with Google</span>
        <FcGoogle />
      </button>
  </div>
 
</div>
</div>
      
    </div>
  );
};

export default LoginPage;
