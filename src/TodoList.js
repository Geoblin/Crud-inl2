import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const url = 'http://localhost:5003/api/gettodo';
    useEffect(() => {
        async function fetchAllTodos() {
            try {
                let response = await fetch(url);
                let data = await response.json();
                setTodos(data.todo);
            } catch (error) {
                console.log("Something wrong with fetch");
            }
        }
        fetchAllTodos();

    },[])
    return <div class="container">
        <div className='mt-3'>
            <h3>TodoList</h3>
            <table className='table table-striped mt-3'>
                <thead>
                    <tr>
                        <th>Text</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                            <tr key={todo._id}>
                                <td>
                                    {todo.text}
                                </td>
                                <td>
                                    {/* 
                                    <Link to={`/edit/${todo._id}`}>Edit</Link>
                                    <br></br>
                                    <Link to={`/delete/${todo._id}`}>Delete</Link>
                                    */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
}