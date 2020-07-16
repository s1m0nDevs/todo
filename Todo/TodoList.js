import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({arrTodos, onChange, removeTodo}) => {
    return (
        <ul>
            {
                arrTodos.map((todoObj,index)=>
                    <TodoItem 
                        key={todoObj.id} 
                        todoObj={todoObj} 
                        index={index+1}
                        onChange={onChange}
                        removeTodo={removeTodo}
                    />
                )
            }
        </ul>
    )
}

export default TodoList