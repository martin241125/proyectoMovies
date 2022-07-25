import movie from "./movie.json";
import styles from "./MovieDetails.module.css"
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../hooks/useQuery";



export function MovieDetails(){
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
   
    const query = useQuery();
    const search = query.get("search");


    useEffect(() => {
      setIsLoading(true);
      get("/movie/" + movieId)
      .then(data => {
         setIsLoading(false);
         setMovie(data);
      })
    }, [movieId]);

    if(isLoading){
       return <Spinner />;
    }

    if (!movie){
      return null;
    }

    const poster = movie.poster_path;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster}`
    return ( 
       <div className={styles.detailsConteiner}>
          <img 
            className={`${styles.col} ${styles.movieImage }`} 
            src={imageUrl} 
            alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`} >
                <p className={styles.firstItem}><strong>Title:</strong>  {movie.title}</p>
                <p>
                   <strong>Genres:</strong> {" "}
                   {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p><strong>Description:</strong> {movie.overview} </p>
            </div>
       </div>
);

};