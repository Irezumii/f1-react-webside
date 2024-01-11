import './Header.css'

export default function Header({ onSetDisplayTrigger, onDisplayTrigger, onIsHovered, onSetIsHovered }) {
    console.log("+++++ Header is Rendering +++++++")

    function handleEnter(el) {
        if (onDisplayTrigger !== "teams" && onDisplayTrigger !== "drivers" && onDisplayTrigger !== "driversList" && onDisplayTrigger !== "archive" && onDisplayTrigger !== "rankings") {
            onSetDisplayTrigger(el)
        }
        onSetIsHovered(true)
    }
    function handleLeave() {
        onIsHovered === false && onSetDisplayTrigger(null)
    }

    function handleClick(el) {
        if (onDisplayTrigger !== el) {
            onSetDisplayTrigger(el)
        }
    }
    return (
        <>
            <div id="header">
                <div className="nav-button" onClick={() => { handleClick("rankings") }}><i className='far fa-calendar-alt'></i> Rankingi</div>
                <div id="nav-results" className="nav-button" onClick={() => handleClick("archive")} ><i className="fa-solid fa-table-list"></i> Archiwum</div>

                <div className="nav-button"
                    onMouseEnter={() => handleEnter("drivers")}
                    onMouseLeave={handleLeave}
                    onClick={() => handleClick("driversList")}
                >
                    <i className="fa-solid fa-flag-checkered"></i>
                    &nbsp;Kierowcy&nbsp;
                    <i className="fa-solid fa-caret-down"></i>
                </div>

                <div className="nav-button"
                    onMouseEnter={() => handleEnter("teams")}
                    onMouseLeave={handleLeave} >
                    <i className="fa-solid fa-landmark"></i>
                    &nbsp;Zespoły&nbsp;
                    <i className="fa-solid fa-caret-down"></i>
                </div>

                <div className="nav-button"><i id="home" onClick={() => onSetDisplayTrigger(null)} className="fa-solid fa-house"></i></div>
            </div>
        </>
    )

}