import { useRef, useState } from "react"
import { useFetch } from "../../Hooks/useFetch"
import './Archive.css'


export default function Archive() {
    console.log("+++++ Archive is Rendering +++++++")
    const [dataYear, setDataYear] = useState(null)
    const [dataRace, setDataRace] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const seasonYears = useRef(null)
    const seasonRaces = useRef(null)
    const raceNameBox = useRef([])
    const raceName = useRef([])
    const raceDate = useRef([])

    const getItemYears = useFetch(dataYear)
    const getItemRace = useFetch(dataRace, setIsLoading)


    function handleClickYear(el) {
        seasonYears.current.style.width = "10%"
        setDataYear(el + ".json")
        console.log("Setting Year To", el)
    }

    function handleClickRace(year, race) {
        setIsLoading(true)

        const tempDiv = seasonRaces.current.style
        tempDiv.width = "20%"
        tempDiv.height = "102%"
        tempDiv.paddingBottom = "10px"

        const temp = `${year}/${race}/results.json`
        setDataRace(temp)
    }

    return (
        <>
            <div id="content-results">
                <div id="season-years" ref={seasonYears}>{
                    Array.from({ length: 74 }, (_, index) => (
                        <div key={index}
                            className="season-results"
                            onClick={() => { handleClickYear(2023 - index) }}
                        >{2023 - index}</div>
                    ))
                }
                </div>
                {getItemYears && getItemYears.MRData &&
                    <div id="season-races" ref={seasonRaces}>
                        {getItemYears.MRData.RaceTable.Races.map((item, index) => {
                            return (
                                <div className="season-race"
                                    key={index + "SY"}
                                    onClick={() => handleClickRace(item.season, item.round, index)}
                                    ref={(elRef) => (raceNameBox.current[index] = elRef)}
                                    style={dataRace === null ? {} : { flexFlow: "column" }}
                                >
                                    <div className='season-race-elements' style={{ minWidth: "150px" }} >
                                        <span>Round{" " + item.round}</span>
                                    </div>
                                    {
                                        dataRace === null ? <div className='season-race-elements' ref={(elRef) => (raceName.current[index] = elRef)}>
                                            {item.raceName}
                                        </div> :
                                            <div className='season-race-elements' ref={(elRef) => (raceName.current[index] = elRef)} style={{ fontSize: "15px", width: "auto" }} >
                                                {item.Circuit.Location.country + " GP"}
                                            </div>

                                    }
                                    {dataRace === null ? <div className='season-race-elements' ref={(elRef) => (raceDate.current[index] = elRef)}>
                                        <span>{item.date}</span>
                                    </div> : null}
                                </div>
                            )
                        })}
                    </div>
                }
                {getItemRace && getItemRace.MRData &&
                    <div id='season-races-results'>
                        {isLoading === true ? <div className='loading-div'><span>Loading...</span></div> : null}
                        <div id="name-of-race">
                            <span className='race-date'>{getItemRace.MRData.RaceTable.Races[0].date}</span>
                            <span className='race-place'>{getItemRace.MRData.RaceTable.Races[0].Circuit.Location.locality}</span>
                            <span>Runda{getItemRace.MRData.RaceTable.round}</span>
                            <span>{getItemRace.MRData.RaceTable.Races[0].Circuit.circuitName}</span>
                            <span><h3>{getItemRace.MRData.RaceTable.Races[0].raceName}</h3></span>
                        </div>
                        {getItemRace.MRData.RaceTable.Races[0].Results.map((item, index) => {
                            const tempStyle = {}
                            if (item.FastestLap?.rank === "1") {
                                tempStyle.color = "purple"
                                tempStyle.borderBottom = "2px solid purple"
                            }


                            return (
                                <>
                                    {item.Driver && item.Constructor && <div className="season-race-results" key={"SRR" + index} style={tempStyle}>
                                        <div className="place">{item.status === "Finished" || item.status.includes("Lap") ? item.position : "DNF"}</div>
                                        <div className="time">{item.Time ? item.Time.time : item.status}</div>
                                        <div className="drivers-name">{item.Driver.givenName + " " + item.Driver.familyName}</div>
                                        <div className="constructors-name">{item.Constructor.name}</div>
                                        <div className="points">{item.points}p</div>
                                    </div>}
                                </>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}