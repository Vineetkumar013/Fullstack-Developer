const express = require("express")
const noteRouter = express.Router()
const {NoteModel} = require("../model/note.model")


noteRouter.get("/get",async(req,res)=>{
    const data = await NoteModel.find()
    res.send(data)
})


//POST=============================================>
noteRouter.post("/create",async(req,res)=>{
    const payload = req.body
    try {
        const data = new NoteModel(payload)
    await data.save()
    res.send("Data Posted Successfully")
    } catch (error) {
        console.log(Error)
        res.send("error in Post")
    }
})
noteRouter.patch("/update/:Id",async(req,res)=>{
    const payload = req.body
    const {Id} = req.params
    try {
        const data = await NoteModel.findByIdAndUpdate({_id:Id},payload)
    // await data.save()
    res.send("Data Updated Successfully")
    } catch (error) {
        console.log(Error)
        res.send("error in patch")
    }
})
//PATCH=====================================================>
// noteRouter.patch("/update/:noteID", async (req, res) => {
//     const noteID = req.params.noteID
//     const userID = req.body.userID
//     const payload = req.body
//     const note = await NoteModel.findOne({_id:noteID})
//     if(userID !== note.userID){
//         res.send("Not authorised")
//     }
//     else{
//         await NoteModel.findByIdAndUpdate({_id : noteID},payload)
//         res.send({"msg" : "Note updated successfully"})
//     }
// })

//DELETE====================================================>

noteRouter.delete("/delete/:Id",async(req,res)=>{
    const Id = req.params.Id
    try {
        const data =  await NoteModel.findByIdAndDelete({_id:Id})
    
    res.send("Data Deleted Successfully")
    } catch (error) {
        console.log(Error)
        res.send("error in Delete")
    }
})

module.exports ={
    noteRouter
}