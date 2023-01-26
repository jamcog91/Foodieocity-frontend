import React from "react"
import { useNavigate } from "react-router-dom"
import star from './assets/star.png'

const RestaurantCard = ({restaurant, setRestaurant}) => {
    
    const navigate = useNavigate()
    const openRestaurantPage = () => {
    navigate(`/restaurants/${restaurant.id}`)
    setRestaurant(restaurant)
    }
    
    return (
        <div onClick={() => openRestaurantPage()} className="restaurant-card">
            <img className="storefront-img" src={restaurant.img_url} alt="pic" />
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <h3 className="rating">{new Array(restaurant.reviews[0].star_rating).fill(undefined).map((img) => { return <img  className="star" src={star} alt="rating"></img>})}</h3>
        </div>
    )
}

export default RestaurantCard


  
