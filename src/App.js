

import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter'

function App() {

  const [movies,setMovies]=useState(
    [{
    title: "Blacklist",
    description: "A mysterious criminal mastermind surrenders to the FBI, offering to catch the world’s most dangerous criminals—on one condition: he works only with a rookie profiler hiding secrets of her own. Dark, smart, and addictive.",
    rating: "5",
    posterURL: "https://imgs.search.brave.com/kcGwV6GxxCuZcXMDnCvNMGdnZQqR4aOMo5vpw1tIsFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzllLzE0/LzFmLzllMTQxZjQ3/MjJjNjFjMDgyYWRj/NTIwYTkyZDViZWNl/LmpwZw"
    },
  
    {
      title:"YOU",
      description:"A charming but dangerously obsessive man turns love into a deadly game, blurring the line between romance and control. Dark, psychological, and unsettlingly addictive.",
      rating:"4.5"
    },


    {
      title:"The Glory",
      description:"A woman who survived brutal school bullying dedicates her life to a cold, meticulous revenge against those who destroyed her youth. Dark, emotional, and deeply satisfying.",
      rating:"4.5"
    },


    {
      title:"Bloodhounds",
      description:"Two young boxers get pulled into the brutal world of loan sharks and underground crime while fighting to protect the people they love. Gritty, intense, and fast-paced.",
      rating:"4.5"
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) ||
      movie.rating >= rateFilter
  );

return (
    <div className="App">
      <Filter
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
