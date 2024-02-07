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
                <div className='header-box'>
                    <div className="nav-button" onClick={() => { handleClick("rankings") }}><i className='icon far fa-calendar-alt'></i> &nbsp;Rankingi&nbsp;</div>
                    <div id="nav-results" className="nav-button" onClick={() => handleClick("archive")} ><i className="icon fa-solid fa-table-list"></i> &nbsp;Archiwum&nbsp;</div>

                    <div className="nav-button"
                        onMouseEnter={() => handleEnter("drivers")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("driversList")}
                    >
                        <i className="icon fa-solid fa-flag-checkered"></i>
                        &nbsp;Kierowcy&nbsp;
                        <i className="icon-secound fa-solid fa-caret-down"></i>
                    </div>

                    <div className="nav-button"
                        onMouseEnter={() => handleEnter("teams")}
                        onMouseLeave={handleLeave} >
                        <i className="icon fa-solid fa-landmark"></i>
                        &nbsp;Zespoły&nbsp;
                        <i className="icon-secound fa-solid fa-caret-down"></i>
                    </div>

                    <div className="nav-button"><i id="home" onClick={() => onSetDisplayTrigger(null)} className="fa-solid fa-house"></i></div>
                </div>
            </div>
        </>
    )

}