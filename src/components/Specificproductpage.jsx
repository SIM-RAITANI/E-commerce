import React, { useContext, useState,useEffect } from 'react'
import { doc, getDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { auth,db } from '../firebaseConfig/FirebaseConfig';
import { NavLink, useParams } from 'react-router-dom'
import { Context } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign,faArrowRightArrowLeft,faHouseUser } from '@fortawesome/free-solid-svg-icons'


function Specificproductpage() {
    const {type,id}=useParams();
    const {user,logged}=useContext(Context);
    const [products,setProducts]=useState([])
    const [err,setErr]=useState("")
    const [succ,setSucc]=useState("")

    function GetCurrentProduct() {
        // const productCollectionRef = collection(db, `products-${type.toUpperCase()}`);

        useEffect(() => {
            const getProduct = async () => {

                const docRef = doc(db, `products-${type.toUpperCase()}`, id);
                const docSnap = await getDoc(docRef);
                setProducts(docSnap.data());
            };
            getProduct();
        }, [])
        return products
    }

    const item=GetCurrentProduct()
    console.log(item)

    const addtocart = () => {
        if (user) {
            console.log(user[0].uid)
            addDoc(collection(db, `cart-${user[0].uid}`), {
                item, quantity: 1
            }).then(() => {
                setSucc('Product added to cart');
                console.log(succ)

            }).catch((error) => { setErr(error.message) });
        }
        else {
            setErr('You need to login first')
        }

    }
    
  return (
    <div className='w-full flex flex-col  justify-center items-center h-screen'>
        
        {item && 
        <div className=' w-[900px] h-[500px] flex '>
        <div className=' h-[100%]'>
            {item && <img src={item.prodimage} className=' hover:scale-[1.02] cursor-pointer'></img>}

        </div>
        <div className=' px-10 py-0 flex flex-col gap-7'>
            <div className=' flex gap-2 '>
                <div className='flex gap-0 text-red-600'>
                    <FontAwesomeIcon icon={faIndianRupeeSign} className='relative top-0'/>
                    {item && <p className=' font-bold text-2xl'>{item.price}</p>}
                </div>
                <div className='relative bottom-[-10px] text-gray-400 text-sm'>
                    Inclusive of all taxes
                </div>
            </div>
            <p className=' underline text-blue-500 cursor-pointer'>Free shipping on all orders above 299</p>
            <div className='w-[400px] h-[2px] rounded-lg bg-gray-300'></div>
            <div className=' w-[400px] h-[200px] p-4 border-dotted border-2 border-gray-300 flex flex-col gap-3'>
                <h3 className=' font-semibold text-lg'>Shop more, Save more</h3>
                <p className=' text-base'>FLAT 400 Off on orders worth Rs.1999, code- Fashion400 | App Exclusive Offer! Extra 150 OFF on Rs.999 & above (valid on first order), code- APP150</p>
            </div>
            <div className='w-[400px] h-[1px] rounded-lg bg-gray-300'></div>
            
            
            <div className='flex flex-col gap-2'>
                <div className='flex gap-3 items-center font-semibold text-md'>
                    <button><FontAwesomeIcon icon={faArrowRightArrowLeft} /></button>

                    <p>15 days exchange policy</p>
                </div>
                <div className='flex gap-3 items-center font-semibold text-md'>
                    <button><FontAwesomeIcon icon={faHouseUser} /></button>
                    <p>Hassle free payment</p>
                </div>
                
            </div>
            
            <div className='flex gap-3 mt-4'>
                {logged ? <><button className=' px-4 py-3 bg-[#BC4C2A] text-white text-sm  cursor-pointer hover:bg-[#dc7b5d]' onClick={addtocart} >Add to Cart</button>
                    <button className=' px-3 py-2 bg-[#BC4C2A] text-white text-sm  cursor-pointer hover:bg-[#dc7b5d]'>Buy Now</button></> : <NavLink to="/login" className="underline text-blue-500 cursor-pointer">Login to buy!!</NavLink>}
                
            </div>
            
            
        </div>

    </div>
        }
      
    </div>
  )
}

export default Specificproductpage
