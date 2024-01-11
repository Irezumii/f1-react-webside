import './Ad1.css'
import { useRef, useState } from "react"
import deleteImg from '../../assets/delete.png'
import ad1Img from '../../assets/ads/ad1.jpg'


export default function Ad1() {
    console.log("+++++ Ad1 is Rendering +++++++")
    const turnOff = useRef(null)
    const [display, setDisplay] = useState(false)

    setTimeout(function () {
        setDisplay(true)
        if (turnOff && turnOff.current && turnOff.current.style) {
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
                <img className='close-ad' src={deleteImg} alt='' onClick={handleDelete} />
                <img src={ad1Img} alt="nike ad" style={{ width: "300px", height: "600px" }} />
            </div> : null}
        </>
    )
}