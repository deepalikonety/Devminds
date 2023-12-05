import mongoose from "mongoose";
const movieSchema= mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   genre:{
    type:String,
    required:true
   },
   releaseyear:{
    type:Number,
    required:true
   }

},
{
    timestamps:true
}
);
const Movie=mongoose.model('Movie',movieSchema);
 export default Movie;


//C:\Users\LENOVO\OneDrive\Desktop\neww\backend\models\moviemodel.js