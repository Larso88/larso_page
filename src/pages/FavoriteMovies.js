import { useState } from "react";
import SideChooser from "../components/FavoriteMovies/SideChooser";
import MovieList from "../components/FavoriteMovies/MovieList";

const moviesArray = [
    {
        title: "Book of Eli",
        generes: ["Action", " Adventure", " Drama"],
        stars: ["Denzel Washington", " Mila Kunis", " Ray Stevenson"],
        director: "Gary Whitta",
        imageUrl: "https://irs.www.warnerbros.com/gallery-v2-jpeg/the_book_of_eli_posterlarge_0-300181824.jpg",
        linkUrl: "https://www.imdb.com/title/tt1037705/"
    },
    {
        title: "Top Gun: Maverick",
        generes: ["Action", " Drama"],
        stars: ["Tom Cruise", " Jennifer Connelly", " Miles Teller"],
        director: "Joseph Kosinski",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
        linkUrl: "https://www.imdb.com/title/tt1745960/"
    },
    {
        title: "The Shawshank Redemption",
        generes: ["Drama"],
        stars: ["Tim Robbins", " Morgan Freeman", " Bob Gunton"],
        director: "Frank Darabont",
        imageUrl: "https://irs.www.warnerbros.com/gallery-jpeg/the_shawshank_redemption_posterlarge_0-675188670.jpg",
        linkUrl: "https://www.imdb.com/title/tt0111161/"
    },
    {
        title: "The Dark Knight",
        generes: ["Drama"],
        stars: ["Chirstian Bale", " Heath Ledger", " Aaron Eckhart"],
        director: "Christopher Nolan",
        imageUrl: "https://image.tmdb.org/t/p/original/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
        linkUrl: "https://www.imdb.com/title/tt0468569/"
        
    },
    {
        title: "Wall Street: Money Never Sleeps",
        generes: ["Drama"],
        stars: ["Shia LaBeouf", " Stephen Schiff", " Stanley Weiser"],
        director: "Oliver Stone",
        imageUrl: "https://image.tmdb.org/t/p/original/i9DFTWbD6mpM6UT3HlzZwlA92l4.jpg",
        linkUrl: "https://www.imdb.com/title/tt1027718/"
    },
    {
        title: "Catch Me If You Can",
        generes: ["Biography", " Crime", " Drama"],
        stars: ["Leonardo DiCaprio", " Tom Hanks", " Christopher Walken"],
        director: "Stevem Spielberg",
        imageUrl: "http://cafmp.com/wp-content/uploads/2013/01/Catch-Me-If-You-Can.jpg",
        linkUrl: "https://www.imdb.com/title/tt0264464/"
    },
    {
        title: "A beautiful Mind",
        generes: ["Biography", " Drama"],
        stars: ["Russel Crowe", " Ed Harris", " Jennifer Connelly"],
        director: "Ron Howard",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg",
        linkUrl: "https://www.imdb.com/title/tt0268978/"
    },
    {
        title: "V for Vandetta",
        generes: ["Action", " Sci-Fi", " Drama", " Thriller"],
        stars: ["Hugo Weaving", " Natalie Portman", " Rupert Graves"],
        director: "James McTeigue",
        imageUrl: "https://2.bp.blogspot.com/-BA6bllVxNpY/U8WRn6K7F6I/AAAAAAAAI70/dWhGpAUmHl8/s1600/V+for+Vendetta+(2005)+Movie+Poster.jpg",
        linkUrl: "https://www.imdb.com/title/tt0434409/"
    },
    {
        title: "Catch Me If You Can",
        generes: ["Biography ", "Crime ", "Drama"],
        stars: ["Leonardo DiCaprio ", "Tom Hanks ", "Christopher Walken"],
        director: "Stevem Spielberg",
        imageUrl: "http://cafmp.com/wp-content/uploads/2013/01/Catch-Me-If-You-Can.jpg",
        linkUrl: "https://www.imdb.com/title/tt0264464/"
    },
    {
        title: "Catch Me If You Can",
        generes: ["Biography", "Crime ", "Drama"],
        stars: ["Leonardo DiCaprio ", "Tom Hanks ", "Christopher Walken"],
        director: "Stevem Spielberg",
        imageUrl: "http://cafmp.com/wp-content/uploads/2013/01/Catch-Me-If-You-Can.jpg",
        linkUrl: "https://www.imdb.com/title/tt0264464/"
    },
]

const seriesArray = [
    {
        title: "Arcane: League of Legends",
        generes: ["Animation", " Action", " Adventure", " Drama", " Fantasy", " Sci-Fi"],
        stars: ["Hailee Steinfeld ", " Kevin Alejandro ", " Jason Spisak"],
        director: "Dan Reynolds",
        imageUrl: "https://mma.prnewswire.com/media/1657433/Secret_Cinema_Presents_Arcane.jpg?p=publish",
        linkUrl: "https://www.imdb.com/title/tt11126994/"
    },
    {
        title: "Silicon Valley",
        generes: ["Comedy"],
        stars: ["Thomas Middleditch ", " T.J. Miller ", " Josh Brener"],
        director: "John Altschuler",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BM2Q5YjNjZWMtYThmYy00N2ZjLWE2NDctNmZjMmZjYWE2NjEwXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg",
        linkUrl: "https://www.imdb.com/title/tt2575988/"
    },
    {
        title: "The Black List",
        generes: ["Crime", " Mystery", " Drama", " Thriller"],
        stars: ["James Spader ", " Megan Boone ", " Diego Klattenhoff"],
        director: "Jon Bokenkamp",
        imageUrl: "https://flxt.tmsimg.com/assets/p9972806_b1t_v9_aa.jpg",
        linkUrl: "https://www.imdb.com/title/tt2741602/"
    },
    {
        title: "Suits",
        generes: ["Comedy", " Drama"],
        stars: ["Gabriel Macht ", " Patick J. Adams ", " Meghan Markle"],
        director: "Aaron Korsh",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/78/Suits_season_7_dvd_cover.jpg",
        linkUrl: "https://www.imdb.com/title/tt1632701/"
    },
    {
        title: "Narchos",
        generes: ["Biography", " Crime", " Drama", " Thriller"],
        stars: ["Pedro Pascal ", " Wagner Moura ", " Boyd Holbrook"],
        director: "Carlo Bernard",
        imageUrl: "https://cdn.tuftsdaily.com/2017/09/narcos-cover.jpg",
        linkUrl: "https://www.imdb.com/title/tt2707408/"
    },
    {
        title: "House of Cards",
        generes: ["Biography", " Crime", " Drama", " Thriller"],
        stars: ["Kevin Spacey ", " Michel Gill ", " Robin Wright"],
        director: "Beau Willimon",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0b/House_of_Cards_season_1.png",
        linkUrl: "https://www.imdb.com/title/tt1856010/"
    },
    {
        title: "Westworld",
        generes: ["Sci-Fi", " Drama", " Mystery"],
        stars: ["Evan Rachel Wood ", " Jeffrey Wright ", " Ed Harris"],
        director: "Lisa Joy",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_FMjpg_UX1000_.jpg",
        linkUrl: "https://www.imdb.com/title/tt0475784/"
    },
    {
        title: "Chernobyl",
        generes: ["Drama", " History", " Thriller"],
        stars: ["Jessie Buckley ", " Jared Harris ", " Stellan Skarsgård"],
        director: "Craig Mazin",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg",
        linkUrl: "https://www.imdb.com/title/tt7366338/"
    },
    {
        title: "Sherlock",
        generes: ["Crime", " Mystery", " Drama", " Thriller"],
        stars: ["Benedict Cumberbatch ", " Martin Freeman ", " Una Stubbs"],
        director: "Mark Gatiss",
        imageUrl: "https://flxt.tmsimg.com/assets/p10406404_b1t_v9_aa.jpg",
        linkUrl: "https://www.imdb.com/title/tt1475582/"
    },
    {
        title: "Sons of Anarchy",
        generes: ["Crime", " Drama", " Thriller"],
        stars: ["Charlie Hunnam ", " Katey Sagal ", " Mark Boone Junior"],
        director: "Kurt Sutter",
        imageUrl: "https://m.media-amazon.com/images/I/71LZFBD6K5L._AC_UF1000,1000_QL80_.jpg",
        linkUrl: "https://www.imdb.com/title/tt1124373/"
    },
]


const FavoriteMovies = () => {
    let [languageBool, setLanguageBool] = useState(true);

    if (languageBool) {
        return (
            <div className={"flex flex-col items-center w-full"}>
                <SideChooser setLanguageBool={setLanguageBool} />
                <MovieList moviesArray={moviesArray}/>  
            </div> 
        )
    }else {
        return(
            <div className={"flex flex-col items-center"}>
                <SideChooser setLanguageBool={setLanguageBool} />
                <MovieList moviesArray={seriesArray} />
            </div>
        )
    }
}



export default FavoriteMovies;