import React, { useState } from 'react';
import './Events.css'

const Events = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [upcomingEvents, setUpcomingEvents] = useState(['Save our shores', 'Sandy Hands']);
  const [eventName, setEventName] = useState('');

  const showLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName.trim()) {
      setUpcomingEvents([...upcomingEvents, eventName]);
      setEventName('');
    }
  };

  return (
    <div className="flex flex-row w-full max-w-6xl mx-auto p-4">
      <div className="w-2/3 pr-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Be a Cleanup Leader</h1>
          <p className="text-xl italic">Turn the Tide – Host a Beach Cleanup in Your Community!</p>
        </div>

        <img 
          className="w-full mb-4" 
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

        <p className="mb-8">
          Click on the beach to select location: <strong>{selectedLocation}</strong>
        </p>

        <form onSubmit={handleSubmit} className="border rounded-lg p-6">
          <h3 className="text-2xl italic mb-6">Enrollment form</h3>

          <div className="mb-6">
            <h4 className="text-xl mb-4">Organizer Contact Information</h4>
            <div className="mb-4">
              <span className="mr-4">Organization or Individual:</span>
              <input type="radio" name="sel" className="mr-2" />Individual
              <input type="radio" name="sel" className="mx-2" />Organization
            </div>
            <div className="mb-4">
              <label className="mr-2">Name:</label>
              <input type="text" placeholder="Enter name..." className="border p-1" />
            </div>
            <div className="mb-4">
              <label className="mr-2">Email:</label>
              <input type="text" placeholder="Enter email..." className="border p-1" />
            </div>
            <div className="mb-4">
              <label className="mr-2">Phone:</label>
              <input type="text" placeholder="Enter phone no...." className="border p-1" />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl mb-4">Other info</h4>
            <div className="mb-4">
              <label className="mr-2">Event Name:</label>
              <input 
                type="text" 
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter name..." 
                className="border p-1" 
              />
            </div>
            <div className="mb-4">
              <label className="mr-2">Event Date:</label>
              <input type="date" className="border p-1" />
            </div>
            <div className="mb-4">
              <label className="mr-2">Location:</label>
              <span>{selectedLocation}</span>
            </div>
            <div className="mb-4">
              <label className="mr-2">Timing:</label>
              <input type="text" className="border p-1" />
            </div>
            <div className="mb-4">
              <span className="mr-2">Cleanup Goals:</span>
              <input type="checkbox" className="mx-2" />Plastic removal
              <input type="checkbox" className="mx-2" />Microplastic
              <input type="checkbox" className="mx-2" />Cans
            </div>
            <div className="mb-4">
              <label className="mr-2">Estimated Participants:</label>
              <input type="text" className="border p-1" />
            </div>
            <div className="mb-4">
              <span className="mr-2">Supplies required:</span>
              <input type="checkbox" className="mx-2" />Boots
              <input type="checkbox" className="mx-2" />Gloves
              <input type="checkbox" className="mx-2" />Picker
            </div>
            <div className="mb-4">
              <span className="mr-2">Payment Method:</span>
              <input type="radio" name="pay" className="mx-2" />Creditcard
              <input type="radio" name="pay" className="mx-2" />PayPal
              <input type="radio" name="pay" className="mx-2" />Bank Transfer
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-1/3 pl-4">
        <div className="text-center">
          <p className="text-2xl mb-6">Start Your Cleanup Now</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="h-24 bg-gray-200"></div>
            <div className="h-24 bg-gray-200"></div>
            <div className="h-24 bg-gray-200"></div>
          </div>

          <div className="mb-8">
            <p className="text-2xl mb-4">Successful Events</p>
            <ul className="list-disc pl-8">
              <li>Wave Warriors</li>
              <li>Ocean Revival</li>
              <li>Blue Horizon</li>
              <li>Sea Guardian</li>
            </ul>
          </div>

          <div>
            <p className="text-2xl mb-4">Upcoming Events</p>
            <ul className="list-disc pl-8">
              {upcomingEvents.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;