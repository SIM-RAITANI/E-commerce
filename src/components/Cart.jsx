import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { NavLink } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { auth,db } from '../firebaseConfig/FirebaseConfig';
import CartCard from "./CartCard"

function Cart() {
    const {user}=useContext(Context);
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
                
                
            }).catch('Error error error')

        }
        getcartdata()
    }


  return (
    <div className='w-full h-screen flex items-center justify-center  bg-[#f8f4f0]'>
      {cartdata.length>0 ? <div className=' flex flex-col gap-5'>

        {cartdata.map((item) => (
                            <CartCard
                                key={item.id}
                                itemdata={item}
                                userid={user[0].uid}
                            />
        ))}
        



      </div> 
      
      : <div className='flex flex-col gap-7 items-center'><p className='text-center font-semibold text-3xl text-[#BC4C2A]'>Oops, No item to display !!</p><button className=' border-dotted border-2 border-[#BC4C2A] text-sm px-4 py-3 hover:bg-[#BC4C2A]  hover:text-white'><NavLink to="/arrival">Browse All Collection</NavLink></button></div>}
    </div>
  )
}

export default Cart
