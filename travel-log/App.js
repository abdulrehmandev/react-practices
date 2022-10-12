import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header.js"
import Card from "./components/Card.js"
import data from "./data.js"


export default function App() {
    const cards = data.map(card => <Card {...card} /> );
    
    return (
        <div className="main">
            <Header />
            {cards}
        </div>
    )
}
