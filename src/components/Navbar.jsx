import React from "react"
import earthPng from '../images/earth.png'

export default function Navbar() {
    return (
        <nav>
            <div className="nav--elements">
                <img src={earthPng} className="nav--logo" />
                <span className="s--title">My Travels</span>
            </div>
        </nav>
    )
}