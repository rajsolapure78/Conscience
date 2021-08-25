import React from 'react'
import { Image } from 'react-bootstrap'
import AB from '../assets/images/AB.jpg'
import './Hero.css'

export default function Hero() {
    let myStyle = {
        minHeight: "70vh",
        margin: "20px auto"
    }
    let imgstyle = {
        width: "50%",
        height: "50%"
}
return (
    <div className="container" style={myStyle}>
        <h3 className="text-center my-3">Hero</h3>
        <Image src={AB} alt="Amitabh Bachchan" style={imgstyle} className="center"/>
    </div>
)
}
