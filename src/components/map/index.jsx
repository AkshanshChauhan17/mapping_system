import { useEffect, useState } from "react"
import map_layer from "../../assets/map/main_map_layer.png"

export default function ITGMap({coords}){
    return (
        <div className="itg-map">
            <img className="layer-bg" src={map_layer} alt="itg_map_layer_default" />
            <svg className="first-layer" xmlns="http://www.w3.org/2000/svg" width="1000px" height="1000px">
                {
                    coords.locations.map((e, i)=>{
                        return (
                            <g className="location-group">
                                <circle cx={e.x + "px"} cy={e.y + "px"} r="10px" fill="red" />
                                <text x={e.x + 20 + "px"} y={e.y + 1 + "px"} dominant-baseline="middle" text-anchor="middle" font-size="16" fill="white" style={{fontWeight: 600}}>{coords.index_of}</text>
                            </g>
                        )
                    })
                }
            </svg>
        </div>
    )
}