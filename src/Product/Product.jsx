import React from 'react';
import { StarRating } from 'react-star-rating-element';

function Product({item}) {
    return (
        <>
            <div class="col-lg-3 mb-2">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/id/1/200/100" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-danger">Book tickets</a>
                    </div>
                </div>
            </div>


        </>


    )
}

export default Product