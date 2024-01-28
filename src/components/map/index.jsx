import { useState } from "react"
import map_layer from "../../assets/map/main_map_layer.png"
import {FaLocationArrow} from "react-icons/fa"

export default function ITGMap(){
    const [pins, setPins] = useState([])
    const [takeinput, setTakeInput] = useState(false)
    const [location, setLocation] = useState({x: 0, y: 0})
    const [text, setText] = useState()
    console.log(pins)
    return (
        <div className="main-map">
            {
                takeinput ?
                <div className="take-input" style={{top: location.y + "px", left: location.x + "px"}}>
                    <input type="text" placeholder="location name" onChange={(e)=>setText(e.target.value)} />
                    <button onClick={(e)=>{setPins([...pins,{location, text: text}]); setTakeInput(false)}}>Add</button>
                </div> : null
            }
            <img draggable={false} className="image-layer" src={map_layer} />
            <svg className="svg-layer" onClick={(e)=>{setTakeInput(true); !takeinput ? null : setLocation({x: e.clientX + window.scrollX, y: e.clientY + window.scrollY})}}>
                {
                    pins.map((e, i)=>{
                        return (
                            <g>
                                <circle cx={e.location.x} cy={e.location.y} r={10} key={i} fill="red"></circle>
                                {/* {
                                    i!==0 ? 
                                        <line x1={pins[i-1].x} y1={pins[i-1].y} x2={e.x} y2={e.y} stroke="white" strokeWidth={2}></line>
                                    :
                                        null
                                } */}
                                <text x={e.location.x} y={e.location.y} fill="white" fontWeight={700}>{e.text}</text>
                            </g>
                        )
                    })
                }
            </svg>
        </div>
    )
}