export default function MyDiscription(){
    return(
        <div className="BigDiv">
        <div className="MyDiscription">
            <h1 className="My">Hey there.</h1>
            <h1 className="My">I am Vatsal.</h1>
            <h1 className="Small">I am a dedicated software developer currently gaining hands-on experience as an intern. I am a BTech CSE student currently in the 7th semester at Bennett University. While my primary focus lies in Flutter, I have a beginner's level understanding of React and Firebase. I am passionate about learning and open to expanding my knowledge in these areas.</h1>
        </div>
        <img src={require('./placeHolder.png')} className="imgg" alt="logo"  />
        </div>
    );
}