import './ContentBox.css'

import { useState } from "react"

import Header from "../Header"
import Display from "../Display"
import Ad1 from "../Ads/Ad1"
import Ad2 from "../Ads/Ad2"

export default function ContentBox() {
    console.log("++++++++++ContentBox is Rendering ++++++++++")
    const [displayTrigger, setDisplayTrigger] = useState(null)
    const [isHovered, setIsHovered] = useState(false)

    return (
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
            <Ad1 />
            <Ad2 />
        </div>
    )
}