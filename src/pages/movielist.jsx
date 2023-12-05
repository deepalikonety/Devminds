import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Movieslist() {
  let [movies, setmovies] = useState([]);
  function fetchmovies() {
      axios
        .get("http://localhost:5000/movies")
        .then(function (response) {
          console.log("response", response.data);
          setmovies(response.data);
        })
        .catch(function (error) {
          console.log("error", error);
        });
    
  }

  function handledelete(movieId) {
    console.log("movieid", movieId);
    axios
      .delete(`http://localhost:5000/movies/${movieId}`)
      .then(function (response) {
        console.log("response", response);
        alert("Movie Deleted Successfully");
        fetchmovies();
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }
  useEffect(function () {
    fetchmovies();
  }, []);

  return (
    <div>
      <div className=" h-[10vh] w-full flex justify-center items-center text-3xl  bg-[#3b0517] font-medium text-white">
        <h1>Movies Everywhere | List of Movies</h1>
      </div>
      <div className="px-[10%] py-10 ">
        <div className="grid grid-cols-5  gap-4 bg-[#a36579] px-10 py-2 font-medium border-b-2 border-white items-center">
          <p>Index</p>
          <p>Title</p>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
        <div>
          {movies.map(function (movie, index) {
            console.log("movie", movie);
            return (
              <div
                key={movie._id}
                className="grid grid-cols-5 items-center bg-slate-300 px-10 py-2  border-b-2 border-white"
              >
                <p>{index + 1}</p>
                <p>{movie.title}</p>
                <Link to={`/movies/${movie._id}`}>
                  <p>View </p>
                </Link>
                <Link to={`/movies/edit/${movie._id}`}>
                  {" "}
                  <p>Edit </p>
                </Link>
                <p
                  onClick={function () {
                    handledelete(movie._id);
                  }}
                >
                  Delete
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Movieslist;
