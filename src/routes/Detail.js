import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

function Detail () {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovieDetail = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        console.log('movie detail data : ', json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovieDetail();
    }, []);

    console.log('movie : ', movie);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <img src={movie.large_cover_image} alt={movie.id}></img>
                <h2>영화제목 : {movie.title}</h2>
                <ul>
                {movie.genres.map((genre) => (
                    <li key={genre}>장르 : {genre}</li>
                ))}
                </ul>
                <button><Link to={`/`}>리스트로</Link></button>
            </div>}
            
        </div>
    )
}

export default Detail