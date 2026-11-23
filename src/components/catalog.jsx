import { useState, useEffect } from "react"
import Card from "./card"

export default function Catalog(){
    const [ list, setList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError] = useState(null)
    
    
    useEffect(()=>{
        const fetchPizzas = async() =>{
            try{
                setLoading(true)
                const resp = await fetch('http://localhost:3000/pizzas')
                if(!resp.ok){
                    throw new Error(`HTTP Error! status: ${resp.status}`)
                }
                const result = await resp.json()
                setList(result)
                setError(null)
            } catch (error){
                setError(error.message)
                setList([])
            } finally {
                setLoading(false)
            }
        }
        fetchPizzas()
    },[])

    return (
        <div className="flex flex-wrap gap-4 py-10 px-2 ">
            { (!error) ?
                 list.map(pizza => (
                    <Card key={pizza.id} {...pizza}/>
                )) : 
                <>
                    <h1>Error!</h1>
                    <h2>{error}</h2>
                </>
                
            }
            
        </div>
    )
}