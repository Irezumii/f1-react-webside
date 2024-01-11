import holandFlag from '../assets/flags/bg.svg'
import mexicoFlag from '../assets/flags/mx.svg'
import gretBritanFlag from '../assets/flags/gb.svg'
import australiaFlag from '../assets/flags/hm.svg'
import spainFlag from '../assets/flags/es.svg'
import monacoFlag from '../assets/flags/mc.svg'
import canadaFlag from '../assets/flags/ca.svg'
import franceFlag from '../assets/flags/fr.svg'
import thailandFlag from '../assets/flags/th.svg'
import usaFlag from '../assets/flags/us.svg'
import japanFlag from '../assets/flags/jp.svg'
import germanyFlag from '../assets/flags/de.svg'
import denmarkFlag from '../assets/flags/dk.svg'
import finnlandFlag from '../assets/flags/fi.svg'
import chinaFlag from '../assets/flags/cn.svg'

import alfaRomeoLogo from '../assets/teams/alfa-romeo.png'
import alphaTauriLogo from '../assets/teams/alphatauri.png'
import alpineLogo from '../assets/teams/alpine.png'
import astonMartin from '../assets/teams/aston-martin.png'
import mercedesLogo from '../assets/teams/mercedes.png'
import ferrariLogo from '../assets/teams/ferrari.png'
import haasLogo from '../assets/teams/haas.png'
import mclarenLogo from '../assets/teams/mclaren.png'
import redBullLogo from '../assets/teams/red-bull.png'
import williamsLogo from '../assets/teams/williams.png'

import verstappenImg from '../assets/driversImages/verstappen.webp'
import perrezImg from '../assets/driversImages/perrez.webp'
import hamiltonImg from '../assets/driversImages/lewis.webp'
import russelImg from '../assets/driversImages/russel.webp'
import norrisImg from '../assets/driversImages/norris.webp'
import piastriImg from '../assets/driversImages/piastri.webp'
import saintzImg from '../assets/driversImages/saintz.webp'
import leclerc from '../assets/driversImages/leclerc.webp'
import alonzoImg from '../assets/driversImages/alonzo.webp'
import strollImg from '../assets/driversImages/stroll.webp'
import gaslyImg from '../assets/driversImages/gasly.webp'
import occonImg from '../assets/driversImages/occon.webp'
import albonImg from '../assets/driversImages/albon.webp'
import sargeant from '../assets/driversImages/sargeant.webp'
import tsunodaImg from '../assets/driversImages/tsunoda.webp'
import ricardoImg from '../assets/driversImages/riccardo.webp'
import hulkenberg from '../assets/driversImages/hulkenberg.webp'
import magnussenimg from '../assets/driversImages/magnussen.webp'
import bottasImg from '../assets/driversImages/bottas.webp'
import guanyuImg from '../assets/driversImages/guanyu.webp'



export const driversInfo = {
    "Max VERSTAPEN": {
        flag: holandFlag,
        image: verstappenImg,
        teamColor: "#3671c6",
        link: "https://www.formula1.com/en/drivers/max-verstappen.html",
        number: "01",
        nationality: "Holandia",
        team: "Red Bull Racing",
        birthDate: "30/09/1997",
        teamLogo: redBullLogo,
        wins: "54",
        points:"2586",
        podiums:"98",
        bestResuult:"WC",
    },
    "Sergio PERREZ": {
        flag: mexicoFlag,
        image: perrezImg,
        teamColor: "#3671c6",
        link: "https://www.formula1.com/en/drivers/sergio-perez.html",
        number: "11",
        nationality: "Meksyk",
        team: "Red Bull Racing",
        birthDate: "26/01/1990",
        teamLogo: redBullLogo,
        wins: "6",
        points:"1486",
        podiums:"35",
        bestResuult:"1st",
    },
    "Lewis HAMILTON": {
        flag: gretBritanFlag,
        image: hamiltonImg,
        teamColor: "#6cd3bf",
        link: "https://www.formula1.com/en/drivers/lewis-hamilton.html",
        number: "44",
        nationality: "Wielka Brytania",
        team: "Mercedes",
        birthDate: "07/01/1985",
        teamLogo: mercedesLogo,
        teamLogoStyle:{height:"52px", width:"auto"},
        wins: "103",
        points:"4639",
        podiums:"197",
        bestResuult:"WC",
    },
    "George RUSSEL": {
        flag: gretBritanFlag,
        image: russelImg,
        teamColor: "#6cd3bf",
        link: "https://www.formula1.com/en/drivers/george-russell.html",
        number: "63",
        nationality: "Wielka Brytania",
        team: "Mercedes",
        birthDate: "15/02/1998",
        teamLogo: mercedesLogo,
        teamLogoStyle:{height:"52px", width:"auto"},
        wins: "1",
        points:"469",
        podiums:"11",
        bestResuult:"1st",
    },
    "Lando NORRIS": {
        flag: gretBritanFlag,
        image: norrisImg,
        teamColor: "#f58020",
        link: "https://www.formula1.com/en/drivers/lando-norris.html",
        number: "04",
        nationality: "Wielka Brytania",
        team: "McLaren",
        birthDate: "13/11/1999",
        teamLogo: mclarenLogo,
        teamLogoStyle:{height:"58px", width:"auto"},
        wins: "0",
        points:"633",
        podiums:"13",
        bestResuult:"2th",
    },
    "Oscar PIASTRI": {
        flag: australiaFlag,
        image: piastriImg,
        teamColor: "#f58020",
        link: "https://www.formula1.com/en/drivers/oscar-piastri.html",
        number: "81",
        nationality: "Australia",
        team: "McLaren",
        birthDate: "06/04/2001",
        teamLogo: mclarenLogo,
        teamLogoStyle:{height:"58px", width:"auto"},
        wins: "0",
        points:"97",
        podiums:"2",
        bestResuult:"2th",
    },
    "Carlos SAINZ": {
        flag: spainFlag,
        image: saintzImg,
        teamColor: "#f91536",
        link: "https://www.formula1.com/en/drivers/carlos-sainz.html",
        number: "55",
        nationality: "Hiszpania",
        team: "Ferrari",
        birthDate: "01/09/1994",
        teamLogo:ferrariLogo ,
        teamLogoStyle:{height:"70px", width:"auto"},
        wins: "2",
        points:"982",
        podiums:"18",
        bestResuult:"1st",
    },
    "Charles LECLERC": {
        flag: monacoFlag,
        image: leclerc,
        teamColor: "#f91536",
        link: "https://www.formula1.com/en/drivers/charles-leclerc.html",
        number: "16",
        nationality: "Monaco",
        team: "Ferrari",
        birthDate: "16/10/1997",
        teamLogo:ferrariLogo ,
        teamLogoStyle:{height:"70px", width:"auto"},
        wins: "5",
        points:"1074",
        podiums:"30",
        bestResuult:"1st",
    },
    "Fernando ALONZO": {
        flag: spainFlag,
        image: alonzoImg,
        teamColor: "#358c75",
        link: "https://www.formula1.com/en/drivers/fernando-alonso.html",
        number: "14",
        nationality: "Hiszpania",
        team: "Aston Martin",
        birthDate: "29/07/1981",
        teamLogo:astonMartin ,
        teamLogoStyle:{height:"58px", width:"auto"},
        wins: "32",
        points:"2267",
        podiums:"106",
        bestResuult:"WC",
    },
    "Lance STROLL": {
        flag: canadaFlag,
        image: strollImg,
        teamColor: "#358c75",
        link: "https://www.formula1.com/en/drivers/lance-stroll.html",
        number: "18",
        nationality: "Canada",
        team: "Aston Martin",
        birthDate: "29/10/1998",
        teamLogo: astonMartin,
        teamLogoStyle:{height:"58px", width:"auto"},
        wins: "0",
        points:"268",
        podiums:"3",
        bestResuult:"3th",
    },
    "Pierre GASLY": {
        flag: franceFlag,
        image: gaslyImg,
        teamColor: "#2293d1",
        link: "https://www.formula1.com/en/drivers/pierre-gasly.html",
        number: "10",
        nationality: "Francja",
        team: "Apline",
        birthDate: "07/02/1996",
        teamLogo: alpineLogo,
        teamLogoStyle:{height:"55px", width:"auto"},
        wins: "1",
        points:"394",
        podiums:"4",
        bestResuult:"1st",
    },
    "Esteban OCCON": {
        flag: franceFlag,
        image: occonImg,
        teamColor: "#2293d1",
        link: "https://www.formula1.com/en/drivers/esteban-ocon.html",
        number: "31",
        nationality: "Francja",
        team: "Apline",
        birthDate: "17/09/1996",
        teamLogo: alpineLogo,
        teamLogoStyle:{height:"55px", width:"auto"},
        wins: "1",
        points:"422",
        podiums:"3",
        bestResuult:"1st",
    },
    "Alex ALBON": {
        flag: thailandFlag,
        image: albonImg,
        teamColor: "#37bedd",
        link: "https://www.formula1.com/en/drivers/alexander-albon.html",
        number: "23",
        nationality: "Tajlandia",
        team: "Williams",
        birthDate: "23/03/1996",
        teamLogo: williamsLogo,
        teamLogoStyle:{height:"50px", width:"auto"},
        wins: "0",
        points:"228",
        podiums:"2",
        bestResuult:"3th",
    },
    "Logan SARGEANT": {
        flag: usaFlag,
        image: sargeant,
        teamColor: "#37bedd",
        link: "https://www.formula1.com/en/drivers/logan-sargeant.html",
        number: "02",
        nationality: "Stany Zjednoczone",
        team: "Williams",
        birthDate: "31/12/2000",
        teamLogo: williamsLogo,
        teamLogoStyle:{height:"50px", width:"auto"},
        wins: "0",
        points:"1",
        podiums:"0",
        bestResuult:"10th",
    },
    "Yuki TSUNODA": {
        flag: japanFlag,
        image: tsunodaImg,
        teamColor: "#5e8faa",
        link: "https://www.formula1.com/en/drivers/yuki-tsunoda.html",
        number: "22",
        nationality: "Japonia",
        team: "AlphaTauri",
        birthDate: "11/05/2000",
        teamLogo: alphaTauriLogo,
        wins: "0",
        points:"61",
        podiums:"0",
        bestResuult:"4th",
    },
    "Daniel RICARDO": {
        flag: australiaFlag,
        image: ricardoImg,
        teamColor: "#5e8faa",
        link: "https://www.formula1.com/en/drivers/daniel-ricciardo.html",
        number: "03",
        nationality: "Australia",
        team: "AlphaTauri",
        birthDate: "01/07/1989",
        teamLogo:alphaTauriLogo ,
        wins: "8",
        points:"1317",
        podiums:"32",
        bestResuult:"1st",
    },
    "Nico HULKENBERG": {
        flag: germanyFlag,
        image: hulkenberg,
        teamColor: "#b6babd",
        link: "https://www.formula1.com/en/drivers/nico-hulkenberg.html",
        number: "27",
        nationality: "Niemcy",
        team: "Haas F1 Team",
        birthDate: "19/08/1987",
        teamLogo: haasLogo,
        teamLogoStyle:{height:"45px", width:"auto"},
        wins: "0",
        points:"530",
        podiums:"0",
        bestResuult:"4th",
    },
    "Kevin MAGNUSSEN": {
        flag: denmarkFlag,
        image: magnussenimg,
        teamColor: "#b6babd",
        link: "https://www.formula1.com/en/drivers/kevin-magnussen.html",
        number: "20",
        nationality: "Dania",
        team: "Haas F1 Team",
        birthDate: "05/10/1992",
        teamLogo:haasLogo ,
        teamLogoStyle:{height:"45px", width:"auto"},
        wins: "0",
        points:"186",
        podiums:"1",
        bestResuult:"2th",
    },
    "Valtteri BOTTAS": {
        flag: finnlandFlag,
        image: bottasImg,
        teamColor: "#c92d4b",
        link: "https://www.formula1.com/en/drivers/valtteri-bottas.html",
        number: "77",
        nationality: "Finlandia",
        team: "Alfa Romeo",
        birthDate: "28/08/1989",
        teamLogo: alfaRomeoLogo,
        teamLogoStyle:{height:"52px", width:"auto"},
        wins: "10",
        points:"1797",
        podiums:"67",
        bestResuult:"1st",
    },
    "Zhou GUANYU": {
        flag: chinaFlag,
        image: guanyuImg,
        teamColor: "#c92d4b",
        link: "https://www.formula1.com/en/drivers/guanyu-zhou.html",
        number: "24",
        nationality: "Chiny",
        team: "Alfa Romeo",
        birthDate: "30/05/1999",
        teamLogo: alfaRomeoLogo,
        teamLogoStyle:{height:"52px", width:"auto"},
        wins: "0",
        points:"12",
        podiums:"0",
        bestResuult:"8th",
    },
}

export const teamInfo = {
    "Red Bull": {
        logo: redBullLogo,
        logoStyle: { width: "110px" },
        link: "https://www.formula1.com/en/teams/Red-Bull-Racing.html",
    },
    "Mercedes": {
        logo: mercedesLogo,
        logoStyle: { width: "120px" },
        link: "https://www.formula1.com/en/teams/Mercedes.html",
    },
    "Ferrari": {
        logo: ferrariLogo,
        link: "https://www.formula1.com/en/teams/Ferrari.html",
    },
    "McLaren": {
        logo: mclarenLogo,
        logoStyle: { width: "180px", paddingLeft: "20px" },
        link: "https://www.formula1.com/en/teams/McLaren.html",
    },
    "Aston Martin": {
        logo: astonMartin,
        logoStyle: { width: "130px" },
        link: "https://www.formula1.com/en/teams/Aston-Martin.html",
    },
    "Alfa Romeo": {
        logo: alfaRomeoLogo,
        link: "https://www.formula1.com/en/teams/Alfa-Romeo.html",
    },
    "AlphaTauri": {
        logo: alphaTauriLogo,
        link: "https://www.formula1.com/en/teams/AlphaTauri.html",
    },
    "Alpine": {
        logo: alpineLogo,
        link: "https://www.formula1.com/en/teams/Alpine.html",
    },
    "Haas": {
        logo: haasLogo,
        logoStyle: { width: "150px", paddingRight: "10px" },
        link: "https://www.formula1.com/en/teams/Haas-F1-Team.html",
    },
    "Williams": {
        logo: williamsLogo,
        link: "https://www.formula1.com/en/teams/Williams.html",
    },
}