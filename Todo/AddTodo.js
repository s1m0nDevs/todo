import React, {useState} from 'react'

const AddTodo = ({onCreate}) => {

    const [addValue, setAddValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        if(addValue.trim()){
            onCreate(addValue)
            setAddValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Добавить задачу"
                value={addValue}
                onChange={e=>setAddValue(e.target.value)}
                />
            <button 
                type="submit"
                >ДОБАВИТЬ</button>
        </form>
    )
}

export default AddTodo