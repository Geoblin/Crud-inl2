import React, { useState, useEffect } from 'react';
import { useNavigate, useParams} from "react-router-dom";


export const EditTodo = () => {
    const [form, setForm] = useState({
        text: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchTodo() {
            const response = await fetch (`http://localhost:5003/api/updatetodo/${params._id.toString()}`);

            if (!response.ok) {
                const message = `ERROR ERROR: ${response.statusText}`;
                window.alert(message);
                return;
            }
        }
        fetchTodo();
        return;
    }, [params._id, navigate]);

    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedTodo = {
            text: form.text
        };

        await fetch(`http://localhost:5003/api/updatetodo/${params._id}`, {
            method: "POST",
            body: JSON.stringify(editedTodo),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        navigate("/");
    }

    return (
    <div className='container'>
            <div className='mt-3'>
                <h3>Edit Todo Item</h3> 
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor="Text">Text:</label>
                        <input className='form-control' type="text" name="text" id="text"
                        value={form.text}
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