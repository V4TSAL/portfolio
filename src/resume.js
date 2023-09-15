import resume from "./resume.svg";
import downLoadResume from "./resume.pdf"
export default function Resume() {
	return (
    <div className="main-resume-container">
		<div className="resume-container">
			<img src={resume} alt="logo" />
		</div>
    <a
        href={downLoadResume}
        download="resume"
        target="_blank"
        rel="noreferrer"
        className="downloadButton"
      >
        <div className="downloadText">Download</div>
      </a>
    </div>
	);
}
