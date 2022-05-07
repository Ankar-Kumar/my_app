import logo from './logo.svg';
// import './App.css';
import styled from'styled-components'
import Time from './components/Time';
import React,{useState} from 'react'
import Keep from './Keep';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Resturant from './components/Resturant';



function App() {



  return(
    <>
    <Resturant />
    </>
  )
}

//   const [addItem, setaddItem] = useState([])

//   const addNote=(note)=>{
    
//     setaddItem((prevData)=>{
//       return [...prevData,note]
//     })
//     console.log(note)
//   }
//   return(
//     <>
//     {/* <Keep/> */}
//     <CreateNote 
//     passNote={addNote}
//     />
//     {addItem.map((val,index)=>{
//       return <Note 
//       key={index}
//       id={index}
//       title={val.title} 
//       content={val.content}/>
//     })}
//     </>
//   )
// }

export default App;
