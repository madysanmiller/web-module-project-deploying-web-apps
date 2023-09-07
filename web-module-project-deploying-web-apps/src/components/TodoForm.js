import React, { useState } from "react";

const TodoForm = ( { addTodo } ) => {
    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim() !== '') {
            addTodo(todoText);
            setTodoText('');
        }
    };

    const handleChange = (e) => {
        setTodoText(e.target.value);
    }

    return (
        <div className="TodoForm">
            <form onSubmit={handleSubmit}>
                <input 
                type='text' 
                value={todoText} 
                onChange={handleChange} 
                placeholder="Add New Todo"
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;