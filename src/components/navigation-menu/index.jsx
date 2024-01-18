import { useState } from "react"
import nav_setting from "./navigation_setting.json"
import {FaRegBuilding, FaParking, FaVolleyballBall} from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";

export default function NavigationMenu({set_coords}) {
    const [buttonActivate, setButtonActivate] = useState(0) 
    const iconsList = [<FaRegBuilding />, <FaVolleyballBall col />, <FaParking col />, <GiShuttlecock col />];
    return (
        <div className="navigation-menu">
            <h1>{nav_setting.title}</h1>
            {
                nav_setting.data.map((element, i)=>{
                    return(
                        <div className="navigation-section" key={i}>
                            <h3>{element.title}</h3>
                            <div className="navigation-links">
                                {
                                    element.content.map((inner_element, ii)=>{
                                        return(
                                            <button className={buttonActivate===i+""+ii ? "button-active" : "button-inactive"} key={ii} onClick={()=>{setButtonActivate(i + "" + ii); set_coords({index_of: buttonActivate, locations: inner_element.locations})}}>
                                                {iconsList[inner_element.locations[0].type]} {inner_element.value}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}