import React, { useState } from 'react';
import { connect } from 'react-redux';

import Delete from './Delete'
import Modification from'./Modification'

import '../App.css'


function TodosList({ todos,todo,dispatch }) {
  const [text,setText]=useState()

 
  const edit=(id)=>{
   
    const add=todos.map(el=>{
        return el.id==id?{...el,description:text}:el
    })
    return add
  }
   const action =(edit)=>{
       dispatch({
           type:'Edit',
           arr:edit ,
        })
   }

    return (
        <div >
            
                
                    <div className="list" key={todo.id}>
                       <h2  className={todo.isDone?"line":""}>{todo.description}</h2>
                      {todo.edit&&
                      <form onSubmit={(e)=>{e.preventDefault();
                      action(edit(todo.id));
                      setText("")
                      }}>
                      <input onChange={(e)=>setText(e.target.value)} value={text} required type='text' placeholder='....' />
                      </form>
                      }
                        <div>
                           <Delete id={todo.id} done={todo.isDone} />
                           <Modification id={todo.id} modif={todo.edit}/>
                        </div>
                    </div>
                
            

            
       

        </div>
    )


}



export default connect()(TodosList);