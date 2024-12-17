// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-section-container">
    <Header />
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="about-image-sm"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="about-image-lg"
        alt="about"
      />
    </div>
  </div>
)
export default About
