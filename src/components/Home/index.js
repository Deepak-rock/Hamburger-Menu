// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-section-container">
    <Header />
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="home-image-sm"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-image-lg"
        alt="home"
      />
    </div>
  </div>
)
export default Home
