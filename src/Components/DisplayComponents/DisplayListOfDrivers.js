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
                                            <div className='drivers-name'>
                                                <span><h4>{firstName}</h4></span>
                                                <span><h3>{lastName}</h3></span>
                                                </div>
                                            <span className='birdth-and-nationality'>
                                                <span>{value.nationality}</span>
                                                <span>{value.birthDate}</span>
                                            </span>
                                            <div className='drivers-image-box'>
                                                <img id='drivers-team-logo' src={value.teamLogo} style={value.teamLogoStyle} />
                                                </div>
                                        </div>
                                        <div className="driver-banner-box-lower">
                                            <div className='half-lower'>
                                                <span>Zwycięstwa <h4>{value.wins}</h4></span>
                                                <span>Punkty <h4>{value.points}</h4></span>
                                            </div>
                                            <div className='half-lower'>
                                                <span>Podium <h4>{value.podiums}</h4></span>
                                                <span>NajlepszyWynik <h4>{value.bestResuult}</h4></span>
                                            </div>
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