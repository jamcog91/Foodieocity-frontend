import React, { useState } from "react";
import AddReview from "./AddReview";
import star from './assets/star.png'

const RestaurantPage = ({selectedRestaurant}) => {
    const [newReview, setNewReview] = useState([])
    
    

    const handleDeleteButton = (e, review) => {
        e.preventDefault()
        setNewReview(newReview.filter((r) => r.name !== review.name));
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((deletedReview) => console.log(deletedReview));
    }

    console.log(newReview)
    return (
        <div className="restaurant-page">
        <img className="storefront-img" src={selectedRestaurant.img_url} alt="pic" />
        <h1 className="restaurant-name">{selectedRestaurant.name}</h1>
        <div className="rating">{new Array(selectedRestaurant.reviews[0].star_rating).fill(undefined).map((img) => { return <img  className="star" src={star} alt="rating"></img>})}</div>
        <h3 className="address">Address: {selectedRestaurant.address}</h3>
        <h1>REVIEWS</h1>
        <AddReview selectedRestaurant={selectedRestaurant} newReview={newReview} setNewReview={setNewReview}/>
        {selectedRestaurant.reviews.map((review) => {
            return <div className="review">
                <h2 className="name">{review.customer.first_name + " " + review.customer.last_name}</h2>
                <div className="rating">{new Array(review.star_rating).fill(undefined).map((img) => { return <img  className="star" src={star} alt="rating"></img>})}</div>
                <p>{review.review}</p>
                <button onClick={(e) => handleDeleteButton(e, review)}>DELETE</button>
            </div>
        })}

         {newReview ? newReview.map((review) => {
             console.log(review.star_rating)
            return <div className="review">
                <h2 className="name">{review.name}</h2>
                <div className="rating">{new Array(review.star_rating).fill(undefined).map((img) => { return <img  className="star" src={star} alt="rating"></img>})}</div>
                <p>{review.review}</p>
                <button onClick={(e) => handleDeleteButton(e, review)}>DELETE</button>
            </div>
        }) : null}
        </div>
    )
}

export default RestaurantPage;