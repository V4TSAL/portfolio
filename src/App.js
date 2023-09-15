import "./App.css";
import NavBar from "./navBar";
import MyDiscription from "./myDiscription";
import { useState } from "react";
import Resume from "./resume";
function App() {
	const [index, setIndex] = useState(0);
	return (
		<div className="App">
			<NavBar changeIndex={(v) => setIndex(v)} currentIndex={index} />
			{index === 0 && <MyDiscription /> }
			{index === 2 && <Resume />}
		</div>
	);
}
export default App;
