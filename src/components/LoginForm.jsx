import { redirect, useNavigate } from "react-router-dom";
import { useState } from "react"
import Logo from "../assets/logo.png"
export default function LoginForm( {toggleLogin} ) {
   const [formData, setFormData] = useState({email: '', password: ''})
   const [error, setError] = useState()
   const navigate = useNavigate()

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
      const response = await fetch('http://localhost:3000/signin', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(formData)
      });

      if (!response.ok) {
         throw new Error('Неверный логин или пароль');
      }

      const data = await response.json();
      setFormData({email:"",password:""})
      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('user', data.user.id)
      navigate('/')
      }catch(error){
         setError(error)

         alert(error.message)
      }
   }
   const handleChange = (e) => {
      const {name, value} = e.target
      setFormData(prev => ({...prev, [name]: value}))
   } 

   return (
      <main className="bg-gray-50 px-4 md:px-8" >
         <div className="min-h-[79vh] flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
               <a href="/"><img src={Logo} alt="logo"
                  className="w-14 min-h-14 mb-8 mx-auto block" />
               </a>

               <div
                  className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8">
                  <h1 className="text-slate-900 text-center text-3xl font-bold">Авторизация</h1>

                  <form className="space-y-6 mt-10" onSubmit={(e)=>handleSubmit(e)}>
                     <div>
                        <label htmlFor="email"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                        <input type="email" id="email" name="email" placeholder="mail@example.com" required
                           onChange={(e)=>handleChange(e)}
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>
                     <div>
                        <label htmlFor="password"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block">Пароль</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required
                           onChange={(e)=>handleChange(e)}
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>

                     <button type="submit"
                        className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Войти</button>

                     <div className="text-slate-900 text-sm text-center">Нет аккаунта? <span onClick={()=>toggleLogin(false)}
                        className="text-blue-700 hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Тогда зарегистрируйтесь</span>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </main>
   );
}