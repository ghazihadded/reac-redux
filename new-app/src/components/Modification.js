import React from 'react';
import { connect } from 'react-redux'


function Modifaction({todos,id,modif,dispatch}){

    const Modif=()=>{
        const newState=todos.map(el=>{
            return el.id==id?{...el,edit:!el.edit}:el
        })
        return newState
    }   
    
    const action=(modif)=>{
        dispatch({
            type:'Modification',
            arr:modif ,
        })
    }


    return (
        <button onClick={()=>action(Modif())}  className='btn-primary'>{!modif?"modifier":"terminer"}</button>
    )
}




const mapStateTProps = state => {

    return (
        {
            todos: state.todos
        }
    )
}

export default connect(mapStateTProps)(Modifaction);