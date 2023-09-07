import React, { useState } from "react";

const TodoItem = ( { todo, toggleCompleted, deleteTodo } ) => {
    const [showComplete, setShowComplete] = useState(true);

    const handleToggle = () => {
        toggleCompleted(todo.id);
        setShowComplete(false);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    const itemClassName = todo.completed ? 'completed' : '';

    return (
        <div className="TodoItem">
            <li>
                <span className={itemClassName} onClick={handleToggle}>
                    {todo.text}
                </span>
                {showComplete && !todo.completed && (
                    <button onClick={handleToggle}>Complete</button>
                )}
                {!showComplete && (
                    <button onClick={handleDelete}>Delete</button>
                )}
            </li>
        </div>
    );
}

export default TodoItem;