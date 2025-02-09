import React, { useState } from "react";
import "./Events.css";

const Events = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [upcomingEvents, setUpcomingEvents] = useState([
    "Save our shores",
    "Sandy Hands",
  ]);
  const [eventName, setEventName] = useState("");

  const showLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName.trim()) {
      setUpcomingEvents([...upcomingEvents, eventName]);
      setEventName("");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h1>Be a Cleanup Leader</h1>
          <p>Turn the Tide – Host a Beach Cleanup in Your Community!</p>
        </div>

        <img
          className="banner"
          src="/api/placeholder/800/400"
          alt="beaches"
          useMap="#mymap"
        />

        <map name="mymap">
          <area shape="rect" coords="240,55,504,75" onClick={() => showLocation('Tiruvottiyu Beach')} />
          <area shape="rect" coords="230,114,473,135" onClick={() => showLocation('Kasimedu Beach')} />
          <area shape="rect" coords="214,153,506,174" onClick={() => showLocation('Marina Beach')} />
          <area shape="rect" coords="206,190,513,212" onClick={() => showLocation('Broken Beach')} />
          <area shape="rect" coords="197,213,481,253" onClick={() => showLocation('Elliot Beach')} />
          <area shape="rect" coords="190,283,513,303" onClick={() => showLocation('Thiruvalluvar Nagar Beach')} />
          <area shape="rect" coords="182,312,436,345" onClick={() => showLocation('VGP Golden Beach')} />
          <area shape="rect" coords="187,363,469,386" onClick={() => showLocation('Covelong Beach')} />
        </map>

        <p className="location-text">
          Click on the beach to select location: <strong>{selectedLocation}</strong>
        </p>

        <form onSubmit={handleSubmit} className="form">
          <h3>Enrollment form</h3>

          <div className="section">
            <h4>Organizer Contact Information</h4>
            <label>Organization or Individual:</label>
            <input type="radio" name="sel" /> Individual
            <input type="radio" name="sel" /> Organization

            <label>Name:</label>
            <input type="text" placeholder="Enter name..." />

            <label>Email:</label>
            <input type="text" placeholder="Enter email..." />

            <label>Phone:</label>
            <input type="text" placeholder="Enter phone no...." />
          </div>

          <div className="section">
            <h4>Other info</h4>
            <label>Event Name:</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter name..."
            />

            <label>Event Date:</label>
            <input type="date" />

            <label>Location:</label>
            <span>{selectedLocation}</span>

            <label>Timing:</label>
            <input type="text" />

            <label>Cleanup Goals:</label>
            <input type="checkbox" /> Plastic removal
            <input type="checkbox" /> Microplastic
            <input type="checkbox" /> Cans

            <label>Estimated Participants:</label>
            <input type="text" />

            <label>Supplies required:</label>
            <input type="checkbox" /> Boots
            <input type="checkbox" /> Gloves
            <input type="checkbox" /> Picker

            <label>Payment Method:</label>
            <input type="radio" name="pay" /> Creditcard
            <input type="radio" name="pay" /> PayPal
            <input type="radio" name="pay" /> Bank Transfer

            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>

      <div className="right">
        <p className="title">Start Your Cleanup Now</p>
        <div className="image-grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>

        <div className="events-section">
          <p className="title">Successful Events</p>
          <ul>
            <li>Wave Warriors</li>
            <li>Ocean Revival</li>
            <li>Blue Horizon</li>
            <li>Sea Guardian</li>
          </ul>
        </div>

        <div className="events-section">
          <p className="title">Upcoming Events</p>
          <ul>
            {upcomingEvents.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;
