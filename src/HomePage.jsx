import React from 'react';
import RestaurantCard from './RestaurantCard';
//import Header from './Header';

function HomePage({restaurants, setRestaurant}) {
    return (
    <div className='home-container'> {
    restaurants.map((restaurant) => {
    return <RestaurantCard key={restaurant.id} setRestaurant={setRestaurant} restaurant={restaurant} />
    })}</div>
)
}
export default HomePage

// <Header />