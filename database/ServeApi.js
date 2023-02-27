const express = require("express")
const expreesAsyncHandler = require("express-async-handler")
const router = express.Router({ mergeParams: true }) // IMPORATNT PARAMETER IDK WHY AND HOW ..
const DataBase = require("./dbModel")

/**
* WHILE USING DATABASE , IT RETURNS A PROMISE HENCE WE NEED ALL OUR CALLBACKS TO BE ASYNC
* THUS FOR SIMPLIFICATION USING "express-async-handler" 
* enclose call back inside the handler .
**/

router.get("/" , expreesAsyncHandler(
    async (req,res) => {
        console.log("tried to get")
        let data_to_be_sent = await DataBase.find()
        data_to_be_sent = data_to_be_sent ? data_to_be_sent : "Solution not found !"
        res.json({
            "Type":"get",
            "Database entries => ":data_to_be_sent
        })
    })
);

router.post("/" , expreesAsyncHandler(
    async (req,res) => {
        console.log(`POST REQUEST HAPPEND name=${req.body.Name} , email=${req.body.email} , mes=${req.body.message}`.bgGreen.blue.bold)
        const t = new DataBase({
            "name":req.body.Name,
            "email":req.body.email,
            "message":req.body.message
        })
        await t.save()
        res.json({
            "STATUS":"Visitor's name , email and message recieved ."
        });
    })
);

// router.put("/" , expreesAsyncHandler(
//     async (req,res) => {
//         const data_to_be_checked = await DataBase.findById(req.params.id)
//         if(!data_to_be_checked){
//             res.json({
//                 Message:"Solution not found",
//                 Type:"put"
//             })
//         }
//         else{
//             const data_to_be_updated = await DataBase.findByIdAndUpdate(req.params.id,req.body,{new:true})
//             res.json({
//                 // Message:req.params.name,
//                 "Data updated":data_to_be_updated,
//                 Type:"put"
//             })
//         }
//     })
// );

router.delete("/" , expreesAsyncHandler(
    async (req,res) => {
        await DataBase.remove();
        res.json({
            // Message:req.params.id,
            Type:"delete"
        })
    })
);

module.exports = router