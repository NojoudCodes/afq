import './ContentCard.css'
import { CiLocationOn } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";

function ContentCard ({ icon, title, subtitle, info, paragraph, showGlowLine = false, showButton = false, buttonText, showIcons = false }) {
  return(
    <>
      <div className="card">
        <div className="card-container">
          <img src={ icon } alt="image icon" width={60} className="icon" />
          <h3>{ title }</h3>
          <h6>
            {showIcons && <CiLocationOn size={14} style={{
              color: "rgba(0, 211, 242, 0.7)"
            }} />}
            { subtitle }
          </h6>
          <h6>
            {showIcons && <FaRegFileAlt size={14} style={{
              color: 'rgba(81, 162, 255, 0.7)'
            }} /> }
            { info }
          </h6>
          {showGlowLine && <div className="card-glow-line"></div>}
          <p>{ paragraph }</p>
          {showButton && <button className="card-button">{ buttonText }</button>}
        </div>
      </div>
    </>
  )
}

export default ContentCard