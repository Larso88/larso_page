import ProfilePageImage from "../images/HomePageProfilePicture.jpeg"

const Home = () => {

    return <div className={"flex flex-col items-center"}>
            <p className={"self-center text-center text-xl mb-12 drop-shadow-2xl"}>
                Welcome to my home page
                <br/> I`m gonna use this page to practise React
                <br/> and might even find something fun to share with the world, who knows?
            </p>
            <img className={"w-1/5 h-1/5 rounded-2xl drop-shadow-xl md:mb-32"} src={ProfilePageImage}
                 alt="Lars Ole Algrøy"/>
            <p className="text-lg italic">"Technology like art is a soaring exercise of the human imagination" - Daniel Bell</p>
    </div>
}



export default Home;