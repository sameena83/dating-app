import express from "express";
import Cards from "./dbCards.js"
import bodyParser from 'body-parser'
//App config
const app=express();
app.use(express.json());
const PORT= 8001 || process.env.PORT;
import Cors from "cors"
app.use(Cors())
import dotenv from "dotenv";
dotenv.config();






import mongoose from "mongoose";
const db = 'mongodb://mehadiya:ppdIoZ62ZxcOi0e3@ac-lswz0aq-shard-00-00.prbuyzl.mongodb.net:27017,ac-lswz0aq-shard-00-01.prbuyzl.mongodb.net:27017,ac-lswz0aq-shard-00-02.prbuyzl.mongodb.net:27017/?ssl=true&replicaSet=atlas-vmyq69-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log("Error"+err));








// Middleware

//DB Config
//API Endpoints
app.get("/", (req,res)=>res.status(200).send("hello world"))


//post Endpoint


 

app.post('/dating', async(req, res) => {
  const cards= new Cards ({
    name: req.body.name,
    imageUrl: req.body.imageUrl
  }); 
  try {
      let data = await cards.save()
      res.status(200).json(data)
  } catch (error) {
    res.status(500).json(err)
  }
}); 




  app.get("/datas", function(req, res){
    Cards.find({}).sort({_id: -1}).then(function(records){
      res.send(JSON.stringify(records))
    });
  });

  










//listeners
app.listen(PORT,()=> console.log("listening on the port: ${port}"))