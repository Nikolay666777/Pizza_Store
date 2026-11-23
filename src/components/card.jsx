import { useContext, useState } from "react";
import { cartState } from "../App";

export default function Card({ id, name, ingredients, image, price, reducer }) {
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(1)
	const toggleLike = () => {
		setIsLiked(!isLiked)
	}
    const contextDispatch  = useContext(cartState).dispatch
    
    const addToCart = (id, name, price, qty) => {
        contextDispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: id,
                name: name,
                price: price,
                qty: qty, 
                img: image
            }
        })
    }
    
    return(
    <div key = {id} className="w-76 bg-white shadow">
        <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})`}}>
            <div className="flex justify-end-safe">
                <button className="text-gray-400 hover:text-blue-500" onClick={toggleLike}>
                    <svg width='18'	height='18'	viewBox='0 0 24 24'	fill={isLiked ? 'red' : 'none'}	stroke={isLiked ? 'red' : 'currentColor'} strokeWidth='1.5'>
						<path d='M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z' />
					</svg>
                </button>
            </div>
        </div>
        <div className="p-4 flex flex-col items-center">
            <h2 className="text-gray-800 text-center mt-1">{name}</h2>
            <p className="text-gray-400 font-light text-xs text-center h-12 line-clamp-3">{ingredients}</p>
            <p className="text-center text-gray-800 mt-1">{price} ₽</p>
            <div className="inline-flex items-center mt-2">
                <button onClick={()=>setCount(count-1)} disabled={count===1}
                    className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                </button>
                <div
                    className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                    {count}
                </div>
                <button onClick={()=>setCount(count+1)}
                    className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>

            <button onClick={() => addToCart(id, name, price, count, image)}
                className="py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-600 active:bg-blue-500 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                Добавить
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </button>
        </div>
    </div>
    )}