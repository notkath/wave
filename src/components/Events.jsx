import { useState } from "react";
import "./Events.css"

const Organize = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [eventName, setEventName] = useState("");
  const [upcomingEvents, setUpcomingEvents] = useState([
    "Save our shores",
    "Sandy Hands",
  ]);

  const showLocation = (location) => {
    setSelectedLocation(location);
  };

  const addUpcomingEvent = (e) => {
    e.preventDefault();
    if (eventName.trim() !== "") {
      setUpcomingEvents([...upcomingEvents, eventName]);
      setEventName("");
    }
  };

  return (
    <div className="mainbody">
      <div className="nav">
        <div className="title">
          <br />
          <h1>Be a Cleanup Leader</h1>
        </div>
        <br />
        <p className="des">
          <i>Turn the Tide – Host a Beach Cleanup in Your Community!</i>
        </p>
        <br />
        <img
          className="beaches"
          useMap="#mymap"
          src="./src/assets/beaches.jpg"
          alt="beaches"
        />
        <br />
        <br />
        <map name="mymap">
          {[
            { name: "Tiruvottiyu Beach", coords: "240,55,504,75" },
            { name: "Kasimedu Beach", coords: "230,114,473,135" },
            { name: "Marina Beach", coords: "214,153,506,174" },
            { name: "Broken Beach", coords: "206,190,513,212" },
            { name: "Elliot Beach", coords: "197,213,481,253" },
            { name: "Thiruvalluvar Nagar Beach", coords: "190,283,513,303" },
            { name: "VGP Golden Beach", coords: "182,312,436,345" },
            { name: "Covelong Beach", coords: "187,363,469,386" },
          ].map((beach, index) => (
            <area
              key={index}
              shape="rect"
              coords={beach.coords}
              onClick={() => showLocation(beach.name)}
            />
          ))}
        </map>
        <p className="ooutput">
          Click on the beach to select location:{" "}
          <b>
            <span style={{ color: "rgb(4, 4, 22)" }}>{selectedLocation}</span>
          </b>
        </p>
        <br />
        <br />
        <fieldset>
          <legend>
            <h3>
              <i>Enrollment form</i>
            </h3>
          </legend>
          <h4>Organizer Contact Information</h4>
          <p>
            Organization or Individual:
            <input type="radio" name="sel" />
            Individual
            <input type="radio" name="sel" />
            Organization
          </p>
          <p>
            Name: <input type="text" placeholder="Enter name..." />
          </p>
          <p>
            Email: <input type="text" placeholder="Enter email..." />
          </p>
          <p>
            Phone: <input type="text" placeholder="Enter phone no...." />
          </p>
          <br />
          <h4>Other info</h4>
          <p>
            Event Name:{" "}
            <input
              type="text"
              placeholder="Enter name..."
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </p>
          <p>
            Event Date: <input type="date" />
          </p>
          <p>
            Location: <span>{selectedLocation}</span>
          </p>
          <p>
            Timing: <input type="text" />
          </p>
          <p>
            Cleanup Goals:
            <input type="checkbox" name="goal" />
            Plastic removal
            <input type="checkbox" name="goal" />
            Microplastic
            <input type="checkbox" name="goal" />
            Cans
          </p>
          <p>
            Estimated Participants: <input type="text" />
          </p>
          <p>
            Supplies required:
            <input type="checkbox" name="sup" />
            Boots
            <input type="checkbox" name="sup" />
            Gloves
            <input type="checkbox" name="sup" />
            Picker
          </p>
          <p>
            Payment Method:
            <input type="radio" name="pay" />
            Creditcard
            <input type="radio" name="pay" />
            PayPal
            <input type="radio" name="pay" />
            Bank Transfer
          </p>
          <p>
            <input type="submit" onClick={addUpcomingEvent} />
          </p>
        </fieldset>
        <br />
        <br />
      </div>
      <div className="aside">
        <br />
        <br />
        <p className="p2">Start Your Cleanup Now</p>
        <br />
        <div className="imgs">
          <div id="i1"></div>
          <div id="i2"></div>
          <div id="i3"></div>
        </div>
        <br />
        <br />
        <p className="p2">Successful Events</p>
        <br />
        <ul>
          <li>Wave Warriors</li>
          <li>Ocean Revival</li>
          <li>Blue Horizon</li>
          <li>Sea Guardian</li>
        </ul>
        <br />
        <p className="p2">Upcoming Events</p>
        <br />
        <ul>
          {upcomingEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
        <br />
      </div>
    </div>
  );
};

export default Organize;
