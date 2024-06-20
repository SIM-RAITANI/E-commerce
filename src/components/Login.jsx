import React, { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig/FirebaseConfig";
import { Context } from "../context/Context";


function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [succ, setSucc] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const {logged,setLogged}=useContext(Context)
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setLogged(true)
      setSucc("Logged in successfully");
      setTimeout(() => {
        setSucc("");
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        console.log(error.message);
        setErr("Please fill all required fields");
      } else if (error.code === "auth/user-not-found") {
        setErr("Email not found");
      } else if (error.code === "auth/wrong-password") {
        setErr("Wrong Password");
      } else {
        console.log(error.message)
        setErr(error.message);
      }
      setTimeout(()=>{
        setErr("")
        setEmail("")
        setPass("")
      },3000)
    }
  };
  

  return(
    <div className="w-full h-screen flex justify-center items-center bg-[#f8f4f0] ">

      <div className=" flex flex-col bg-white rounded-xl w-[300px]">
        <div>
           <h1 className="text-[#BC4C2A] text-3xl text-center mb-4 mt-4">Login</h1>
        
        </div> 
        {err && <div className="w-full bg-[#e955551a] text-sm text-red-600 font-medium p-1 mb-3  text-center">
          {err}
          </div>}
        <form action="" className=" flex flex-col  gap-5  border-none outline-none text px-8  mb-5  " onSubmit={handleLogin}>
          <input type="email" placeholder="abc@gmail.com" className=" px-5 py-2 bg-[#cac8c82d] outline-none border-none text-sm rounded-2xl " onChange={(e)=> setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder="password" className=" px-5 py-2 bg-[#cac8c82d] outline-none border-none text-sm rounded-2xl" onChange={(e)=> setPass(e.target.value)} value={pass} />

          <button type="submit" className=" w-full bg-[#BC4C2A] text-white px-3 py-2 hover:bg-[#dc7b5d]">Login</button>
          </form> 
          <div className=" px-8 flex gap-2  mb-6">
            <p className="text-[12px] ">Don't have an account ?</p>
            <Link to="/signup" className="text-[12px] text-[#6c99e8] underline">Sign-Up</Link>

          </div>
      </div>

    </div>

  
  


);

}

export default Login;
