import { useEffect, useState } from "react"
import map_layer from "../../assets/map/main_map_layer.png"

export default function ITGMap() {
    const [zoomIn, setZoomIn] = useState(10)
    const [xPos, setXPos] = useState(500)
    const [yPos, setYPos] = useState(500)
    const [grab, setGrab] = useState(false)
    return (
        <div className={grab ? "itg-map grabbing" : "itg-map"} onClick={()=>grab ? setGrab(false) : setGrab(true)} onMouseMove={(e)=>{grab ? [setXPos(e.clientX), setYPos(e.clientY)] : null}}>
            <div className="layer" draggable={false} style={{backgroundImage: "url(" + map_layer + ")", backgroundPositionX: xPos + "px", backgroundPositionY: yPos + "px"}}></div>
        </div>
    )
}