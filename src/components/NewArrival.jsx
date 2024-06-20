import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { Context } from '../context/Context'
import ProductContainer from './ProductContainer';
import "./NewArrival.css"
import {
    collection,
    query,
    onSnapshot, getDocs
} from "firebase/firestore";
import { db } from '../firebaseConfig/FirebaseConfig';

function NewArrival() {

    const [belts,setBelts]=useState([])
    const [bag,setBag]=useState([])
    const [earrings,setEarrings]=useState([])
    useEffect(() => {
        const getProducts = (type) => {

            const productsArray = [];
            const path = `products-${type.toUpperCase()}`
            // console.log(props)

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    
                    productsArray.push({ ...doc.data(), id: doc.id })
                });
                setBelts(productsArray)
                

                
            }).catch('Error error error')
        }

        getProducts("Belts");
        
    }, [])
    useEffect(() => {
        const getProducts = (type) => {

            const productsArray = [];
            const path = `products-${type.toUpperCase()}`
            // console.log(props)

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    
                    productsArray.push({ ...doc.data(), id: doc.id })
                });
                setBag(productsArray)
                

                
            }).catch('Error error error')
        }

        getProducts("Handbag");
        
    }, [])
    useEffect(() => {
        const getProducts = (type) => {

            const productsArray = [];
            const path = `products-${type.toUpperCase()}`
            // console.log(props)

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    
                    productsArray.push({ ...doc.data(), id: doc.id })
                });
                setEarrings(productsArray)
                

                
            }).catch('Error error error')
        }

        getProducts("Earrings");
        
    }, [])
    
    
  return (
    <div className='  flex flex-col justify-center items-center'>

        <div className='heading-div mt-[120px]'>
            <h1>Belts</h1>
            <div className='line-div'></div>
        </div>

        <div className='product-slider '>
                {belts.map((belt) => (
                    <ProductContainer
                        key={belt.id}
                        product={belt}
                    />
                ))}

        </div>

        <div className='heading-div'>
            <h1>Earrings</h1>
            <div className='line-div'></div>
        </div>
        <div className='product-slider'>
                {earrings.map((earring) => (
                    <ProductContainer
                        key={earring.id}
                        product={earring}
                    />
                ))}

        </div>

        <div className='heading-div'>
            <h1>Handbags</h1>
            <div className='line-div'></div>
        </div>
        <div className='product-slider  mb-20'>
                {bag.map((product) => (
                    <ProductContainer
                        key={product.id}
                        product={product}
                    />
                ))}

        </div>
      
    </div>
  )
}

export default NewArrival
