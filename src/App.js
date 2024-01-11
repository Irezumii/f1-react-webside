import './App.css';
import { driversInfo, teamInfo } from './functions/applicationData.js'; // dla Drivers
import { useFetch } from './Hooks/useFetch.js';
import { useRef, useState, useEffect } from 'react';
import deleteIMG from './assets/delete.png'
import ad1Img from './assets/ads/ad1.jpg'
import ad2Img from './assets/ads/ad2.webp'

function Ad1() {
  const turnOff = useRef(null)
  const [display, setDisplay] = useState(false)

  setTimeout(function () {
    setDisplay(true)
    if(turnOff && turnOff.current && turnOff.current.style){
      turnOff.current.style.maxWidth = "300px"
      turnOff.current.style.paddingBottom = "0px"
    }
  }, 3000)


  function handleDelete() {
    turnOff.current.style.display = "none"
  }

  return (
    <>
      {display === true ? <div className='ad1' ref={turnOff}>
        <img className='close-ad' src={deleteIMG} alt='' onClick={handleDelete} />
        <img src={ad1Img} alt="nike ad" style={{ width: "300px", height: "600px" }} />
      </div> : null}
    </>
  )
}
function Ad2() {
  const [display, setDisplay] = useState(false)
  const turnOff = useRef(null)

  setTimeout(function () {
    setDisplay(true)
    if(turnOff && turnOff.current && turnOff.current.style){
      turnOff.current.style.maxWidth = "300px"
      turnOff.current.style.paddingBottom = "0px"
    }
  }, 4500)

  function handleDelete() {
    turnOff.current.style.display = "none"
  }

  return (
    <>
      {display === true ? <div className='ad2' ref={turnOff} >
        <img className='close-ad' src={deleteIMG} alt='' onClick={handleDelete} />
        <img src={ad2Img} alt="soda stream img" style={{ width: "300px", height: "1000px" }} />
      </div > : null}
    </>
  )
}



function Archive() {
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

  // console.log(getItem)

  function handleClickYear(el) {
    // seasonYears.current.style.justifyContent = "flex-start"
    seasonYears.current.style.width = "10%"
    setDataYear(el + ".json")
    console.log("Setting Year To", el)
  }

  function handleClickRace(year, race) {
    setIsLoading(true)
    seasonRaces.current.style.width = "20%"
    seasonRaces.current.style.height = "102%"
    seasonRaces.current.style.paddingBottom = "10px"
    const temp = `${year}/${race}/results.json`
    setDataRace(temp)
    console.log("Setting data to ", temp)
    for (let i = 0; i < raceName.current.length; i++) {
      // raceName.current[i].textContent = `${getItemYears.MRData.RaceTable.Races[i].Circuit.Location.country} GP`
      // raceName.current[i].style.fontSize = "15px"
      // raceName.current[i].style.width = "auto"
      // console.log("getItemYears.MRData.RaceTable.Races[i].Circuit.Location.country ", getItemYears.MRData.RaceTable.Races[i].Circuit.Location.country)
    }

    // if (dataRace === null) {
    //   for (let i = 0; i < raceDate.current.length; i++) {
    //     raceDate.current[i].style.display = "none"
    //   }

    //   for (let i = 0; i < raceNameBox.current.length; i++) {
    //     raceNameBox.current[i].style.flexFlow = "column"
    //   }
    // }

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
                  key={index}
                  onClick={() => handleClickRace(item.season, item.round, index)}
                  // ref={raceNameBox}
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


// function ConstructorLeaderBoards() {
//   const constructorStandings = useFetch("current/constructorStandings.json")
//   const getData = constructorStandings?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings
//   const constructorsDiv = useRef(null)
//   console.log("get Data ", getData)
//   console.log("constructorsStandings ", constructorStandings)

//   function handleLeave() {
//     constructorsDiv.current.scrollTop = 0
//   }

//   return (
//     <div id="constructor-leaderboards" onMouseLeave={handleLeave} ref={constructorsDiv}>
//       <h3>Constructor Standings <i class="fa-solid fa-angles-down"></i></h3>
//       {getData?.map((item, index) => {
//         return (
//           <a href={item.Constructor.url} key={index} target="_blank">
//             <div class="leaderboard-constructor">
//               <div class="leaderboard-constructor-place">{index + 1}</div>
//               <div class="leaderboard-constructor-name">{item.Constructor.name}</div>
//               <div class="leaderboard-constructor-points">{item.points}</div>
//             </div>
//           </a>
//         )
//       })}
//     </div>
//   )
// }



// function DriversLeaderboards() {
//   const driversStandings = useFetch("current/driverStandings.json");
//   const getData = driversStandings?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings;
//   const driversDiv = useRef(null)

//   console.log(getData);

//   function handleLeave() {
//     driversDiv.current.scrollTop = 0
//   }

//   return (
//     <>
//       <div id="drivers-leaderboards" ref={driversDiv} onMouseLeave={handleLeave}>
//         <h3>Driver Standings <i class="fa-solid fa-angles-down"></i></h3>
//         {getData?.map((item, index) => {
//           return (
//             <a href={item.Driver.url} key={index} target="_blank">
//               <div class="leaderboard-driver">
//                 <div class="leaderboard-driver-place">{index + 1}</div>
//                 <div class="leaderboard-driver-name">
//                   {item.Driver.givenName + " " + item.Driver.familyName}
//                 </div>
//                 <div class="leaderboard-driver-points">{item.points}</div>
//               </div>
//             </a>
//           )
//         })}
//       </div>
//     </>
//   )
// }

function Display({ onDisplayTrigger, onSetIsHovered, onSetDisplayTrigger }) {
  const constructorStandings = useFetch("current/constructorStandings.json")
  const driversStandings = useFetch("current/driverStandings.json");


  function displayArchive() {
    return (
      <>
        <Archive />
      </>
    )
  }



  function displayListOfDrivers() {

    return (
      <>
        <div id="content-drivers">
          {Object.entries(driversInfo).map(([key, value], index) => {
            const [firstName, lastName] = key.split(' ')
            return (
              <a href={value.link} target='_blank' key={index} style={{ backgroundColor: value.teamColor, }}>
                <div className="driver-banner">
                  <img className="drivers-img" src={value.image} alt={key}></img>
                  <div className="number" ><span>{value.number}</span></div>
                  <div className="driver-banner-box">
                    <div className="driver-banner-box-upper">
                      <span><h3>{firstName + " " + lastName}</h3></span>
                      {/* <span><h3>{lastName}</h3></span> */}
                      {/* <span><h3>{value.team}</h3></span> */}
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
            <div id={key} style={{ borderBottom: `3px solid ${value.teamColor}`, borderRight: `3px solid ${value.teamColor}` }} className="driver">
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

  function displayRankings() {
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
                <div class="driver-ranking-box" style={(index + 1) % 2 === 0 ? { backgroundColor: "#ebeaea" } : { backgroundColor: "white" }} >
                  <div class="driver-ranking-place">{index + 1}</div>
                  <div class="driver-ranking-nickname">{item.Driver.code}</div>
                  <div class="driver-ranking-name">
                    {item.Driver.givenName + " " + item.Driver.familyName}
                  </div>
                  <div class="driver-ranking-nationality">{item.Driver.nationality}</div>
                  <div class="driver-ranking-wins">{item.wins} W</div>
                  <div class="driver-ranking-points">{item.points}p</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    )
  }


  return (
    <>
      {onDisplayTrigger === "drivers" ? displayDrivers() : null}
      {onDisplayTrigger === "teams" ? displayTeams() : null}
      {onDisplayTrigger === "driversList" ? displayListOfDrivers() : null}
      {onDisplayTrigger === "archive" ? displayArchive() : null}
      {onDisplayTrigger === "rankings" ? displayRankings() : null}
    </>
  )
}



function Header({ onSetDisplayTrigger, onDisplayTrigger, onIsHovered, onSetIsHovered }) {

  function handleEnter(el) {
    if (el === "drivers" && onDisplayTrigger !== "drivers" && onDisplayTrigger !== "driversList" && onDisplayTrigger !== "archive") {
      onSetDisplayTrigger("drivers")
    } else if (el === "teams" && onDisplayTrigger !== "teams" && onDisplayTrigger !== "driversList" && onDisplayTrigger !== "archive") {
      onSetDisplayTrigger("teams")
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

        <div id="nav-drivers" className="nav-button"
          onMouseEnter={() => handleEnter("drivers")}
          onMouseLeave={handleLeave}
          onClick={() => handleClick("driversList")}
        >
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

        <div className="nav-button"><i id="home" onClick={() => onSetDisplayTrigger(null)} className="fa-solid fa-house"></i></div>
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
        {/* <ConstructorLeaderBoards />
        <DriversLeaderboards /> */}
        <Ad1 />
        <Ad2 />
      </div>
    </>
  );
}

export default App;
