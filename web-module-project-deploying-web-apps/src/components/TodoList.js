import React from "react";




import TodoItem from "./TodoItem";




const TodoList = ( { todos, toggleCompleted, deleteTodo } ) => {

    return (

        <div className="TodoList">

            <ul>

                {todos.map((todo) => (

                   <TodoItem 

                        key={todo.id}

                        todo={todo}

                        toggleCompleted={toggleCompleted}

                        deleteTodo={deleteTodo}

                   />

                ))}

            </ul>

        </div>

    );

}




export default TodoList;