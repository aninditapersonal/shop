import React from 'react'
import './Pages.css'
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="foot-left">
            <p>Developer: <span>ANINDITA PAUL</span></p>
            <p>Contact: <a href="mailto:aninditapaul.personal@gmail.com">aninditapaul.personal@gmail.com</a></p>
        </div>
        <div className="foot-right">
            <h3>Connect with me </h3>
            <div className="social">
                <a target = '_blank' href="https://github.com/aninditapersonal"><FaGithub/></a>
                <a target = '_blank' href="https://www.linkedin.com/in/aninditapersonal/"><FaLinkedinIn/></a>
                <a target = '_blank' href="https://www.instagram.com/ani_ndi_ta_paul/"><FaInstagram/></a>
                <a target = '_blank' href="https://www.facebook.com/aninditapaul.personal"><FaFacebook/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer