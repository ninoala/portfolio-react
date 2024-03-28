import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { Link } from 'react-router-dom' 

function PageContact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>
        I am currently seeking web development opportunities and open to
        full-time, part-time, contract, freelance, and internship positions.
      </p>
      <div className="contact-form-wrapper">
        <form className="contact-form">
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your message..." required></textarea>
          <input type="submit" className="send-btn" value="SEND" />
        </form>
      </div>
      <div className="map-wrap">
        <MapContainer center={[45.42007384204425, -75.69506871147215]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[45.42007384204425, -75.69506871147215]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>IM'HERE</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="contact-ctas">
        <Link to="/works" className="contacts-btn">
          View My Projects
        </Link>
        <Link to="/about" className="contacts-btn">
          About Me
        </Link>
      </div>
    </section>
  );
}

export default PageContact