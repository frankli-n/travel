import React from "react"
import gridphotos from '../images/photo-grid.png'

export default function Hero() {
    return (
        <div>
        <section className="hero">
            <img src={gridphotos} className="hero--gridphotos" />
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts --all without leaving home.</p>
            </div>
        </section>
        </div>
    )
}