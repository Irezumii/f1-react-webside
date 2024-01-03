import './App.css';
import { flags } from './functions/importingImages'; // dla Drivers

function Display() {
  return (
    <div id="drivers">
      {Object.entries(flags).map(([key, value], index) => {
        return (
          <a href={value.link} target='_blank'>
            <div key={key + index} id={key} style={value.style} className="driver">
              <span>{key}</span> 
              <img class="flag" src={value.flag} alt={key}></img>
              <span class="driver-number" >{value.number}</span>
              </div>
            </a>
        )
      })}
    </div>
  )
}

function Drivers() {
  return (
    <>
      <div id="nav-drivers" className="nav-button"><i className="fa-solid fa-flag-checkered"></i> Kierowcy <i className="fa-solid fa-caret-down"></i></div>
    </>
  )
}


function Header() {
  return (
    <>
      <div id="header">
        <div className="nav-button"><i class='far fa-calendar-alt'></i> Harmonogram</div>
        <div id="nav-results" className="nav-button"><i className="fa-solid fa-table-list"></i> Archiwum</div>
        <Drivers />
        <div id="nav-teams" class="nav-button"><i class="fa-solid fa-landmark"></i> Zespoły <i class="fa-solid fa-caret-down"></i></div>
        <div class="nav-button"><i id="home" class="fa-solid fa-house"></i></div>
      </div>
    </>
  )

}

function App() {
  return (
    <>
      <div id="content-box">
        <Header />
        <Display />
      </div>
    </>
  );
}

export default App;
