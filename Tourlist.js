// src/TourList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTours } from './Gallery';

const TourList = () => {
  const { tours, removeTour } = useTours();
  const [showMore, setShowMore] = useState({});

  const handleShowMoreToggle = (id) => {
    setShowMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (tours.length === 0) {
    return <p>No tours available</p>;
  }

  return (
    return (
        <div>
          <h1>Tour List</h1>
          <div className="tour-list">
            {tours.map((tour) => (
              <div key={tour.id} className="tour-item">
                <img src={tour.image} alt={tour.name} className="tour-image" />
                <div className="tour-details">
                  <h2>{tour.name}</h2>
                  <p>
                    {showMore[tour.id] ? tour.info : `${tour.info.substring(0, 100)}...`}
                    <button onClick={() => handleShowMoreToggle(tour.id)}>
                      {showMore[tour.id] ? 'Show Less' : 'Read More'}
                    </button>
                  </p>
                  <button onClick={() => removeTour(tour.id)}>Not Interested</button>
                  <Link to={`/tour/${tour.id}`}>View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default TourList;
