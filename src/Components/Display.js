import './Display.css'
import DisplayDrivers from "./DisplayComponents/DisplayDrivers"
import DisplayTeams from "./DisplayComponents/DisplayTeams"
import DisplayListOfDrivers from "./DisplayComponents/DisplayListOfDrivers"
import Archive from "./DisplayComponents/Archive"
import DisplayRankings from "./DisplayComponents/DisplayRankings"

export default function Display({ onDisplayTrigger, onSetIsHovered, onSetDisplayTrigger }) {
    console.log("+++++ Display is Rendering +++++++")
    return (
        <>
            {onDisplayTrigger === "drivers" ? <DisplayDrivers onSetIsHovered={onSetIsHovered} onSetDisplayTrigger={onSetDisplayTrigger} /> : null}
            {onDisplayTrigger === "teams" ? <DisplayTeams onSetIsHovered={onSetIsHovered} onSetDisplayTrigger={onSetDisplayTrigger} /> : null}
            {onDisplayTrigger === "driversList" ? <DisplayListOfDrivers /> : null}
            {onDisplayTrigger === "archive" ? <Archive /> : null}
            {onDisplayTrigger === "rankings" ? <DisplayRankings /> : null}
        </>
    )
}