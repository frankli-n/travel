import React from "react"


export default function Card(props) {
    // console.log(props)
    return (
        <section className="card">
            <div className="card--single">
                <img src={`../src/images/${props.img}`} className="card--single" />
                <span className="card--status">{props.status}</span>                
            </div>

            <div className="card--stats">
                <img src="../src/images/star.png" />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p className="card--infotitle">{props.title}</p>
            <p className="card--infoprice">From ${props.price} / person</p>
        </section>
    )
}