import MovieListItem from "./MovieListItem";

const MovieList = ({moviesArray}) => {
    console.log("moviesArray: ", moviesArray)
    return <div className={"flex flex-col items-center w-2/5"}>
    {moviesArray.map((movie, index) => (
       <MovieListItem key={index} index={index} movie={movie} />
    ))}

</div>
}



export default MovieList;