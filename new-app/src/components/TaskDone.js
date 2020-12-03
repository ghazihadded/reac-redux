import React from 'react';
import { connect } from 'react-redux'

function TaskDone({dispatch,filter}){

  const action = (e) => {
    dispatch({
        type: 'Filter',
        payload: e.target.name

    })

} 
 

    return(
        <>
         <button name='List' onClick={(e)=>{action(e);filter()}} className='mt-5'>List</button>
        <button name='Done' onClick={(e)=>{action(e);filter()}} className='mt-5'>Tasks-Done</button>
        <button name='Not_Done' onClick={(e)=>{ action(e);filter()}}  className='mt-5'>Tasks-Not Done</button>
      </>
    )
}
  



export default connect()(TaskDone)