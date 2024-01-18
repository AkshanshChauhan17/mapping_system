import { useEffect, useState } from "react"
import map_layer from "../../assets/map/main_map_layer.png"
import {FaRegBuilding, FaParking, FaVolleyballBall} from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi"
import pop_up_sound from "../../assets/sound/pop_up.mp3"

export default function ITGMap({coords}){
    const [hoverGroup, setHoverGroup] = useState();
    const iconsList = [<FaRegBuilding color="white" />, <FaVolleyballBall color="white" />, <FaParking color="white" />, <GiShuttlecock color="white" />];
    const audio = new Audio(pop_up_sound)
    const play_pop_sound = ()=>{
        audio.play()
    }
    return (
        <div className="itg-map">
            <img className="layer-bg" src={map_layer} alt="itg_map_layer_default" />
            <svg className="first-layer" xmlns="http://www.w3.org/2000/svg" width="1000px" height="1000px">
                {
                    coords.locations.map((e, i)=>{
                        return (
                            <g className="location-group" key={i} onClick={()=>{hoverGroup===i ? setHoverGroup(-1) : setHoverGroup(i); play_pop_sound();}}>
                                <circle cx={e.x + "px"} cy={e.y + "px"} r="12px" fill="rgb(200, 10, 10)" />
                                <foreignObject x={e.x - 8 + "px"} y={e.y - 10 + "px"} width="20px" height="20px">
                                    {iconsList[e.type]}
                                </foreignObject>
                                <rect x={e.x + 15 + "px"} y={e.y - 10 + "px"} width="175px" height="20px" fill="rgb(200, 10, 10)" rx="0" />
                                <text x={e.x + 20 + "px"} y={e.y + 1 + "px"} dominant-baseline="middle" text-anchor="left" font-size="16" fill="white" style={{fontWeight: 600}}>{e.title}</text>
                                <g className="location-group-details" style={hoverGroup===i ? {display: ""} : {display: "none"}}>
                                    <rect x={e.x - 10 + "px"} y={e.y + 20 + "px"} width="200px" height="250px" fill="#FFFFFF" rx="2" />
                                    <image href="https://news.ua.edu/wp-content/uploads/2018/09/hewsonbhall.jpg" x={e.x - 10 + "px"} y={e.y + "px"} width="200px" height="150px" rx="2" />
                                    <foreignObject className="location-description" x={e.x - 5 + "px"} y={e.y + 140 + "px"} width="190" height="120">
                                        <p style={{fontSize: 12, fontWeight: 500}}>{e.description}</p>
                                        <a href="">view</a>
                                    </foreignObject>
                                </g>
                            </g>
                        )
                    })
                }
            </svg>
        </div>
    )
}