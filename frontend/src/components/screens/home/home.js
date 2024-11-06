import React from 'react'
import HomeBody from './body'
import HomeHead from './head'

const Home = () => {
  return (
  <section className='flex flex-column justify-content-center align-items-center '>
    <div className='w-8 flex flex-column mt-5 gap-2'> 
      <HomeHead/>
      <HomeBody/>
    </div>
  </section>

  )
}

export default Home