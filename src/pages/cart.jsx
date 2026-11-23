import { useContext, useEffect, useMemo, useState } from "react";
import CartItem from "../components/cartItem";
import { cartState } from "../App";
import Total from "../components/totalCart";


export default function Cart(){
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  const [isPopup, setIsPopup] = useState()
  const cartContext = useContext(cartState).state.items
  const total = useMemo(() => {
    return cartContext.reduce((sum, item) =>
      sum + (item.price*item.qty)
    ,0)
  }, [cartContext])
  const delivery = 300
  useEffect(()=>{
    setIsLoggedIn(!!localStorage.getItem('token'))
  },[])

  const confirmOrder = async () => {
      const order = {}
      order.order = JSON.parse(localStorage.getItem('cart'))
      order.userId = localStorage.getItem('user')
      order.date = new Date().toISOString()
    try{
      if(cartContext.length != 0) throw new Error("Корзина пуста")
      const response = await fetch("http://localhost:3000/orders", {
        method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
          body: JSON.stringify(order),  
      })
      if(!response.ok) throw new Error("invalid order data")
      localStorage.removeItem('cart')
      setIsPopup(true)
    }catch(error){
      console.error('Ошибка отправки: ', error.message)
    }
  }
  return(
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 min-h-[79vh]">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Корзина</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {(cartContext.length > 0) ? cartContext.map(item => 
                (<CartItem key={item.id} {...item}/>)
              ) : (
                <>
                  <p>Корзина пуста</p>
                  {isPopup && <h1 style={{"color":"red"}}>Спасибо за заказ!</h1>}
                </>
              )
            }
            </div>
          </div>

          <Total total={total} delivery={delivery} isLoggedIn={isLoggedIn} confirmOrder={confirmOrder}/>
        </div>
      </div>
    </section>
    )
}