import { useState } from "react"
import map_layer from "../../assets/map/main_map_layer.png"

export default function ITGMap() {
    const [zoomIn, setZoomIn] = useState(10)
    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)
    const [grab, setGrab] = useState(false)
    return (
        <div className={grab ? "itg-map grabbing" : "itg-map"} draggable={false} onDrag={(e)=>{console.log(e.clientX, e.clientY)}} onDragStart={()=>setGrab(true)} onDragEnd={()=>setGrab(false)}>
            <img className={grab ? "first-layer grabbing" : "first-layer"} draggable={false} loading="lazy" style={{transform: "translateX(" + xPos + "%) translateY(" + yPos + "%) rotateZ(90deg) scaleX(" + zoomIn + "%) scaleY(" + zoomIn + "%)"}} src={map_layer}/>
        </div>
    )
}