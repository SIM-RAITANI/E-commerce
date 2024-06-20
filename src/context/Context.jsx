import { createContext, useContext, useState,useEffect } from "react";
import { auth,db } from '../firebaseConfig/FirebaseConfig';
import { collection, getDocs, query, where,onSnapshot } from 'firebase/firestore'

export const Context=createContext();

const ContextProvider=({children})=>{

    const [cart,setCart]=useState(0);
    const [username,setUserName]=useState("");
    const [emailID,setEmailID]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const[logged,setLogged]=useState(false);
    
    

     function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");

        useEffect(() => {
            const fetchUser = async (userlogged) => {
                try {
                    const q = query(usersCollectionRef, where("uid", "==", userlogged.uid));
                    const data = await getDocs(q);
                    const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setUser(userData);
                    setLogged(true);
                    console.log("User data fetched successfully");
                    console.log(data);
                    console.log(userData);
                    
                    console.log(username);
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                }
            };
    
            const unsubscribe = auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    fetchUser(userlogged);
                } else {
                    setUser(null);
                    setLogged(false);
                    
                    
                }
            });
    
            return () => unsubscribe();
        }, []);
    
        return user;
    }
    const user=GetCurrentUser()

    
    
    
        

    

    
        
    
    
    
    
  

    

    
    
    const contextValue={
        
        user,
        logged,
        setLogged,
        

    }




    return(
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>

    );

}

export default ContextProvider;