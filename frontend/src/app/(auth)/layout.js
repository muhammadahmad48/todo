import React from 'react'

const LoginLayout = ({children}) => {
  return (
    <section className='bg-teal-200  w-screen h-screen flex justify-content-center align-items-center	'>
        {children}
    </section>
  )
}

export default LoginLayout