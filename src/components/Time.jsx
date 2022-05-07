import React,{useState} from 'react'

export default function Time() {
    let d=new Date().toLocaleTimeString();
    const [currntTime, setcurrntTime] = useState(d)
    
    
    setInterval(()=>{
        d=new Date().toLocaleTimeString();
        setcurrntTime(d)
    },1000)
  
  return (
    <div>
        <h1>{currntTime}</h1>
    </div>
  )
}
