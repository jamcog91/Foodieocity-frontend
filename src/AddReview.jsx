import React, { useState } from "react"

const AddReview = ({selectedRestaurant, setNewReview, newReview}) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setNewReview([...newReview, {name: name, star_rating: rating, review: review}])
        fetch(`http://localhost:9292/reviews`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify({  
            star_rating: rating,
            review: review,
            restaurant_id: selectedRestaurant.id
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