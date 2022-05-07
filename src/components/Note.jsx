import React from 'react'

export default function Note(props) {
  return (<>
     <div className='note'>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className='deleteIcon'>delete</button>
     </div>
  </>
   
  )
}
