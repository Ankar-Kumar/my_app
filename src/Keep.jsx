import React, { useState,useEffect } from "react";
// import TodoList from "./components/TodoList";
import "./App.css";

const getLocal=()=>{
  const list=localStorage.getItem("mylist")

  if(list){
    return JSON.parse(list)
  }
  else{
    return []
  }
}

export default function Keep() {

  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState(getLocal());
  const [isEdit, setisEdit] = useState("")
  const [toggle, settoggle] = useState(false)

  useEffect(() => {
    localStorage.setItem("mylist",JSON.stringify(items))
  }, [items])


  const itemEvents = (evnt) => {
    setinputList(evnt.target.value);
  };
  const listItem = () => {
    if(!inputList) alert("plz enter data")
    else if(inputList && toggle){
      setitems(
        items.map((elem)=>{
          if(elem.id===isEdit){
            return {...elem,name:inputList}
          }
          return elem;
        })
      )
    }
    else{
      const data={
        id:new Date().getTime().toString(),
        name:inputList
      }
      setitems([...items,data])
    }
    // setitems((olditem) => {
    //   return [...olditem, inputList];
    // });
    setinputList("");
    settoggle(false)
  };

  const deleteItem = (ind) => {
    setitems((olditem) => {
      return olditem.filter((element) => {
        return element.id !== ind;
      });
    });
  };

  const updateItem=(index)=>{
      const update=items.find((curelem)=>{
        return curelem.id===index
      })
      setinputList(update.name)
      setisEdit(index)
      settoggle(true)
  }

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
          <button onClick={listItem}>+</button>
          <ol>
            {items.map((val) => {
              return (
                <>
                  <div className="todo_style" key={val.id}>
                    <i
                      className="fa fa-times"
                      aria-hidden="true"
                      onClick={() => {
                        deleteItem(val.id);
                      }}
                    />
                     <i
                      className="fa fa-times"
                      aria-hidden="true"
                      onClick={() => {
                        updateItem(val.id);
                      }}
                    />
                    <li>{val.name}</li>
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
