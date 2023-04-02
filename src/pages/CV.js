import ProfileImage1 from "../images/larsImg1.jpeg"


let educationArray= [
    {
        SchoolName: "Høyskolen Kristiania",
        timeFrame: "2020 - 2023",
        bodyText: "Bachelorgrad i Informasjonsteknologi - Fron-end og mobilutvikling"
    },
    {
        SchoolName: "Handelshøyskolen BI",
        timeFrame: "2012 - 2015",
        bodyText: "Bachelorgrad i økonomi og administrasjon. Fordypning i logistikkledelse - Supply chain management."
    },
    {
        SchoolName: "Laksevåg VGS",
        timeFrame: "2010 - 2011",
        bodyText: "Allmenn påbygg med generell studie kompetanse"
    },
]

let workArray = [
    {
        SchoolName: "Musikk-Miljø AS - Regnskaps og kontormedarbeider",
        timeFrame: "2016 - 2020",
        bodyText: "Har hatt ansvar for regnskap, markedsføring, innkreving, rapportering til ledelse," +
            " kunde/leverandørbehandling med mer."
    },
    {
        SchoolName: "Maron AS - Fisker på ringnotsbåt(sommerjobb)",
        timeFrame: "2012 - 2014",
        bodyText: "Bachelorgrad i Informasjonsteknologi - Fron-end og mobilutvikling"
    },    
    {
        SchoolName: "Eurospar Rong - Butikkmedarbeider",
        timeFrame: "2008 - 2010",
        bodyText: "Ansvarsstilling i matbutikk. De 15 timene som står oppført på attest stemmer ikke," +
            " vil anta at det var en 80-90% stilling."
    },
]



let otherArray = [
    {
        objectName: "Teknologi:",
        bodyArray: [ 
             
                {
                text: `Full stack webutvikling med hovedfokus på front-end. 
                Vi har i hovedsak brukt HTML, CSS og JS med forskjellige rammeverk som React.js, 
                Svelte og Tailwind med mer, på front-end og Java og SQL på back-end.`
                },
                {
                text: `Mobil utvikling, både med Adroid med Kotlin/Java, iOS med SwiftUI og  
                kryssplatform med Ionic med Vue.`
                }
        ]
    },
    {
        objectName: "Språk:",
        bodyArray: [
            {
                text: "Engelsk: Meget godt, skriftelig og muntelig"
            },
            {
                text: "Norsk: Meget godt, skriftelig og muntelig"
            }
        ]
    },    
    {
        objectName: "Kurs:",
        bodyArray: [
            {
                text: "Soff: Sikkerhetskurs for fiskere"
            },
            {
                text: "Uni Micro - Årsavslutning"
            },
            {
                text: "Uni Micro - Videregående Regnskap"
            }
        ]
    },
    {
        objectName: "Førekort:",
        bodyArray: [
            {
                text: "A og B - Har tilgang til egen bil"
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
                        <p>Født: 18.09-1988</p>
                    </li>
                </ul>
                <p>Austre Skogsfjellvegen 31A 5357 Fjell</p>
            </div>
            <h3 className={"font-bold text-2xl mb-2"}>Nøkkelkompetanse:</h3>
            <ul className={"text-xl list-disc ml-5 mb-10"}>
                <li className="md:ml-7">
                    Front-end og mobilapp utvikling
                </li>
                <li className="md:ml-7">
                    Økonomi, finans og regnskap
                </li>
                <li className="md:ml-7">
                    Prosess effektivisering
                </li>
                <li className="md:ml-7">
                    Trives i team
                </li>
                <li className="md:ml-7">
                    Relasjonelt sterk
                </li>

            </ul>
            <h3 className={"font-bold md:text-lg mb-10"}>Utdanning: </h3>
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
            <h3 className={"md:font-bold md:text-lg md:mb-10"} >Arbeidserfaring: </h3>
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
            <h3 className={"md:font-bold md:text-lg md:mb-10"} >Annet: </h3>
            <h4 className={"md:ml-5 md: md:font-bold md:mb-5"}>Styreerfaing</h4>
            <div className={"md:flex md:flex-row md:w-max md:mb-5 md:ml-5"} >
                <h2 className={"md:text-base md:font-bold md:w-40"}>2015 - D.D: </h2>
                <div className={"md:flex md:flex-col md:w-96"}>
                    <p className={"md:mb-5"}>Styreleder Åsla Invest AS</p>
                    <p>Nestleder ABOR Invest AS</p>
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
            <h3 className={"md:font-bold md:text-lg md:mb-5"}>Referanser: </h3>
            <p className={"md:ml-7 md:mb-5"}>Tom Haakon Bjørkhaug - 90770468 - Styreleder/Eier Musikk-Miljø AS.</p>
            <p className={"md:ml-7 md:mb-10"}>Alexander Sundli-Härdig - 41122411 - CTO og partner Skavl</p>
        </div>

    </div>
}



export default CV;