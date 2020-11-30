import React from 'react';
import { connect } from 'react-redux'

function TaskDone({todos,dispatch}){

    const filter=()=>{
      const done= todos.filter(el=>el.isDone==true)
      return done        

    }
    const filterNot=()=>{
        const done= todos.filter(el=>el.isDone==false)
         
          return done     
  
      }
    
    const action =(filter)=>{
        dispatch({
            type :'Done',
            filter:filter ,
        })
    }
    const actionNot =(filter)=>{
        dispatch({
            type :'Not',
            filter:filter ,
        })
    }
    return(
        <>
        <button onClick={()=>action(filter())} className='mt-5'>Tasks-Done</button>
        <button onClick={()=>actionNot(filterNot())} className='mt-5'>Tasks-Not Done</button>
      </>
    )
}
  
const mapStateToProps=state=>{
    return(
        {
            todos:state.todos
        }
    )
}


export default connect(mapStateToProps)(TaskDone)