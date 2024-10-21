import { Link} from 'react-router-dom';
import { IoMdArrowDropleft } from 'react-icons/io';
import './Profile.css';
import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../FirebaseConfig";


const schema = yup.object().shape({
        FirstName : yup.string().min(4).min(6).required("input first name"),
        Birthday : yup.number().required("input age"),
        Email : yup.string().email().required("input email"),
        JobTitle : yup.string().min(4).min(6).required("input first name")
    })

const Profile = (props) => {

    

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

    const [Email, setEmail] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [JobTitle, setJobTitle] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [savedData, setSavedData] = useState(false);
    const usersCollectionRef = collection(db, "users");

   
    const createPost = async (data) => {
        await addDoc(usersCollectionRef, {
            Email : data.Email,
            Birthday : data.Birthday,
            JobTitle : data.JobTitle,
            FirstName : data.FirstName,
            savedData,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        });
        localStorage.setItem("savedData", true);
        console.log(data)
        setSavedData(true);
};

    

    return (
        props.isAuth ?
        <div>
            {
                savedData ? <div>
                    <div className="p-16"><div className="p-8 bg-white shadow mt-24">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                                <div>
                                    <p className="font-bold text-gray-700 text-xl">10</p>
                                    <p className="text-gray-400">Photos</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700 text-xl">89</p>
                                    <p className="text-gray-400">Comments</p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">                             
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                </div>
                            </div>
                            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Connect</button>
                                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Message</button>
                            </div>
                        </div>
                        <div className="mt-20 text-center border-b pb-12">
                            <h1 className="text-4xl font-medium text-gray-700">{FirstName}, <span className="font-light text-gray-500">27</span></h1>
                            <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>
                            <p className="mt-8 text-gray-500">{JobTitle}</p>
                            <p className="mt-2 text-gray-500">University of Computer Science</p>
                        </div>
                        <div className="mt-12 flex flex-col justify-center">
                            <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                            <button className="text-indigo-500 py-2 px-4 font-medium mt-4">Show more</button>
                        </div>
                    </div></div>
                </div> : <div>
                    <div className="p-8 rounded border border-gray-200">
                        <Link to="/" className="w-[10px]">
                            <div className="flex items-center h-[50px]">
                                <IoMdArrowDropleft size={30} />
                                <span className="text-black">Back</span>
                            </div>
                        </Link>
                        <h1 className="font-medium text-3xl">Your Profile</h1>
                        <br />
                        <div className="w-full flex flex-col gap-4 items-center justify-center">
                            <label htmlFor="file" className="custum-file-upload">
                                <div className="icon">
                                    <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19V17.5C11 16.6716 10.3284 16 9.5 16C8.67157 16 8 16.6716 8 17.5V19C8 20.1046 7.10457 21 6 21H4V10C4 8.34315 5.34315 7 7 7H14V15.5ZM12 19V17H16V19H12Z" fill="currentColor"/>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-2">Upload Profile Picture</span>
                                
                            </label>
                            <div className=''>
                                <form className='flex flex-col gap-4 lg:w-[700px] font-bold'
                                onSubmit={handleSubmit(createPost)}
                                >
                                    <label>FirstName</label>
                                    <input type="text" placeholder='First name'className='bor68der-2 border-black rounded-lg p-3 text-xl'
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    {...register("FirstName")}
                                    />
                                   
                                    <label>Job title</label>
                                    <input type="text" placeholder='Job name'className='border-2 border-black rounded-lg p-3 text-xl'
                                    onChange={(e)=>setJobTitle(e.target.value)}
                                    {...register("JobTitle")}
                                    />
                                  
                                    <label>Email</label>
                                    <input type="text" placeholder='email'className='border-2 border-black rounded-lg p-3 text-xl'
                                    onChange={(e)=>setEmail(e.target.value)}
                                    {...register("Email")}
                                    />
                                   
                                    <label>Birthday</label>
                                    <input type="date" className='border-2 border-black rounded-lg p-3 text-xl'
                                    onChange={(e)=>setBirthday(e.target.value)}
                                    {...register("Birthday")}
                                    />
                                    <input type="submit" className='border-2 border-black rounded-lg p-3 text-xl hover:bg-gray-700 hover:text-white transition duration-500 cursor-pointer'/>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div> : <h1>You are not authenticated</h1>
    );
};

export default Profile;
