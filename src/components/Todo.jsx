import React ,{useState} from 'react'
import useStore from '../Store/TodoStore'

const Todo = () => {

const [text,setText] = useState('')

const {arrText,addArrText,delArrText} = useStore((el)=> ({
    arrText: el.arrText,
    addArrText: el.addArrText,
    delArrText: el.delArrText
}))


const hdlChange = (e)=> {
    setText(e.target.value)
  }

  const hdlClickAdd = ()=> {
    addArrText(text)    
    setText('')
  }
  
  const hdlClickDelete = (id)=> {
    delArrText(id)
   }

  return (
    <div className=' flex flex-col justify-center items-center gap-8 mt-8'>
      <h1 className='text-3xl '>Todo List</h1>
      <div className='flex  justify-center items-center gap-8'>
      <input type="text" placeholder="Type here" onChange={hdlChange} value={text}
      className="input input-bordered w-full max-w-xs " />

        <button className="btn btn-outline btn-secondary" onClick={hdlClickAdd}>Add</button>

      </div>
      {
            arrText.map((item,index)=> (
         <div className='flex gap-8 '>
           <li className='  border-2 border-secondary p-2 rounded-md w-60' key={index}>{item.text}</li>
           <button className="btn btn-outline btn-secondary" >Edit</button>
           <button className="btn btn-outline btn-secondary" onClick={()=> hdlClickDelete(item.id)}>Delete</button>
         </div>
            ))
        }
    </div>
  )
}

export default Todo
