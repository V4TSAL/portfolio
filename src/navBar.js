export default function NavBar({changeIndex,currentIndex}) {
	return (
		<nav>
		<div className="Navbar" style={{visibility:""}}>
			<h1 className="Nav" onClick={()=>changeIndex(0)} style={currentIndex===0?{color: "#ff6600" }:{color:""}}>About Me</h1>	
            <h1 className="Nav" onClick={()=>changeIndex(1)} style={currentIndex===1?{color: "#ff6600" }:{color:""}}>Projects</h1>
            <h1 className="Nav" onClick={()=>changeIndex(2)} style={currentIndex===2?{color: "#ff6600" }:{color:""}}>Resume</h1>
		</div>
		</nav>
	);
}
