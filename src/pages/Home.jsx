import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from "../images/bannerImg.jpg"
import "../stylesheets/Home.css"

function Home() {
  return (
	<div className="home" style={{backgroundImage: `url(${BannerImage})` }}>
		<div className="headerContainer" >
			<h1>Sweet OOH!</h1>
			<p>Sweet tentations</p>
			<Link to="/menu">
				<button>Order now</button>
			</Link>
		</div>
	</div>
	
  )
}

export default Home