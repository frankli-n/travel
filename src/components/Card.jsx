import React from "react"


export default function Card(props) {
        // console.log(`../src/images/${props.item.coverImg}`)
    let badgeText

    if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }

    return (
        <div className="card">
            <div className="place--picture">
                <img src={`../src/images/${props.item.placePicture}`} className="card--image" />
            </div>
            <div className="place--info">
                <h1>{props.item.country}</h1>
                <a href={props.item.googleLocation}>View on Google Maps</a>
                <p>{props.item.dates}</p>
                <p>{props.item.description}</p>

            </div>
        </div>
    )
}


