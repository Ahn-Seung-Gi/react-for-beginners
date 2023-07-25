import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie ({id, medium_cover_image, title, summary, genres}) {
    return <div>
    <img  src={medium_cover_image} alt={title}/>
    <h2>영화제목 : 
      <Link to={`/movie/${id}`}> {title}</Link>
    </h2>
    <p>영화설명 : {summary} </p>
    <ul>
    {genres.map((genre) => (
      <li key={genre}>장르 : {genre}</li>
    ))}
    </ul>
  </div>;
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;