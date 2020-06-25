import React from "react";
import Card from "./Card";
import "./RobotList.css"

const RobotList = ({robots}) => {
return robots.lenght ? <h1>Loadign</h1> :
    (
        <div id="cards" className="ma2">
            {
                robots.map((data, i) => {
                    return (
                        <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} mailId={robots[i].email}/>
                    )
                })
            }
        </div>
    )
}

export default RobotList;