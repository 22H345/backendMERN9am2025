import React, { useEffect, useState } from 'react'

function Timer() {
    const [count, setCount]= useState(0) ;
    useEffect(()=>{
        console.log("Timer Has started ");
   


    const interval =  setInterval(()=>{
        setCount((prev) => prev + 1 );
    },1000)


    return()=> {
        console.log("Timer has Stopped ");
        clearInterval(interval)
        
    }
     },[])
  return (
    <div className='P-4 bg-amber-200 rounded-xl shadow-md'>
        <h2 className='text-x1 font-bold'>Timer</h2>
        <p className='text-lg'>Seconds Passed:  {count}</p>
    </div>
  )
}

export default Timer