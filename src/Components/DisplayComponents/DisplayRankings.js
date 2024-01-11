import { useFetch } from "../../Hooks/useFetch";
import './DisplayRankings.css'

export default function DisplayRankings() {
    console.log("+++++ DisplayRankings is Rendering +++++++")

    const constructorStandings = useFetch("current/constructorStandings.json")
    const driversStandings = useFetch("current/driverStandings.json");
    const getDataConstructors = constructorStandings?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings
    const getDataDrivers = driversStandings?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings;


    return (
        <div id="content-rankings">
            <div className="constructors-ranking">
                <div className='constructors-ranking-header'>Ranking Konstruktorów : Sezon 2023</div>

                {getDataConstructors?.map((item, index) => {
                    return (
                        <a href={item.Constructor.url} key={index} target="_blank">
                            <div className="constructor-ranking-box" style={(index + 1) % 2 === 0 ? { backgroundColor: "#ebeaea" } : { backgroundColor: "white" }}>
                                <div className="constructor-ranking-place">{index + 1}</div>
                                <div className="constructor-ranking-name">{item.Constructor.name}</div>
                                <div className="constructor-ranking-nationality">{item.Constructor.nationality}</div>
                                <div className="constructor-ranking-wins">{item.wins} W</div>
                                <div className="constructor-ranking-points">{item.points}p</div>
                            </div>
                        </a>
                    )
                })}

            </div>
            <div className="drivers-ranking">
                <div className="drivers-ranking-header">Ranking Kierowców : Sezon 2023</div>
                {getDataDrivers?.map((item, index) => {
                    return (
                        <a href={item.Driver.url} key={index} target="_blank">
                            <div className="driver-ranking-box" style={(index + 1) % 2 === 0 ? { backgroundColor: "#ebeaea" } : { backgroundColor: "white" }} >
                                <div className="driver-ranking-place">{index + 1}</div>
                                <div className="driver-ranking-nickname">{item.Driver.code}</div>
                                <div className="driver-ranking-name">
                                    {item.Driver.givenName + " " + item.Driver.familyName}
                                </div>
                                <div className="driver-ranking-nationality">{item.Driver.nationality}</div>
                                <div className="driver-ranking-wins">{item.wins} W</div>
                                <div className="driver-ranking-points">{item.points}p</div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}