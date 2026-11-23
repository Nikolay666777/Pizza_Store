import Header from './components/header'
import Footer from './components/footer';
import { BrowserRouter, redirect, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/404';
import { createContext, useEffect, useReducer } from 'react';
import Cart from './pages/cart';
import Login from './pages/login';
import Logout from './pages/logout';

export const cartState = createContext() 
const initialStateCart = {
  items: [],
  totalqty: 0,
}

const reducer = (state, action) =>{
        switch (action.type){
            case 'ADD_TO_CART':{
                const itemInCart = state.items.find(item => item.id === action.payload.id)
                let updatedItems
                if(itemInCart){
                    updatedItems = state.items.map(item =>
                        item.id === action.payload.id
                        ? {...item, qty: item.qty + action.payload.qty}
                        : item
                    )
                }else{
                    updatedItems = [ ...state.items, {...action.payload}]
                }
                let total = updatedItems.reduce( (sum, item) => sum + item.qty, 0)

                return {
                    ...state, items: updatedItems, totalqty: total
                }
            }
            case 'CLEAR_CART':{
              return state = initialStateCart
            }
            case 'DELETE_CART_ITEM':{
              let updatedItems = state.items.filter(item => item.id !== action.payload.id)
              let total = updatedItems.reduce((sum, item) => sum + item.qty, 0)
              return {
                    ...state, items: updatedItems, totalqty: total
                }
            }
            case 'UPDATE_CART_ITEM_QTY': {
              const { id, qty } = action.payload
              
              let updatedItems = state.items.map(item => {
                if (item.id === id) {
                  const newQty = item.qty + qty
                  if (newQty <= 0) {
                    return null
                  }
                  return { ...item, qty: newQty }
                }
                return item
              }).filter(item => item !== null)
              
              // Если после удаления корзина пуста
              let total = updatedItems.reduce((sum, item) => sum + item.qty, 0)
              
              return {
                ...state,
                items: updatedItems,
                totalqty: total
              }
            }
            default:
                return state
        }
    }

function App() {
  const [state, dispatch] = useReducer(reducer, initialStateCart, () => {
    try{
      const savedCart = localStorage.getItem('cart')
      if(savedCart){
        return JSON.parse(savedCart)
      }
    } catch(err) {
      console.error('Не удалось загрузить корзину из localStorage', err)
    }
    return initialStateCart
  })
  useEffect(()=>{
    if(state.items.length != 0){
    try{
      localStorage.setItem('cart', JSON.stringify(state))
    } catch(err) {
      console.error('Не удалось загрузить корзину из localStorage', err)
    }
}}, [state])
 
  return (
    <BrowserRouter>
    <cartState.Provider value={{ dispatch, state }}>    
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </cartState.Provider>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
