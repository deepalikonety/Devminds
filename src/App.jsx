import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Movieslist from './pages/movielist';
import AboutThemovie from './pages/aboutmovie';
import Addmovie from './pages/addmovie';
import Editmovie from './pages/editmovie';
import Exploremovies from './pages/browsemovie';
import Loginpage from './pages/login';

function App() {
  return (
    <Routes>
      {/* Route for the home page */}
      <Route path="/" element={<Homepage />} />

      {/* Route for the movies list page */}
      <Route path="/movies" element={<Movieslist />} />

      {/* Route for the individual movie page with an "id" parameter */}
      <Route path="/movies/:id" element={<AboutThemovie />} />

      <Route path="/movies/add" element={<Addmovie />}/>

      <Route path="/movies/edit/:id" element={<Editmovie/>} />
      <Route path="/movies/explore" element={<Exploremovies/>} />
      <Route path="/movies/login" element={<Loginpage/>}/>

    </Routes>
  );
}

export default App;
