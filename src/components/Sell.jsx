import React, { useState } from 'react'
import { storage, auth, db } from "../firebaseConfig/FirebaseConfig"
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Sell() {
    const [type,setType]=useState("");
    const [brand,setBrand]=useState("FashionLane");
    const [price,setPrice]=useState(0);
    const [image,setImage]=useState(null);
    const [des,setDes]=useState("");
    const [errorMssg,setErrorMssg]=useState("");
    const [succ,setSucc]=useState("");
    const [uploadErr,setUploadErr]=useState("")

    const types=["image/png","image/PNG","image/jpg","image/jpeg"];

    const handleAddProduct = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `product-images${type.toUpperCase()}/${Date.now()}`);
        console.log(storageRef._location.path)
        uploadBytes(storageRef, image)
            .then(() => {
                getDownloadURL(storageRef).then(url => {
                    addDoc(collection(db, `products-${type.toUpperCase()}`), {
                        type,
                        brand,
                        price,
                        des,
                        prodimage: url,
                        
                    }).then(() => {
                        setSucc('Product added successfully');
                        setTimeout(()=>{
                            setSucc("")

                        },4000)
                        setType("")
                        setDes("")
                        setPrice("")
                        setImage("")

                    }).catch((error) => { setUploadErr(error.message) });
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const handleImage=(e)=>{
        console.log(e.target.files);
        let selectedImage=e.target.files[0];

        if (selectedImage){
            if (selectedImage && types.includes(selectedImage.type)){
                setImage(selectedImage)
                setErrorMssg("")
            }
            else{
                setImage(null)
                setErrorMssg("Please choose a valid image type")
            }


        }
        else{
            setErrorMssg("Please choose some file")
        }
    }



  return (
    <div className='w-full h-screen flex justify-center items-center  bg-[#f8f4f0]'>

        <div className='flex flex-col bg-white rounded-xl w-[400px]'>
            {succ ? <div className='w-full mt-5 text-green-500 font-bold bg-green-100  flex justify-center items-center gap-1 py-1 '>
                <FontAwesomeIcon icon={faCircleCheck}  />
                <p>{succ}</p>


            
            </div> : <div className=' w-full  mt-5 text-white bg-[#BC4C2A] flex justify-center py-1 text-sm font-medium'>
                Fill the form to add products
            </div>}


            <form action="" className=" flex flex-col  gap-5  border-none outline-none text px-8  mb-5  mt-5 " >
                
          
                <input type="text" placeholder='Product-type' onChange={(e)=> setType(e.target.value)} className=" px-5 py-2 bg-[#cac8c82d] outline-none border-none text-sm rounded-2xl font-semibold" value={type}/>
                <input type="number" placeholder='Product Price' onChange={(e)=> setPrice(e.target.value)} className=" px-5 py-2 bg-[#cac8c82d] outline-none border-none text-sm rounded-2xl font-semibold" value={price}/>
                <textarea name="text" id="name" placeholder='Add few description of the product' onChange={(e)=> setDes(e.target.value)} className=" px-5 py-2 bg-[#cac8c82d] outline-none border-none font-semibold text-sm rounded-2xl" value={des}></textarea>
                <input type="file" name="image" id="image" onChange={handleImage} className=" px-5 py-2 bg-[#cac8c82d] outline-none border-none text-sm rounded-2xl font-semibold" />
                {errorMssg && <div className="w-full bg-[#e955551a] text-sm text-red-600 font-medium p-1 mb-3 mt-3 text-center ">{errorMssg}</div>}
                <button type="submit" className=" w-full bg-[#BC4C2A] text-white px-3 py-2  font-semibold hover:bg-[#f07b57]" onClick={handleAddProduct}>Add Product</button>
            </form>

        </div>
      
    </div>
  )
}

export default Sell
