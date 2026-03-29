import { useState } from 'react';
import { useMovieStore } from "../store/useMovieStore";

export default function MovieList() {
 
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  
  const [filterType, setFilterType] = useState<'all' | 'watched' | 'unwatched'>('all');

 
  let filteredMovies = movies;
  if (filterType === 'watched') {
    filteredMovies = movies.filter((m) => m.watched);
  } else if (filterType === 'unwatched') {
    filteredMovies = movies.filter((m) => !m.watched);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md font-sans">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">My Movies</h2>

      
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilterType('all')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            filterType === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilterType('watched')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            filterType === 'watched' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
          }`}
        >
          Watched
        </button>
        <button
          onClick={() => setFilterType('unwatched')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            filterType === 'unwatched' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
          }`}
        >
          Unwatched
        </button>
      </div>

    
      <ul className="space-y-3">
        {filteredMovies.map((movie) => (
          <li 
            key={movie.id} 
            className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <span className={`text-lg ${movie.watched ? 'line-through text-slate-400' : 'text-slate-800'}`}>
              {movie.title}
            </span>
            <button
              onClick={() => toggleWatched(movie.id)}
              className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
                movie.watched 
                  ? 'bg-slate-300 text-slate-700 hover:bg-slate-400' 
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {movie.watched ? 'Mark Unwatched' : 'Mark Watched'}
            </button>
          </li>
        ))}
      </ul>
      
      {filteredMovies.length === 0 && (
        <p className="text-slate-500 text-center mt-4 italic">No movies in this category.</p>
      )}
    </div>
  );
}