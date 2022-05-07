import React,{useState} from 'react'
import TodoList from './components/TodoList';
export default function Keep() {
  
    const [inputList, setinputList] = useState("")
  const [items, setitems] = useState([])
  const itemEvents=(evnt)=>{
      setinputList(evnt.target.value);
  }
  const listItem=()=>{
    setitems((olditem)=>{
      return [...olditem,inputList]
    })
    setinputList("")
  }


  const deleteItem=(id)=>{
    setitems((olditem)=>{
      return olditem.filter((element,ind)=>{
        return id!==ind
      })
    })
  }

  return (
    <>
      {/* <Time /> */}
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input type="text"
          value={inputList}
          onChange={itemEvents} placeholder="add a items"  />
          <button onClick={listItem}>+</button>
          <ol>
            {items.map((val,index)=>{
                return <TodoList
                key={index}
                id={index}
                onSelect={deleteItem} text={val} />;
              })}
          </ol>
        </div>
      </div>
    </>
    
  );
}
