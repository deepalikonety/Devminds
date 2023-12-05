import { Link } from "react-router-dom";
import Loginpage from "./login";

function Homepage() {
  return (
    <div>
      <div className="section-container">
        <div className="h-[10vh] w-full flex justify-center items-center text-3xl  bg-[#3b0517]   font-semibold text-white">
          <h1>Movies Everywhere | Home</h1>
        </div>
      </div>

      
      <div class="flex justify-center">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
            <div class="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
              <div class="flex flex-col md:flex-row items-center">
                <div class="w-full overflow-hidden">
                  <img
                    src="https://source.unsplash.com/700x500/?cinema"
                    alt=""
                    class="rounded-md"
                  />
                </div>
                <div class="md:w-2/3 m-4">
                  <h2 className=" italic text-3xl font-semibold">
                    Dive into a World of Cinematic Discovery
                  </h2>
                  <div class="hi">
                  <div class="text-xl text-[#a36579] italic  font-bold bg-stone-900 bg-opacity-1 rounded px-10 py-10 justify-center items-center mt-4 m-2">
                    <p>
                      Movies Everywhere is your gateway to a world of cinematic
                      discovery. Dive into a curated selection of movies, from
                      timeless classics to the latest releases. Easily manage
                      your watchlist and explore diverse genres. Whether you're
                      a film buff or a casual viewer, our platform is designed
                      for you. Discover hidden gems, revisit favorites, and stay
                      updated on the latest in cinema. Join us on a journey
                      through the magic of storytelling. Your next cinematic
                      adventure starts here. Enjoy the convenience of organizing
                      and exploring your favorite movies with Movies Everywhere!
                    </p>
                  </div>
                  </div>
                  
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/login">Go to Login Page</Link>
      <Loginpage /> 
      <div className="flex">
        <div className="w-1/2 h-[90vh] flex justify-center items-center flex-col gap-10 ">
          <h1 className="text-4xl font-semibold text-white">Your Watchlist</h1>
          <Link to="/movies">
            <button className="bg-[#a36579] px-6 py-2 text-white text-xl border-black border-solid ">
              View
            </button>
          </Link>
        </div>
        <div className="w-1/2 h-[90vh] flex justify-center items-center flex-col gap-10 ">
          <h1 className="text-3xl font-semibold text-white ">Explore Movies</h1>
          <Link to="/movies/explore">
            <button className="bg-[#a36579] px-6 py-2 text-white text-xl border-black border-solid ">
              Explore
            </button>
          </Link>
        </div>
        <div className="w-1/2 h-[90vh] flex justify-center items-center flex-col gap-10 ">
          <h1 className="text-3xl text-white font-semibold ">
            Add To WatchList{" "}
          </h1>
          <Link to="/movies/add">
            <button className="bg-[#a36579] px-6 py-2 text-white text-xl border-black border-solid">
              Add
            </button>
          </Link>
        </div>
      </div>
      <div class="flex items-center justify-center text-center bg-gradient-to-r from-[#3b0517] via-white to-[#a36579] w-full">
  <div class="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-gray-300">
    <div class="flex flex-col p-2 m-2 w-full">
      <div class="text-xl md:text-3xl font-medium text-black mb-4">Our Team</div>
      <div class="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-4 p-2">
        
        <div class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
          <div class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
            <img src="https://source.unsplash.com/300x300/?cute" alt="" class="" />
          </div>
          <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">K Deepali</div>
          <div class="italic text-gray-500 text-sm">team member-1</div>
          <div class="flex my-2">
            
          </div>
        </div>

        
        <div class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
          <div class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
            <img src="https://source.unsplash.com/300x300/?puppy" alt="" class="" />
          </div>
          <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Maansi p u</div>
          <div class="italic text-gray-500 text-sm">team member-2</div>
          <div class="flex my-2">
            
          </div>
        </div>

        
        <div class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
          <div class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
            <img src="https://source.unsplash.com/300x300/?car" alt="" class="" />
          </div>
          <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Mallikarjun</div>
          <div class="italic text-gray-500 text-sm">team member-3</div>
          <div class="flex my-2">
            
          </div>
        </div>
        <div class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
          <div class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
            <img src="https://source.unsplash.com/300x300/?bike" alt="" class="" />
          </div>
          <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Manjunath</div>
          <div class="italic text-gray-500 text-sm">team member-4</div>
          <div class="flex my-2">
            
          </div>
          </div>

       

      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Homepage;
