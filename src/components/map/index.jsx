import { useEffect, useState } from "react"
import map_layer from "../../assets/map/main_map_layer.png"

export default function ITGMap() {
    const [zoomIn, setZoomIn] = useState(1000)
    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)
    const [location, setLocation] = useState([])
    const [grab, setGrab] = useState(false)
    console.log(location)
    return (
        <div className={grab ? "itg-map grabbing" : "itg-map"} onClick={(e)=>{setXPos(e.clientX); setYPos(e.clientY); setLocation(...location.push({xPos, yPos}))}} onDoubleClick={()=>zoomIn === 3000 ? setZoomIn(1000) : setZoomIn(zoomIn + 1000)}>
            <img src={map_layer} className="layer" draggable={false} width={zoomIn} height={zoomIn}></img>
            <div className="layer">
                {
                    location.map((ele, i)=>{
                        return <div className="box" style={{top: ele.xPos + "px", left: ele.yPos + "px"}} title={"location " + i}>{ele.xPos + " " + ele.yPos}</div>
                    })
                }
            </div>
        </div>
    )
}