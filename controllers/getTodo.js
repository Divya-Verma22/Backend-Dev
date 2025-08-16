const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: "Entry shown successfully"
        });




    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: true,
            data: err.message,
            message: "err"
        });

    }
};

exports.getTodoById = async (req,res)=>{
    try{
        const id = req.params.id
        const todo = await Todo.findById({_id : id});
        //err in todo
        if(!todo){
            res.send(404).json({
                success:false,
                message: "data not found"
            })

        }
         res.status(200).json({
            success: true,
            data: todo,
            message: `Entry by Id ${id} shown`
        });


    }
    catch(err){
         console.error(err);
        res.status(500).json({
            success: false,
            data: "server error",
            message: err.message
        });

    }
}

