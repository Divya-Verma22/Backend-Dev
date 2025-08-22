const Todo = require('../models/Todo');


exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Create new Todo
        const response = await Todo.create({
            title,
            description
        });

        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully"
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


