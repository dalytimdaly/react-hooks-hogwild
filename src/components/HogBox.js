import React from "react"
import HogCards from "./HogCards"


function HogBox({ hogs }) {
    
    const newHogs = hogs.map((hog) => (
        <HogCards key={hog.name} 
        name={hog.name} 
        image={hog.image} 
        specialty={hog.specialty} 
        greased={hog.greased} 
        weight={hog.weight}
        medal={hog['highest medal achieved']}/>
    ))

    return (
        <div>
            {newHogs}
        </div>

    )
}

export default HogBox