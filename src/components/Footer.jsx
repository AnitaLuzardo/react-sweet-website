import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../stylesheets/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia"> 
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <p>Copy 2022 </p>
    </div>
  )
}
