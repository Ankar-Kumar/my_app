
import React, { useState,useEffect } from "react";
// import TodoList from "./components/TodoList";
import "./App.css";

import Keepto from "./Keepto";

const getlocalData=()=>{
  const lists=localStorage.getItem("mytodolist")
  if(lists){
    return JSON.parse(lists)
  }
  else {
    return [];
  }
}

export default function Keep() {

  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState(getlocalData());
  const [isEdit, setisEdit] = useState("")
  useEffect(() => {
   localStorage.setItem("mytodolist",JSON.stringify(items)) 
  }, [items]) 


  const itemEvents = (evnt) => {
    setinputList(evnt.target.value);
  };
  const listofItem=()=>{
      setitems((oldItems)=>{
        return [...oldItems,inputList]
      })
      setinputList("")
  }

  const deleteItems=(id)=>{
    setitems((old)=>{
      return old.filter((elem,ind)=>{
        return ind!=id
      })
    })
  }

  const update=((id)=>{
   const item=items.find((cur,ind)=>{
        return ind===id
   })

   setinputList(item);
   setisEdit(id);
  })
  
  return (
    <>
      {/* <Time /> */}
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            value={inputList}
            onChange={itemEvents}
            placeholder="add a items"
          />
          <button onClick={listofItem}>+</button>
          <ol>
           
            {
              items.map((val,ind)=>{
                return (
                  <Keepto key={ind} id={ind} 
                  onSelect={deleteItems}
                  onSelect2={update}
                  text={val}/>
              )})
            }
          </ol>
        </div>
      </div>
    </>
  )
  }

