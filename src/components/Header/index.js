// Write your code here
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <header className="header">
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          className="website-logo"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-lists">
              <li className="nav-item">
                <Link to="/" onClick={() => close()} className="nav-link">
                  <AiFillHome size="36" />
                  <p className="nav-link-name">Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" onClick={() => close()} className="nav-link">
                  <BsInfoCircleFill size="36" />
                  <p className="nav-link-name">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </header>
)
export default withRouter(Header)
