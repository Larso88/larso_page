import {Link} from "react-router-dom";

const TopNavigation = () => {
    return (<div className={"w-screen mt-14  md:mb-8 border-b-2 border-stone-300 p-4"}>
        <ul className={"flex flex-row justify-between text-2xl text-stone-300 font-thin md:mx-56"}>
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