import './App.css';
import { driversInfo, teamInfo } from './functions/applicationData.js'; // dla Drivers
import { useFetch } from './Hooks/useFetch.js';
import { useRef, useState, useEffect } from 'react';


function ConstructorLeaderBoards() {


  const constructorStandings = useFetch("constructorStandings.json")
  const getData = constructorStandings?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings
  console.log("get Data ", getData)
  console.log("constructorsStandings ",constructorStandings)

  return (
    <div id="constructor-leaderboards">
      <h3>Constructor Standings <i class="fa-solid fa-angles-down"></i></h3>
      {getData?.map((item, index) => {
        return (
          <a href={item.Constructor.url} key={index} target="_blank">
            <div class="leaderboard-constructor">
              <div class="leaderboard-constructor-place">{index + 1}</div>
              <div class="leaderboard-constructor-name">{item.Constructor.name}</div>
              <div class="leaderboard-constructor-points">{item.points}</div>
            </div>
          </a>
        )
      })}
    </div>
  )
}



function DriversLeaderboards() {
  const driversStandings = useFetch("driverStandings.json");
  const getData = driversStandings?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings;

  console.log(getData);

  return (
    <>
      <div id="drivers-leaderboards">
        <h3>Driver Standings <i class="fa-solid fa-angles-down"></i></h3>
        {getData?.map((item, index) => {
          return (
            <a href={item.Driver.url} key={index} target="_blank">
              <div class="leaderboard-driver">
                <div class="leaderboard-driver-place">{index + 1}</div>
                <div class="leaderboard-driver-name">
                  {item.Driver.givenName + " " + item.Driver.familyName}
                </div>
                <div class="leaderboard-driver-points">{item.points}</div>
              </div>
            </a>
          )
        })}
      </div>
    </>
  )
}

function Display({ onDisplayTrigger, onSetIsHovered, onSetDisplayTrigger }) {

  function displayDrivers() {
    return (<div id="drivers"
      onMouseEnter={() => { onSetIsHovered(true) }}
      onMouseLeave={() => {
        onSetIsHovered(false)
        onSetDisplayTrigger(null)
      }} >
      {Object.entries(driversInfo).map(([key, value], index) => {
        return (
          <a href={value.link} target='_blank' key={index}>
            <div id={key} style={value.style} className="driver">
              <span>{key}</span>
              <img class="flag" src={value.flag} alt={key}></img>
              <span class="driver-number" >{value.number}</span>
            </div>
          </a>
        )
      })}
    </div>)
  }

  function displayTeams() {

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

  return (
    <>
      {onDisplayTrigger === "drivers" ? displayDrivers() : null}
      {onDisplayTrigger === "teams" ? displayTeams() : null}
    </>
  )
}



function Header({ onSetDisplayTrigger, onDisplayTrigger, onIsHovered, onSetIsHovered }) {

  function handleEnter(el) {
    if (el === "drivers" && onDisplayTrigger !== "drivers") {
      onSetDisplayTrigger("drivers")
    } else if (el === "teams" && onDisplayTrigger !== "teams") {
      onSetDisplayTrigger("teams")
    }
    onSetIsHovered(true)
  }
  function handleLeave() {
    onIsHovered === false && onSetDisplayTrigger(null)
  }

  return (
    <>
      <div id="header">
        <div className="nav-button"><i className='far fa-calendar-alt'></i> Harmonogram</div>
        <div id="nav-results" className="nav-button"><i className="fa-solid fa-table-list"></i> Archiwum</div>

        <div id="nav-drivers" className="nav-button"
          onMouseEnter={() => handleEnter("drivers")}
          onMouseLeave={handleLeave} >
          <i className="fa-solid fa-flag-checkered"></i>
          &nbsp;Kierowcy&nbsp;
          <i className="fa-solid fa-caret-down"></i>
        </div>

        <div id="nav-teams" className="nav-button"
          onMouseEnter={() => handleEnter("teams")}
          onMouseLeave={handleLeave} >
          <i className="fa-solid fa-landmark"></i>
          &nbsp;Zespoły&nbsp;
          <i className="fa-solid fa-caret-down"></i>
        </div>

        <div className="nav-button"><i id="home" className="fa-solid fa-house"></i></div>
      </div>
    </>
  )

}

function App() {

  const [displayTrigger, setDisplayTrigger] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const refTimeout = useRef(null)

  return (
    <>
      <div id="content-box">
        <Header
          onSetDisplayTrigger={setDisplayTrigger}
          onDisplayTrigger={displayTrigger}
          onSetIsHovered={setIsHovered}
          onIsHovered={isHovered}
        />
        <Display
          onDisplayTrigger={displayTrigger}
          onSetDisplayTrigger={setDisplayTrigger}
          onSetIsHovered={setIsHovered}
        />
        <ConstructorLeaderBoards />
        <DriversLeaderboards />
      </div>
    </>
  );
}

export default App;
