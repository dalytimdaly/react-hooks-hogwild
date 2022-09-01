import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogBox from "./HogBox";
import HogCards from "./HogCards";

function App() {

	const [hogsShown, setHogsShown] = useState(hogs)
	const [showGreased, setShowGreased] = useState(false)
	const [sortHogsName, setSortHogsName] = useState(true)
	const [sortHogsWeight, setSortHogsWeight] = useState(true)

	function handleWeight() {
		setSortHogsWeight((sortHogsWeight) => !sortHogsWeight)
		if (sortHogsWeight === true) {
			sortHogsByWeight()
		} else if (sortHogsWeight === false) {
			unsortHogs()
		}		
	}

	function sortHogsByWeight() {
		const weight = hogs.sort(function(a, b) {
			if(a.weight < b.weight) return -1
			if(a.weight > b.weight) return +1
			return 0
		})
		setHogsShown(weight)
	}

	function handleClick() {
		setShowGreased((showGreased) => !showGreased)
		if (showGreased === true) {
		return greasyPigs()} 
		if (showGreased === false) {
			setHogsShown(hogs)
		}
	}

	function greasyPigs() {
		const newHogsArray = hogs.filter((hog) => hog.greased === true);
		setHogsShown(newHogsArray)
	}

	function handleName() {
		setSortHogsName((sortHogsName) => !sortHogsName)
		if (sortHogsName === true) {
			sortHogsByName()
		} else if (sortHogsName === false) {
			unsortHogs()
		}		
	}

	function sortHogsByName() {
		const sort = hogs.sort(function(a, b) {
			if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
			if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
			return 0;
		   })
		   setHogsShown(sort)
	}

	function unsortHogs() {
		const unsort = hogs.sort(() => Math.random() - 0.5)
		setHogsShown(unsort)
	}

	return (
		<div className="App">
			<Nav />
			<div className="Filter">
        		<button onClick={handleClick}>{showGreased ? "Show me some greasy piggies please" : "Show me all the piggies"}</button>
				<button onClick={handleWeight}>{sortHogsWeight ? "Sort By Weight" : "Random Order"}</button>
				<button onClick={handleName}>{sortHogsName ? "Sort By Name" : "Random Order"}</button>
      		</div>
			<HogBox 
			hogs={hogsShown}
			/>
			<HogCards 
			hogs={hogsShown}
			/>

		</div>
	);
}

export default App;
