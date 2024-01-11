import './DisplayTeams.css'

import { teamInfo } from "../../functions/applicationData"
export default function DisplayTeams({ onSetDisplayTrigger, onSetIsHovered }) {
    console.log("+++++ DisplayTeams is Rendering +++++++")

    return (
        <>
            <div id="teams"
                onMouseEnter={() => { onSetIsHovered(true) }}
                onMouseLeave={() => {
                    onSetIsHovered(false)
                    onSetDisplayTrigger(null)
                }}>
                {
                    Object.entries(teamInfo).map(([key, value], index) => {
                        return (
                            <a href={value.link} target='_blank' key={index}>
                                <div id={key} className="team">
                                    <div className="f1-logo"><img className='f1-logo-img' style={value.logoStyle} src={value.logo} alt={key} /></div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}