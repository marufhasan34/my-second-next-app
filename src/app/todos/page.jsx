import React from 'react';

const TodosPage =async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    return (
        <div>
            <h2>Todos : {todos.length}</h2>
        </div>
    );
};

export default TodosPage;