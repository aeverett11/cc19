// src/Gallery.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import TourList from './TourList';
import TourDetail from './TourDetail';

const TourContext = createContext();

export const useTours = () => {
  return useContext(TourContext);
};

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('https://course-api.com/react-tours-project');
        setTours(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <TourContext.Provider value={{ tours, setTours, removeTour }}>
      <Router>
        <Switch>
          <Route exact path="/" component={TourList} />
          <Route path="/tour/:id" component={TourDetail} />
        </Switch>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </Router>
    </TourContext.Provider>
  );
};

export default Gallery;
