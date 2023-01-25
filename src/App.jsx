import React, { useEffect, useState } from 'react';
import CoverPage from './CoverPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './HomePage';



function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    let getRestaurants = async () => {
      const req = await fetch("http://localhost:9292/restaurants")
      const res = await req.json()
      setRestaurants(res)
    }
    

    getRestaurants()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CoverPage />
    },
    {
      path: "/restaurants",
      element: <HomePage setRestaurants={setRestaurants} restaurants={restaurants} />
    }
  ]);

  console.log(restaurants)

  return <RouterProvider router={router} />;
}

export default App;
