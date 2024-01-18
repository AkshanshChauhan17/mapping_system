import { useState } from "react"
import nav_setting from "./navigation_setting.json"

export default function NavigationMenu({set_coords}) {
    const [buttonActivate, setButtonActivate] = useState(0) 
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
                                                {inner_element.value}
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