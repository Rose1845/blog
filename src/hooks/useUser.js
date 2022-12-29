
import { useEffect, useState } from "react"
import { getAuth,onAuthStateChanged } from "firebase/auth"
const useUser=()=>{

    const [user,setUser]=useState(null)
    const [isLoading,setLoading]=useState(false)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(getAuth(),user=>{
            setUser(user)
            setLoading(false)
        })
        return unsubscribe
    })

}