import './DisplayDrivers.css'
import { driversInfo } from "../../functions/applicationData"

export default function DisplayDrivers({onSetIsHovered, onSetDisplayTrigger}) {
    console.log("+++++ DisplayDrivers is Rendering +++++++")
    return (<div id="drivers"
        onMouseEnter={() => { onSetIsHovered(true) }}
        onMouseLeave={() => {
            onSetIsHovered(false)
            onSetDisplayTrigger(null)
        }} >
        {Object.entries(driversInfo).map(([key, value], index) => {
            return (
                <a href={value.link} target='_blank' key={index}>
                    <div id={key} style={{ borderBottom: `3px solid ${value.teamColor}`, borderRight: `3px solid ${value.teamColor}` }} className="driver">
                        <span>{key}</span>
                        <img className="flag" src={value.flag} alt={key}></img>
                        <span className="driver-number" >{value.number}</span>
                    </div>
                </a>
            )
        })}
    </div>)
}