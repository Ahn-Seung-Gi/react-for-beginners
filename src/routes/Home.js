import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";



function Home() {
    // useState area
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  // useState Set area

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8`
    );
    const json = await response.json();

    console.log('json : ', json);
    setMovies(json.data.movies)
    setLoading(false);
  }

  // useEffect area
  useEffect (() => {
    getMovies();
  }, []);

    return(
        <div className={styles.container}>
          {loading ? (<div className={styles.loader}>
          <span>Loading...</span>
        </div>) : 
          (<div className={styles.movies}>
            {movies.map((movieData) => (
              <Movie  key={movieData.id}
                      id={movieData.id}
                      medium_cover_image={movieData.medium_cover_image} 
                      title={movieData.title} 
                      summary={movieData.summary} 
                      genres={movieData.genres} />
            ))}
          </div>)}
          
        </div>
      );
}

export default Home