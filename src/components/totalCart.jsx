import { memo, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function Total({ total, delivery, isLoggedIn, confirmOrder }){
  const navigate = useNavigate()
    return(
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Итого: </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Сумма заказа: </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">{ total }₽</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Доставка</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">{ delivery }₽</dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Итого к оплате:</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">{total + delivery} ₽</dd>
                </dl>
              </div>

              <span onClick={isLoggedIn ? () => confirmOrder(): () => navigate('/login')} className="flex w-full items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Оформить заказ</span>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> или </span>
                <a href="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Продолжить покупки
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
    )
}
export default memo(Total)