const express = require('express');
const router = express.Router();  
const Todo = require('./../models/Todo');


router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find()

        if (!todos) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        return res.json({todos:todos});
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});


router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo({
            title   : req.body.title,
            status  : req.body.status
        })
        await newTodo.save();
        return res.json({newItem:newTodo});
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});


router.delete('/:todo_id', async (req, res) => {
    console.log(req.params.todo_id)
    try {
        await Todo.findOneAndRemove({ _id: req.params.todo_id });

        return res.json({
            msg         : 'Deleted Todo',
            todo_id     : req.params.todo_id
        });
        // Todo.findOneAndRemove({ _id: req.params.todo_id })
        //     .then(item =>{
        //     })
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.put("/:todo_id",  async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.todo_id });
        todo.title = req.body.title;
        todo.status = req.body.status;

        await todo.save();
        return res.json({updatedItem:todo});
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
    }
);


module.exports = router;
