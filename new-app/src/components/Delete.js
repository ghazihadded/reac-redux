import React from 'react';
import { connect } from 'react-redux'

function Delete ({todos,id,done,dispatch}){
 
 
   const filter =()=>{
         
         const newState=todos.map(el=>{
            return el.id==id?{...el,isDone:!el.isDone}:el
        })

    
    return newState
   }
   const action =(filter)=>{
       dispatch({
           type:'Done_Not',
           arr:filter ,
       })
   }

    return(
    <button onClick={()=>action(filter())} className='btn-danger '>{done?"done":"not"}</button>
    )

}

const mapStateToProps=state=>{
    return(
        {
            todos :state.todos
        }
    )
}


export default connect(mapStateToProps)(Delete)