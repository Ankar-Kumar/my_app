import React,{useState} from 'react'

export default function CreateNote(props) {
    const [note, setnote] = useState({
        title:"",
        content:""
    })
    const inputEvent=(evnt)=>{
        const {name,value}=evnt.target
        setnote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            }
        })
        
    }

    const addEvent=()=>{
        props.passNote(note)
        // setnote({
        //     title:"",
        //     content:"",
        // })
    }
  return (
    <>
    <div className="main_note">
      <form>
        <input type="text"
         name="title" 
        value={note.title}
        onChange={inputEvent}
         placeholder="title"/>
        <textarea
         name="content"
        value={note.content}
        onChange={inputEvent}
        id="" cols="" rows="" placeholder='add a content ...'></textarea>
        <button className='plus_sign' onClick={addEvent}>+</button>

      </form>
    </div>
    </>
  )
}
