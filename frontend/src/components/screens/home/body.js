"use client"
import React, { useEffect, useState } from 'react'
import TodoTable from '../../elements/table'
import { fetchData } from '@/utils/apiUtils'



const HomeBody = () => {
    const [todos,setTodos]=useState([]);

    useEffect(() => {
        const controller = new AbortController();
    
        const loadTodos = async () => {
          try {
            const response = await fetchData(`/todo`,{
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });        
            const {data}=response;
            setTodos(data);
          } catch (err) {
            console.log(err)
            // if (err.name !== 'AbortError') {
            //   setError(err);
            // }
          } finally {
            // setLoading(false);
          }
        };
    
        loadTodos();
    
        return () => controller.abort();
    
    }, []);


    return (
        <TodoTable todos={todos}/>
    )
}

export default HomeBody