import React, { useContext } from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { Context } from '../context/Context'
import { auth,db } from '../firebaseConfig/FirebaseConfig'
import { Navigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState } from 'react'

function NavBar() {
  const {logged,setLogged,user}=useContext(Context);
  const navigate=useNavigate()
  

  const handleLogout = async () => {
    try {
        await signOut(auth).then(()=>{
          setLogged(false);
          console.log("User signed out successfully");
          navigate("/")          
        });
        
        // Optionally, you can add more actions here, such as redirecting the user
    } catch (error) {
        console.error("Error signing out: ", error);
    }
};

const [cartdata, setcartdata] = useState([]);
    if (user) {
        const getcartdata = async () => {
            const cartArray = [];
            const path = `cart-${user[0].uid}`
            // console.log(path)
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data());
                    cartArray.push({ ...doc.data(), id: doc.id })
                });
                setcartdata(cartArray)
                // console.log('done')
            }).catch('Error error error')

        }
        getcartdata()
    }

  return (
    <nav className=' w-full px-10  py-6 flex justify-between  items-center  fixed z-50000 bg-white top-0 box-shadow'>
        <div>
            <NavLink to="/" className="text-[#BC4C2A] text-xl font-medium">FashionLane</NavLink>
        </div>
        <div className=' flex gap-4 items-center cursor-pointer '>
            <NavLink to="/" className="hover:text-[#BC4C2A]  " >Home</NavLink>
            <NavLink to="/contact" className="hover:text-[#BC4C2A] " >Contact</NavLink>
            <NavLink to="/arrival" className="hover:text-[#BC4C2A] " >New Arrivals</NavLink>
        </div>
        <div className=' flex items-center gap-3 cursor-pointer'>
            {!logged ? <>
              <NavLink to="/login" className=" bg-[#BC4C2A] text-white px-4 py-2 rounded-md text-sm hover:bg-[#dc7b5d]">Login</NavLink>
              <NavLink to="/signup" className=" bg-[#BC4C2A] text-white px-4 py-2 rounded-md text-sm hover:bg-[#dc7b5d]">SignUp</NavLink>
            </> :
             <>
             <div className='flex '>
             <NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping} color='black' size='lg'/></NavLink>
             <div className='flex justify-top relative  right-1 top-2'><div className='flex   w-5 h-5 rounded-full justify-center  text-white text-sm font-semibold items-center bg-[#e67f5f]'>{cartdata.length}</div></div>
             </div>
             <div className=' w-9 h-9 rounded-full border-[1px]   bg-[#ea7b59] border-black text-white text-sm font-semibold flex items-center justify-center'>
              { user ? <p className=' capitalize'>{user[0].username[0]}</p> : null }
             </div>
             <button onClick={handleLogout}><NavLink to="/" className=" bg-[#BC4C2A] text-white px-4 py-3 rounded-md text-sm hover:bg-[#dc7b5d]">Logout</NavLink></button>
             {user && user[0].email == "sim20@gmail.com" && <button><NavLink to="/sell">Sell</NavLink></button>}
             </>
} 
            
        </div>
    </nav>
  )
}

export default NavBar
