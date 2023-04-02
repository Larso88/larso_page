import {Link} from "react-router-dom";

const TopNavigation = () => {
    return (<div className={"mt-14 mb-8 border-b-2 border-green-700 p-4"}>
        <ul className={"w-full flex flex-row justify-between text-3xl text-green-700 font-thin"}>
        <li>
           <Link to={"/"} >Home</Link>
        </li>
        <li>
            <Link to={"/favorite-movies"} > Favorite Movies</Link>
        </li>
        <li>
            <Link  to={"/cv"} >CV</Link>
        </li>
        <li>
            <Link to={"/about"} >Abouts Lars Ole </Link>
        </li>
        <li>
            <Link to={"/contact"} >Contact</Link>
        </li>
        </ul>
    </div>)
}
export default TopNavigation;