import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import moviesRouter from "./route/movieroute.js";



const app=express();  

app.use(express.json());
app.use (cors());

function dbconnect(){
console.log("database connected successfully");

}
const port=5000;
function ready(){
    console.log(`hey ${port}`);
}
app.listen(port,ready);
function dbdisconnect(error){
    console.log("database  is not connected successfully");
}

app.use("/movies",moviesRouter);


mongoose.connect(`mongodb+srv://deepalikonety:oGKXSkB6S3NPd6Vn@cluster0.zwkrfg0.mongodb.net/?retryWrites=true&w=majority`).then(dbconnect).catch(dbdisconnect);

app.get("/",function (request,response){
    response.status(200).json({
        message:"Hello World!!",
    });
    

});
//backend\route\movieroute.js
//backend\models\moviemodel.js
//backend\index.js
//backend\index.js