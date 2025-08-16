const Todo = require('../models/Todo');

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body;

        // Create new Todo
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title , description, updatedAt: Date.now() }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: "updated"
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


