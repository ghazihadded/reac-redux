import React, { useState } from 'react'
import { connect } from 'react-redux'
import TaskDone from './TaskDone';
import TodoList from './TodosList'



function TodosCard({ todos, taskFilter, dispatch }) {
   
    const filter = (todos, taskfilter) => {
        switch (taskfilter) {
            case 'Done':
                return todos.filter(todo => todo.isDone == true);
            case 'Not_Done':
                return todos.filter(todo => todo.isDone == false);
            case 'List':
            default:
                return todos
        }

    }

    const result = filter(todos, taskFilter)

   


    return (
        <div>
            {result.map(todo => <TodoList todo={todo} key={todo.id} todos={todos} />)}
            <TaskDone filter={filter} />
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        taskFilter: state.taskFilter
    }
}



export default connect(mapStateToProps)(TodosCard)