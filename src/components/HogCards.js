import React, { useState } from "react"

function HogCards({ name, image, specialty, greased, weight, medal }) {

    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked((clicked) => !clicked)
    }

    return (
        <div id="pigDiv">

            <h1>{name}</h1> 

            <img src={image} alt="hog" />

            <div>Want to learn more?</div>

            <button onClick={handleClick}>{clicked ? "I don't care about this pig anymore" : "Tell me more" }</button>

            <li>{clicked ? `Specialty: ${specialty}` : ""}</li>
            <li>{clicked ? `Weight: ${weight}` : "" }</li>
            <li>{clicked ? `Highest Medal Recieved: ${medal}` : ""}</li>
            <li>{clicked ? `Greased: ${greased}` : ""}</li>

        </div>
       
    )
}

export default HogCards