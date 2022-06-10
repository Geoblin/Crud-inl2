const express = require("express");
const todoRouter = express.Router()
const Todo = require("../models/Todo");

//Createtodo
todoRouter.post("/newtodo", (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save((err) => {
        if(err) {
            res.status(500).json({
                msg: {
                    msgBody: "Something went wrong",
                    msgError: true,
                },
            });
        } else{
            res.status(201).json({
                msg: {
                    msgBody: "Success saved",
                    msgError: false,
                },
            });
        }
    });
});
//Get all todos
todoRouter.get('/gettodo', (req, res) => {
    Todo.find({}, (err, documents) => {
        if(err) {
            res.status(500).json({
                msg: {
                    msgBody: "Something went wrong with getting the Todo",
                    msgError: true
                }
            })
        } else {
            res.status(200).json({ todo: documents })
        }
    })
})
//update the todos
todoRouter.put('/updatetodo/:id', (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.id,
        {
            text: req.body.text
        },
        (err) => {
            if(err) {
                res.status(500).json({
                    msg: {
                        msgBody: "Something went wrong while updating the Todo",
                        msgError: true
                    }
                })
            } else {
                res.status(200).json({
                    msg: {
                        msgBody: "Success, Todo updated",
                        msgError: false
                    }
                })
            }
        }
    )
})
//delete todos on id
todoRouter.delete('/deletetodo/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
        res.status(500).json({
            msg: {
                msgBody: 'Something went wrong with deleting the Todo',
                msgError: true
            }
        })
    } else{
        res.status(200).json({
            msg: {
                msgBody: 'Todo deleted',
                msgError: false
            }
        })
    }
    })
})

module.exports = todoRouter