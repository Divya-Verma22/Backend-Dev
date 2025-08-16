const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        

        // Create new Todo
        const todo = await Todo.findByIdAndDelete({_id : id})

        res.status(200).json({
            success: true,
            data: todo,
            message: "Delete"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "server error",
            message: err.message
        });
    }
};
