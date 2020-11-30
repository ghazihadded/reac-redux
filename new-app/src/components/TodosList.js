import React, { useState } from 'react';
import '../App.css'
import { connect } from 'react-redux';
import Delete from './Delete'
import Modification from'./Modification'


function TodosList({ todos,dispatch }) {
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
            {todos.map(el => {
                return (
                    <div className="list" key={el.id}>
                       <h2  className={el.isDone?"line":""}>{el.description}</h2>
                      {el.edit&&
                      <form onSubmit={(e)=>{e.preventDefault();
                      action(edit(el.id));
                      setText("")
                      }}>
                      <input onChange={(e)=>setText(e.target.value)} value={text} type='text' placeholder='....' />
                      </form>
                      }
                        <div>
                           <Delete id={el.id} done={el.isDone} />
                           <Modification id={el.id} modif={el.edit}/>
                        </div>
                    </div>
                )
            }

            )}
            

        </div>
    )


}

const mapStateTProps = state => {

    return (
        {
            todos: state.todos
        }
    )
}

export default connect(mapStateTProps)(TodosList);