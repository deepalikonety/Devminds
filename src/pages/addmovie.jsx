import axios from "axios";
import { useState } from "react";

function Addmovie() {
  const [title,settitle]=useState("");
  const [genre,setgenre]=useState("");
  const [releaseyear,setreleaseyear]=useState("");

function handleSubmit(){

console.log("title",title)
console.log("genre",genre)
console.log("releaseyear",releaseyear)


  const data={
    title:title,
    genre:genre,
    releaseyear:releaseyear
  };
  axios.post("http://localhost:5000/movies",data)
  .then(
    function(response){
       console.log("response",response.data);
       alert("Movie Added")
      
     })
  .catch(function (error){
    console.log("error",error);
  });
}
  return (
    <div>
      <div className=" h-[10vh] w-full flex justify-center items-center text-3xl text-white bg-[#3b0517] font-medium ">
        <h1>Movies Everywhere | Add a Movie</h1>
      </div>
      <div  className="h-[90vh]  w-full flex flex-col justify-center items-center ">  
     <p className="w-[800px] bg-[#a36579] text-xl font-medium px-8 py-2 border-b-2 border-white text-center ">Fill the details below</p>
     <div className="flex border-b-2 border-white">
       <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">Title</p>
       <input onChange={function(event){
        settitle(event.target.value)
       }}
       className="w-[400px] bg-[#a36579] text-xl px-8 py-2 outline-none " placeholder="type here"/>
     </div>
     <div className="flex border-b-2 border-white">
       <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">Genre</p>
       <input onChange={function(event){
        setgenre(event.target.value)
       }}
        className="w-[400px] bg-[#a36579] text-xl px-8 py-2 outline-none" placeholder="type here"/>
     </div>
     <div className="flex border-b-2 border-white">
       <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">Release Year</p>
       <input onChange={function(event){
        setreleaseyear(event.target.value)
       }}
       type="number" className="w-[400px] bg-[#a36579] text-xl px-8 py-2 outline-none" placeholder="type here"/>
       </div>
       <button onClick={handleSubmit} className="w-[800px] px-8 py-2 bg-[#3b0517] text-white text-center  text-xl"> Submit</button>
    

   </div>
   <div>
      </div>
      </div>
    
  );
}
export default Addmovie;
