import React from 'react'
import '../App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { Link } from 'react-router-dom' 

function PageContact() {
  return (
    <div id="contact">
      <div className="contact-form-wrapper">
        <h1>Contact Me</h1>
        <p>I am currently seeking web development opportunities and open to full-time, part-time, contract, freelance, and internship positions.</p>
        <form className="contact-form">
          <ul>
            <li className="half">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Name" 
                required 
              />
            </li>
            <li className="half">
              <input 
                type="email" 
                name="user_email" 
                placeholder="Email" 
                required 
              />
            </li>
            <li>
              <input
                className='subject' 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required 
              />
            </li>
            <li>
              <textarea 
                name="message" 
                placeholder="Message" 
                required
              ></textarea>
            </li>
            <li>
              <input
                type="submit" 
                className="flat-button" 
                value="SEND" 
              />
            </li>
          </ul>
        </form>
      </div>
      <div className="map-wrap">
      <MapContainer center={[45.42007384204425, -75.69506871147215]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[45.42007384204425, -75.69506871147215]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
              <Popup>
                  IM'HERE
              </Popup>
          </Marker>
      </MapContainer>
      </div>
      <Link to="/works" className="projects-btn">View My Projects</Link>
      <Link to="/about" className="projects-btn">About Me</Link>
    </div>
  )
}

export default PageContact