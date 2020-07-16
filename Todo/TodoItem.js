import React from 'react'

const TodoItem = ({todoObj, index, onChange, removeTodo}) => {

    return (
        <li>
            <div className="item">
                <label>
                    <input type="checkbox" 
                        checked={todoObj.completed}
                        onChange={()=>{onChange(todoObj.id)}}/>
                    <div className="custom-checkbox"></div>
                    <strong>{index}</strong>
                    <p className={todoObj.completed ? 'done' : ''}>{todoObj.title}</p>
                </label>
                <button 
                    className="close-btn"
                    onClick={removeTodo.bind(null, todoObj.id)}
                    >&times;</button>
            </div>
        </li>
    )
}

export default TodoItem
