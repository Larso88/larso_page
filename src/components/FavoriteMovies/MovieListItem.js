const MovieListItem = ({movie, index}) => {
    console.log("movie: ",movie)

    return (<div className={"flex flex-row items-center border-b-2 md:mt-5 md:w-full justify-between"}>
                <div className="flex flex-col">
                    <h2 className="md:self-start text-2xl md:m-1">{String(index +1) + "."}</h2>
                    <h3 className="text-xl md:m-1">Title: {movie.title}</h3>
                    <p className="text-lg md:m-1">Genres: {movie.generes.join(",")}</p>
                    <p className="md:m-1">Stars: {movie.stars.join("- ")}</p>
                    <p className="md:m-1">Director: {movie.director}</p>
                </div>
                <a href={movie.linkUrl} target="_blank">
                    <img className="h-40 w-28 " src={movie.imageUrl} alt=""  />
                </a>
            </div>
    )
}



export default MovieListItem;

