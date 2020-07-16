import React, { useState, useEffect } from 'react'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'

function App() {

	const [todoData, setTodoData] = useState([
				{ id:1, completed:false, title:"Buy some vegetables" },
				{ id:2, completed:false, title:"Do sport" },
				{ id:3, completed:true, title:"Wake up at 7am" },
				{ id:4, completed:false, title:"Learn React" },
				{ id:5, completed:true, title:"Read a book" }
			])

	const onChange = id => {
		setTodoData(
			todoData.map(obj=>{
				if(obj.id === id)
					obj.completed = !obj.completed	
				return obj
			})
		)
	}

	const removeTodo = id => {
		setTodoData(todoData.filter(todoObj=>todoObj.id !== id))
	}

	const addTodo = title => {
		setTodoData(todoData.concat([{
			title,
			completed: false,
			id: todoData.length? todoData[todoData.length-1].id + 1 : 1
		}]))
	}

	return (
		<div className="App">
			<h1>Todo</h1>
			<AddTodo onCreate={addTodo}/>
			{todoData.length?
				(<TodoList 
					arrTodos={todoData} 
					onChange={onChange} 
					removeTodo={removeTodo}/>)
			:
				(<p className="no-todos">No todos</p>)
			}
		</div>
	);
}

export default App;