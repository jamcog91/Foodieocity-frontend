import React, { useEffect, useState } from 'react';
import CoverPage from './CoverPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './HomePage';
import RestaurantPage from './RestaurantPage';



function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setRestaurant] = useState([])

  useEffect(() => {
    let getRestaurants = async () => {
      const req = await fetch("http://localhost:9292/restaurants")
      const res = await req.json()
      setRestaurants(res)
    }
    

    getRestaurants()
  }, [])

  console.log(restaurants)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CoverPage />
    },
    {
      path: "/restaurants",
      element: <HomePage setRestaurant={setRestaurant}  restaurants={restaurants}  />
    },
    {
      path: "/restaurants/:id",
      element: <RestaurantPage selectedRestaurant={selectedRestaurant} />
    }

  ]);

  console.log(restaurants)

  return <RouterProvider router={router} />;
}

export default App;
