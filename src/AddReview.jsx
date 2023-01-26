import React, { useState } from "react"

const AddReview = ({selectedRestaurant}) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    console.log(name)
    console.log(rating)
    console.log(review)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/restaurants/${selectedRestaurant.id}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify({
        reviews: [{
            customer: name,
            star_rating: rating,
            review: review
        }]
  }),
});
    }
    return (
        <div>
            <form onSubmit={(e) => handleOnSubmit(e)} action="submit" >
                <label htmlFor="name">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="rating">Rating</label>
                <input onChange={(e) => setRating(e.target.value)}  type="number" max={5} min={0}/>
                <label htmlFor="review">Review</label>
                <input onChange={(e) => setReview(e.target.value)} type="text" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddReview