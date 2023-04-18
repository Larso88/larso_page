import {Link} from "react-router-dom";

const TopNavigation = () => {
    return (<div className={"w-screen mt-14  md:mb-8 border-b-2 border-stone-300 p-4"}>
        <ul className={"flex flex-row justify-between text-2xl text-stone-300 font-thin md:mx-56"}>
            <li className={"w-52 rounded-xl duration-700 hover:bg-stone-700 text-center"}>
            <Link to={"/"} >Home</Link>
            </li>
            <li className={"w-52 h-10 rounded-xl  duration-700 hover:bg-stone-700 text-center"}>
                <Link to={"/favorite-movies"} > Favorite Movies</Link>
            </li>
            <li className={"w-52 rounded-xl  duration-700 hover:bg-stone-700 text-center"}>
                <Link  to={"/cv"} >CV</Link>
            </li>
            <li className={"w-52 rounded-xl  duration-700 hover:bg-stone-600 text-center"}>
                <Link to={"/about"} >Abouts Lars Ole </Link>
            </li>
            <li className={"w-52 rounded-xl  duration-700 hover:bg-stone-600 text-center"}>
                <Link to={"/contact"} >Contact</Link>
            </li>
        </ul>
    </div>)
}
export default TopNavigation;