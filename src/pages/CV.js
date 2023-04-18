import ProfileImage1 from "../images/larsImg1.jpeg"


let educationArray= [
    {
        SchoolName: "Kristiania University College",
        timeFrame: "2020 - 2023",
        bodyText: "Bachelor`s Degree in information Technology - Front-end Mobile Development"
    },
    {
        SchoolName: "Handelshøyskolen BI",
        timeFrame: "2012 - 2015",
        bodyText: "Bachelor`s Degree in Economics and Administration Specialization in Logistics Managment - Supply Chain Managment"
    },
    {
        SchoolName: "Laksevåg Upper Secondary School",
        timeFrame: "2010 - 2011",
        bodyText: "General Studies with University Admission Qualification"
    },
]

let workArray = [
    {
        SchoolName: "Musikk-Miljø AS - Accounting and Office Associate",
        timeFrame: "2016 - 2020",
        bodyText: "Responsible for accounting, marketing, collections, reporting to management, customer and supplier management and more"
    },
    {
        SchoolName: "Maron AS - Fisherman on Purse Seiner(Summer job)",
        timeFrame: "2012 - 2014",
        bodyText: "Main tasks include 8-hours shifts on the bridge per day, working with the seine during fishing, and preparing for fishing. Gained valuable experience working under demanding and exhausting"
    },    
    {
        SchoolName: "Eurospar Rong - Store Associate",
        timeFrame: "2008 - 2010",
        bodyText: "Responsible role in grocery store. The 15 hours noted on the certificate are incorrect; the actual poition was approximately 80-90% to full time"
    },
]



let otherArray = [
    {
        objectName: "Technology:",
        bodyArray: [ 
             
                {
                text: `Full stack web development with a primary focus on front-end. Mainly used HTML,
                CSS and JS with various frameworks such as React.js, Svelte.js and Tailwind, among others for front-end.
                I have used mainly Java and SQL for back-end with some variations.`
                },
                {
                text: `Mobile development experience with Android using Kotlin/Java, iOS using SwiftUI, and cross-platform
                using Ionic with Vue and Svelte Kit with Capacitor`
                }
        ]
    },
    {
        objectName: "Languages:",
        bodyArray: [
            {
                text: "English: Excellent written and spoken"
            },
            {
                text: "Norwegian: Excellent written and spoken"
            }
        ]
    },    
    {
        objectName: "Courses:",
        bodyArray: [
            {
                text: "SOFF: Security Course(For fisherman)"
            },
            {
                text: "Uni Micro - Year-end closing"
            },
            {
                text: "Uni Micro - Advanced accounting"
            }
        ]
    },
    {
        objectName: "Driving License: ",
        bodyArray: [
            {
                text: "Categories A and B - Have access to my own car"
            }
        ]
    },
]


const CV = () => {

    return <div className={"flex w-full place-content-center"}>
                <div className={"flex flex-col w-1/2 justify-around max-w-2xl"}>
                    <div className={"flex flex-row max-w-2xl mb-3 justify-center "}>
                        <img className={"w-1/4 rounded-full drop-shadow-xl mr-5"} src={ProfileImage1}
                            alt="Lars Ole Algrøy"/>
                        <h1 className={"font-semibold text-5xl mr-5 self-center"}>Lars Ole Algrøy</h1>
                    </div>
                    <div className={"place-self-center mb-6"}>
                        <ul>
                            <li>
                                <p>Austre Skogsfjellvegen 31A 5357 Fjell</p>
                            </li>
                            <li>
                                <p>466 27 858 | lars_ole_algroy@outlook.com</p>
                            </li>
                            <li>
                                <p>Born: 18.09-1988</p>
                            </li>
                        </ul>
                        <p>Austre Skogsfjellvegen 31A 5357 Fjell</p>
                    </div>
                    <h3 className={"font-bold text-2xl mb-2"}>Key Competence</h3>
                    <ul className={"text-xl list-disc ml-5 mb-10"}>
                        <li className="md:ml-7">
                            Front-end and mobile development
                        </li>
                        <li className="md:ml-7">
                            Economy, finance and accounting
                        </li>
                        <li className="md:ml-7">
                            Process efficiency
                        </li>
                        <li className="md:ml-7">
                            Thrives in teams
                        </li>
                        <li className="md:ml-7">
                            Strong relational skills
                        </li>

                    </ul>
                    <h3 className={"font-bold md:text-lg mb-10"}>Education </h3>
                    <ul className="w-max md:ml-7">
                        {educationArray.map((object) => (
                            <li className={"md:flex md:flex-row md:w-max md:mb-5"}>
                                <h2 className={"md:text-base md:font-bold md:w-40"}>{object.timeFrame}</h2>
                                <div className={"md:flex md:flex-col md:w-96"}>
                                    <h2 className={"md:text-base md:font-bold md:mb-2"}>{object.SchoolName}</h2>
                                    <p>{object.bodyText}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 className={"md:font-bold md:text-lg md:mb-10"} >Work Experience:</h3>
                    <ul className="w-max md:ml-7" >
                        {workArray.map((object) => (
                            <li className={"md:flex md:flex-row md:w-max md:mb-5"} >
                                <h2 className={"md:text-base md:font-bold md:w-40"}>{object.timeFrame}</h2>
                                <div className={"md:flex md:flex-col md:w-96"}>
                                    <h2 className={"md:text-base md:font-bold md:mb-2"}>{object.SchoolName}</h2>
                                    <p>{object.bodyText}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 className={"md:font-bold md:text-lg md:mb-10"} >Other: </h3>
                    <h4 className={"md:ml-5 md: md:font-bold md:mb-5"}>Board Experience:</h4>
                    <div className={"md:flex md:flex-row md:w-max md:mb-5 md:ml-5"} >
                        <h2 className={"md:text-base md:font-bold md:w-40"}>2015 - T.D: </h2>
                        <div className={"md:flex md:flex-col md:w-96"}>
                            <p className={"md:mb-5"}>Chairman Åsla Invest AS</p>
                            <p>Vice-Chairman ABOR Invest AS</p>
                        </div>
                    </div>
                    <ul className="w-max md:ml-7" >
                        {otherArray.map((object) => (
                            <li className={"md:flex md:flex-row md:w-max md:mb-5"} >
                                <h2 className={"md:text-base md:font-bold md:w-40"}>{object.objectName}</h2>
                                <div className={"md:flex md:flex-col md:w-96"}>
                                    {object.bodyArray.map((objectText) => (
                                        <p className={"md:mb-5"}>{objectText.text}</p>
                                    ))}
                                    
                                    

                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 className={"md:font-bold md:text-lg md:mb-5"}>References: </h3>
                    <p className={"md:ml-7 md:mb-5"}>Tom Haakon Bjørkhaug - 90770468 - Chairman/Owner Musikk-Miljø AS.</p>
                    <p className={"md:ml-7 md:mb-10"}>Alexander Sundli-Härdig - 41122411 - CTO and partner Skavl</p>
                </div>

            </div>
}



export default CV;