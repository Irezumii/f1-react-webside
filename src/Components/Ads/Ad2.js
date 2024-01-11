import './Ad2.css'
import { useRef, useState } from "react"
import deleteImg from '../../assets/delete.png'
import ad2Img from '../../assets/ads/ad2.webp'

export default function Ad2() {
    console.log("+++++ Ad2 is Rendering +++++++")
    const [display, setDisplay] = useState(false)
    const turnOff = useRef(null)

    setTimeout(function () {
        setDisplay(true)
        if (turnOff && turnOff.current && turnOff.current.style) {
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
                <img className='close-ad' src={deleteImg} alt='' onClick={handleDelete} />
                <img src={ad2Img} alt="soda stream img" style={{ width: "300px", height: "1000px" }} />
            </div > : null}
        </>
    )
}