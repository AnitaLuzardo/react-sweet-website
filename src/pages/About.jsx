import React from 'react'
import Cake from "../images/cookieChoco.jpg"
import '../stylesheets/About.css'

export default function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${Cake})` }}>
				</div>
				<div className="aboutBottom">
					<h1>Nosotros</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Non accusantium suscipit dolore officiis fugiat unde cumque vitae,  
						cum est blanditiis debitis atque accusamus error, 
						pariatur nostrum dolor ipsam fugit excepturi tenetur! 
						Sed earum ratione magni odio, necessitatibus itaque! 
						Cum minus repellat obcaecati tenetur, aperiam nihil sed laboriosam 
						tempora aliquam a?</p>
				</div>
    </div>
  )
}
