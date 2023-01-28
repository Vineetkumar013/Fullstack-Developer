const mongoose =require("mongoose")
// const crud =require("mongoose-crud")
const express = require("express")

const app = express()
app.use(express.json())


const main = async()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/film")
        console.log("Connected to Database")
        // mongoose.disconnect()
    } catch (error) {
        console.log("error")
        console.log(error)
    }
}
main()

    const movieschema  = new mongoose.Schema({
        title: { type: String,required: true},
          rating: {type: Number,required: true},
        release_year:Number,
        language:String

    })

    

//Post -------------------------------------------------------------------------------------------------------------------->
    app.post('/movies', (req, res) => {
    const Moviemodal =  mongoose.model("movie", movieschema)
    let data = new Moviemodal(req.body)
   let result=  data.save((err,data)=>{
    if(err){
        res.send("eroor")
        console.log("Error")
    }else{
        res.send("Successfully Posted")
    }
   })

   console.log(result)

})


//GET---------------------------------------------------------------------------------------------------------------------->
app.get("/movies",async(req,res)=>{
    const Moviemodal =  mongoose.model("movie", movieschema)
    let data = await Moviemodal.find()
    res.send(data)
    console.log(data)
})


//Fillet by Rating---------------------------------------------------------------------------------------------------------->
app.get("/filterrating",async(req,res)=>{
    const Moviemodal =  mongoose.model("movie", movieschema)
    let data = await Moviemodal.find().sort({rating:1})
    res.send(data)
    console.log(data)
})


//Filter by Title----------------------------------------------------------------------------------------------------------->
app.get("/filtertitle",async(req,res)=>{
    const Moviemodal =  mongoose.model("movie", movieschema)
    let data = await Moviemodal.find().sort({title:1})
    res.send(data)
    console.log(data)
})


//Pagination---------------------------------------------------------------------------------------------------------------->
app.get("/movie",async(req,res)=>{
    const {page} = req.query
    console.log(req)
    const Moviemodal =  mongoose.model("movie", movieschema)
    let data = await Moviemodal.find().skip((page-1)*2).limit(2)
    res.send(data)
    console.log(data)
})


//Search-------------------------------------------------------------------------------------------------------------------->
app.get("/movies/:find", async(req,res)=>{
    const {find} = req.params
    const Moviemodal =  mongoose.model("movie", movieschema)
    // db.Employee.find({Employee_name:{$regex: "ab",$options:'i'}}).forEach(printjson)
    const data = await Moviemodal.find({title:{$regex: find, $options:'i'}})
    res.send(data)

})


//Delete------------------------------------------------------------------------------------------------------------------------>
app.delete("/movies/:find",async(req,res)=>{
    const {find} = req.params
    const Moviemodal =  mongoose.model("movie", movieschema)
    const data = await Moviemodal.deleteOne({title:find})
    res.send(data)
    console.log(data)
})


//Patch--------------------------------------------------------------------------------------------------------------------------->
app.patch("/movies/:id",async(req,res)=>{
    const title = req.body
    const {id} = req.params
    const Moviemodal =  mongoose.model("movie", movieschema)
    let data = await Moviemodal.findByIdAndUpdate({_id:id},title)
    res.send(data)
    console.log(data)
})


//Server-------------------------------------------------------------------------------------------------------------------------->

app.listen(5500,()=>{
    console.log("Server on 5500")
})