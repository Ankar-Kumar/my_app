import React from 'react'

function Keepto({text,onSelect,id,onSelect2}) {

    
  return (
    <>
    <div className="todo_style">
    <i className='fa fa-times' aria-hidden="true"
    onClick={()=>{
        onSelect(id)
    } }
    />
    <i className='fa fa-times' aria-hidden="true"
    onClick={()=>{
        onSelect2(id)
    } }
    />
    <li>{text}</li>
    
    </div>
    
    </>
  )
}

export default Keepto