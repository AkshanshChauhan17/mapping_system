import { useState } from "react"
import map_layer from "../../assets/map/main_map_layer.png"

export default function ITGMap() {
    const [zoomIn, setZoomIn] = useState(0)
    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)
    return (
        <div className="itg-map">
            <img className="first-layer" style={{transform: "translateX(" + xPos + "%) translateY(" + yPos + "%) rotateZ(90deg) scaleX(" + zoomIn + "%) scaleY(" + zoomIn + "%)"}} src={map_layer} alt="layer-one"/>
            <div className="controls">
                <div className="zoom">
                    <button onClick={()=>setZoomIn(zoomIn + 5)}>Zoom+</button>
                    <button onClick={()=>setZoomIn(zoomIn - 5)}>Zoom-</button>
                </div>
                <div className="position">
                    <button onClick={()=>setXPos(xPos + 1)}>Right</button>
                    <button onClick={()=>setXPos(xPos - 1)}>Left</button>
                    <button onClick={()=>setYPos(yPos + 1)}>Top</button>
                    <button onClick={()=>setYPos(yPos - 1)}>Bottom</button>
                </div>
            </div>
        </div>
    )
}