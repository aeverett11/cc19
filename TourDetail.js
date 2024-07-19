// src/TourDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTours } from './Gallery';

const TourDetail = () => {
  const { id } = useParams();
  const { tours } = useTours();
  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="container">
      <h1>{tour.name}</h1>
      <img src={tour.image} alt={tour.name} className="tour-image" />
      <p>{tour.info}</p>
    </div>
  );
};

export default TourDetail;
