import express from "express";
import Movie from "../models/moviemodel.js";

const router=express.Router();
router.post('/', async function(request,response){
    if(!request.body||!request.body.title || !request.body.genre || !request.body.releaseyear){
        return response.status(400).send({
            message:`send all required fields:title,genre,releaseyear`
            
        })
            
    }
const newmovie={
    title:request.body.title,
    genre:request.body.genre,
    releaseyear:request.body.releaseyear
};
const movie= await Movie.create(newmovie);
return response.status(201).send(movie);
});


router.get('/', async function(request,response){
    const movies=await Movie.find({});
    return response.status(201).json(movies);

});
router.get('/:id', async function(request,response){
    const id =request.params.id;
    const movies=await Movie.findById(id);
    return response.status(200).json(movies);

});
router.put("/:id",async function(request,response){
    if(
        !request.body||
        !request.body.title||
        !request.body.genre||
        !request.body.releaseyear
    ){
        return response.status(400).send({
            message:"Send all the required fiels:title,genre,publishyear",
        });
        
    }
    const updatedmovie = {
    title:  request.body.title,
    genre: request.body.genre,
    releaseyear: request.body.releaseyear,
   };
    const id=request.params.id;

    const result=await Movie.findByIdAndUpdate(id,updatedmovie);

    if(!result){
        return response.status(404).json({message:"Movie not found"})
    }
    return response.status(200).json({message:"Movie updated successfully"})
});

  router.delete("/:id", async function (request, response) {
    try {
      const id = request.params.id;
  
      const result = await Movie.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: "Movie not found!" });
      }
  
      return response.status(200).send({ message: "Movie deleted successfully!" });
    } catch (error) {
      console.log("ERROR", error);
      return response.status(500).send({ message: "Request Failed!" });
    }
  });
  

export default router; 

//C:\Users\LENOVO\OneDrive\Desktop\neww\backend\route\movieroute.js



//password=oGKXSkB6S3NPd6Vn
//username=deepalikonety
//link= mongodb+srv://deepalikonety:<password>@cluster0.zwkrfg0.mongodb.net/?retryWrites=true&w=majority