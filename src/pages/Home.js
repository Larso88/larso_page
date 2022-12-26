import ProfilePageImage from "../images/HomePageProfilePicture.jpeg"

const Home = () => {

    return <div className={"flex flex-col items-center"}>
            <p className={"self-center text-center text-xl mb-12 drop-shadow-2xl"}>
                Welcome to my home page
                <br/> I`m gonna use this page to practise React
                <br/> og kanskje finne noe artig jeg kan dele med verden.
            </p>
            <image className={"w-1/5 rounded-2xl drop-shadow-xl"} src={ProfilePageImage}
                 alt="Profile image of Lars Ole Algrøy"/>


    </div>
}



export default Home;