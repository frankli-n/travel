import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"



/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/



export default function App() {

    const dataElements = Data.map(line => {
        return <Card id={line.id} title={line.title} description={line.description} price={line.price} coverImg={line.coverImg} reviewCount={line.stats.reviewCount} rating={line.stats.rating} location={line.location} openSpots={line.openSpots} />
    })
    return (

        <div>
            <Navbar />
            <Hero />
            {dataElements}
        </div>
    )
}

