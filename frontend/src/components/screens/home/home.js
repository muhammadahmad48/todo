'use client'
import React, { useReducer, useState } from 'react'
import HomeBody from './body'
import HomeHead from './head'
import { initialTodos, todoReducer } from '@/reducers/todoReducer';

const Home = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [modalType,setModalType]=useState(null);

  return (
  <section className='flex flex-column justify-content-center align-items-center '>
    <div className='w-8 flex flex-column mt-5 gap-2'> 
      <HomeHead modalType={modalType} setModalType={setModalType}  dispatch={dispatch}/>
      <HomeBody modalType={modalType} setModalType={setModalType} todos={todos} dispatch={dispatch}/>
    </div>
  </section>

  )
}

export default Home