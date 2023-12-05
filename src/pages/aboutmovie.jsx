import axios from "axios";
import { useEffect,useState  } from "react";
import { Link,useParams} from "react-router-dom";
function AboutThemovie() {
    const params=useParams();
    const id=params.id;
  
    const [moviedetails,setmoviedetails]=useState({});
    useEffect (function(){
        axios.get(`http://localhost:5000/movies/${id}`)
        .then(
          function(response){
             console.log("response",response.data);
             setmoviedetails(response.data);
             
           })
        .catch(function (error){
          console.log("error",error);
        });
    },[]);
    return (
      <div>
       
        {/* <h1 className="text-pink-500  bg-black text-4xl p-6">About the movie {id}</h1>
    <div className="p-6">
        <p className="text-xs">home</p>
        <p className="text-xs">about</p>
       </div> */}
       <div className=" h-[10vh] w-full flex justify-center items-center text-3xl  bg-[#3b0517] font-medium text-white">
      <h1>Movies Everywhere | About the movies </h1>
    </div>
    <div className="h-[90vh] w-full flex flex-col justify-center items-center ">
      <p className="w-[800px] bg-[#a36579] text-2xl font-medium px-8 py-2 border-b-2 border-white text-center ">{moviedetails.title}</p>
      <div className="flex border-b-2 border-white">
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">Genre</p>
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">{moviedetails.genre}</p>
      </div>
      <div className="flex border-b-2 border-white">
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">Release Year</p>
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">{moviedetails.releaseyear}</p>
      </div>
      <div className="flex border-b-2 border-white">
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">Created At</p>
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">{new Date(moviedetails.createdAt).toDateString()}</p>
      </div>
      <div className="flex border-b-2 border-white">
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">Updated At</p>
        <p className="w-[400px] bg-[#a36579] text-xl px-8 py-2">{new Date(moviedetails.updatedAt).toDateString()}</p>
      </div>

    </div>
   
       </div>
      
    );
  }
  
  export default AboutThemovie;
  