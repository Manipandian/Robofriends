import React from "react"

const Card = (props) => {
    const {id, name, mailId} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{mailId}</p>
            </div>
        </div>
    )
}

export default Card