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
    },    {
        SchoolName: "Eurospar Rong - Butikkmedarbeider",
        timeFrame: "2008 - 2010",
        bodyText: "Ansvarsstilling i matbutikk. De 15 timene som står oppført på attest stemmer ikke," +
            " vil anta at det var en 80-90% stilling."
    },
]


const CV = () => {

    return <div className={"flex w-full place-content-center"}>
        <div className={"flex flex-col w-1/2 justify-around max-w-2xl"}>
            <div className={"flex flex-row max-w-2xl mb-12 justify-center "}>
                <img className={"w-1/5 rounded-full drop-shadow-xl mr-5"} src={ProfileImage1}
                     alt="Lars Ole Algrøy"/>
                <h1 className={"font-semibold text-5xl mr-5 self-center"}>Lars Ole Algrøy</h1>
            </div>
            <div className={"place-content-center mb-6"}>
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
                    <li>
                        Front-end og mobilapp utvikling
                    </li>
                    <li>
                        Økonomi, finans og regnskap
                    </li>
                    <li>
                        Prosess effektivisering
                    </li>
                    <li>
                        Trives i team
                    </li>
                    <li>
                        Relasjonelt sterk
                    </li>

                </ul>
                <h3>Utdanning: </h3>
                <ul>
                    {educationArray.map((object) => (
                        <li className={"flex flex-row w-full"}>
                            <h2 className={"text-base font-bold w-1/2"}>{object.timeFrame}</h2>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-base font-bold"}>{object.SchoolName}</h2>
                                <p>{object.bodyText}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            <ul>
                {workArray.map((object) => (
                    <li>
                        <h2 className={"text-base font-bold"}>{object.timeFrame}</h2>
                        <div>
                            <h2>{object.SchoolName}</h2>
                            <p>{object.bodyText}</p>
                        </div>
                    </li>
                ))}
            </ul>

        </div>

    </div>
}



export default CV;