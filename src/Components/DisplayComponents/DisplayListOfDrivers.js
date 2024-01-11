import './DisplayListOfDrivers.css'
import { driversInfo } from "../../functions/applicationData"

export default function DisplayListOfDrivers() {
    console.log("+++++ DisplayListOfDrivers is Rendering +++++++")

    return (
        <>
            <div id="content-drivers">
                {Object.entries(driversInfo).map(([key, value], index) => {
                    const [firstName, lastName] = key.split(' ')
                    return (
                        <a href={value.link} target='_blank' key={index} style={{ backgroundColor: value.teamColor, }}>
                            <div className="driver-banner">
                                <img className="drivers-img" src={value.image} alt={key}></img>
                                <div className="drivers-number" ><span>{value.number}</span></div>
                                <div className="driver-banner-box">
                                    <div className="driver-banner-box-upper">
                                        <span><h3>{firstName + " " + lastName}</h3></span>
                                        <span className='birdth-and-nationality'>
                                            <span>{value.nationality}</span>
                                            <span>{value.birthDate}</span>
                                        </span>
                                        <img id='drivers-team-logo' src={value.teamLogo} style={value.teamLogoStyle} />
                                    </div>
                                    <div className="driver-banner-box-lower">
                                        <span>Zwycięstwa <h4>{value.wins}</h4></span>
                                        <span>Punkty <h4>{value.points}</h4></span>
                                        <span>Podium <h4>{value.podiums}</h4></span>
                                        <span>Najlepszy Wynik <h4>{value.bestResuult}</h4></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </>
    )
}