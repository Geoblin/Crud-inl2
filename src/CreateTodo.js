import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { useNavigate } from 'react-router-dom';

export const CreateTodo = () => {

    const [form, setForm] = useState({
        text: ""
    });
    const navigate = useNavigate();
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }
    async function onSubmit(e) {
        e.preventDefault();

        const newTodo = {...form};

        await fetch("http://localhost:5003/api/newtodo", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            body: JSON.stringify(newTodo),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ text: ""});
        navigate("/");
    }

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Create Todo Item</h3>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor="Text">Text:</label>
                        <input className='form-control' type="text" name="text" id="text"
                        onChange={(e) => updateForm({ text: e.target.value})}/>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>
                            Save Todo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}