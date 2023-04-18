import { useState } from "react";

const SideChooser = ({setLanguageBool}) => {

    

    const handleChangeSeries = () => {
        setLanguageBool(false);
        console.log("Series button clicked")
    };
    const handleChangeMovies = () => {
        setLanguageBool(true);
         console.log("Movies button clicked!")
    };


    return  <div className={"flex"}>
                <div className={"flex flex-row w-96 h-10 justify-evenly mb-12"}>
                    <button onClick={handleChangeMovies}
                            className={"bg-stone-900 w-32 h-12 rounded-xl hover:animate-bounce"} 
                            variant="text">Movies
                    </button>
                    <button onClick={handleChangeSeries} 
                            className={"bg-stone-900 w-32 h-12 rounded-xl hover:animate-bounce"}
                            variant="text">Series
                    </button>
                </div>
            </div>
}



export default SideChooser;