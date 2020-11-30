import React, { useState } from 'react'
import { connect } from 'react-redux'

function AddList(props){
    const [text,setText]=useState()

     const Add=(value)=>{
      props.dispatch({
          type:'Add',
          text: value,
      })

     }

    return(
        <form onSubmit={(e)=>{e.preventDefault();
        
            Add({id:Date.now(),description:text,isDone:false,edit:false});
        
            setText("")}}>

            <input onChange={(e)=>setText(e.target.value)} value={text} type='text' placeholder='***'/>
        </form>
    )

}

const mapStateToProps=state=>{
    return (
        {
            todos:state.todos
        }
    )
}

export default connect(mapStateToProps)(AddList) 