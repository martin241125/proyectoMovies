import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard ({movie}){
    const poster = movie.poster_path;
    const imageUrl = `https://image.tmdb.org/t/p/w300/${poster}`

    return (<li className ={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
            
        
         <img
          height={345} 
          width={230} 
          className={styles.movieImage} 
          src={imageUrl} 
          alt=""
        />    
         <div> {movie.title} </div>
        </Link>
        </li>
    );
}