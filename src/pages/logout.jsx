import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Logout(){
    const navigate = useNavigate()
    useEffect(()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate("/") 
    }, [])
    return(
        <h1>Logging you out...</h1>
    )
}