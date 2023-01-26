import React from "react";
import AddReview from "./AddReview";
import star from './assets/star.png'

const RestaurantPage = ({selectedRestaurant}) => {
    console.log(selectedRestaurant)
    return (
        <div className="restaurant-page">
        <img className="storefront-img" src={selectedRestaurant.img_url} alt="pic" />
        <h1 className="restaurant-name">{selectedRestaurant.name}</h1>
        <div className="rating">{new Array(selectedRestaurant.reviews[0].star_rating).fill(undefined).map((img) => { return <img  className="star" src={star} alt="rating"></img>})}</div>
        <h3 className="address">Address: {selectedRestaurant.address}</h3>
        <h1>REVIEWS</h1>
        <AddReview selectedRestaurant={selectedRestaurant}/>
        {selectedRestaurant.reviews.map((review) => {
            return <div className="review">
                <h2 className="name">{review.customer.first_name + " " + review.customer.last_name}</h2>
                <div className="rating">{new Array(review.star_rating).fill(undefined).map((img) => { return <img  className="star" src={star} alt="rating"></img>})}</div>
                <p>{review.review}</p>
            </div>
        })}
        </div>
    )
}

export default RestaurantPage;