import React, { useState } from 'react'
import "./Home.css"
import { NavLink, useNavigate ,Link} from 'react-router-dom'
import {auth} from "../firebaseConfig/FirebaseConfig"
import { createUserWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig/FirebaseConfig';

function SignUp() {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [pass,setPass]=useState("");
    const [errorMsg,setErrorMsg]=useState("");
    const [succMsg,setSuccMsg]=useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            const user = userCredential.user;
            const initialCartVal = 0;
    
            await addDoc(collection(db, "users"), {
                username: name,
                password: pass,
                phonenumber: phone,
                cart: initialCartVal,
                address: address,
                uid: user.uid,
                email: email
            });
    
            setSuccMsg("New user added");
            setName("");
            setPhone("");
            setAddress("");
            setPass("");
            setEmail("");
    
            setTimeout(() => {
                setSuccMsg("");
                navigate("/login");
            }, 4000);
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                setErrorMsg("Please fill all required fields");
            } else if (error.code === "auth/email-already-in-use") {
                setErrorMsg("User already exists");
            } else {
                // Handle other errors
                console.error("Error occurred:", error);
                setErrorMsg("An unexpected error occurred. Please try again later.");
            }
            setTimeout(()=>{
                setErrorMsg("");
                setName("")
                setPass("")
                setAddress("")
                setEmail("")
            },3000)
        }
    };
    


    return (
    <div className=' w-full bg-[#f8f4f0] h-screen justify-center items-center flex '>
        <div className='flex flex-col bg-white rounded-xl w-[400px] px-5 '>
            <div className='flex flex-col items-center justify-center'>
                {
                    succMsg ? <><p>{succMsg}</p></>
                    : <><h3 className='text-2xl text-[#BC4C2A] font-medium mt-3'>Sign-Up</h3><p className='text-sm text-[#cfcaca] mb-3'>Create an account</p></>
                }
                
                {errorMsg && <div className="w-full bg-[#e955551a] text-sm text-red-600 font-medium p-1 mb-3  text-center">
                    {errorMsg} </div> }
            </div>

            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' onChange={(e)=> setName(e.target.value)} className=' py-2 px-5 w-full text-sm  no-underline outline-none bg-[#cac8c82d] rounded-2xl' value={name} />

                <input typr="email" placeholder='abc@gmail.com' onChange={(e)=>setEmail(e.target.value)} className=' py-2 px-5 w-full text-sm  outline-none no-underline bg-[#cac8c82d] rounded-2xl' value={email} />

                <input type="text" placeholder='Address' onChange={(e)=> setAddress(e.target.value)} className=' py-2 px-5 w-full text-sm outline-none no-underline bg-[#cac8c82d] rounded-2xl' value={address}/>

                <input type="number" placeholder='Phone-no.' onChange={(e)=> setPhone(e.target.value)} className=' py-2 px-5 w-full text-sm outline-none no-underline bg-[#cac8c82d] rounded-2xl' value={phone}/>

                <input type="password" placeholder='Password' onChange={(e)=> setPass(e.target.value)} className=' py-2 px-5 w-full text-sm outline-none no-underline bg-[#cac8c82d] rounded-2xl' value={pass}/>

                <button type="submit" className=" w-full bg-[#BC4C2A] text-white px-3 py-2  mb-4 hover:bg-[#dc7b5d]">Submit</button>

            </form>

            <div className="  flex gap-2  mb-6">
            <p className="text-[12px] ">Already have an account ?</p>
            <Link to="/login" className="text-[12px] text-[#6c99e8] underline">Login</Link>

          </div>
        </div>
      
    </div>
  )
}

export default SignUp
