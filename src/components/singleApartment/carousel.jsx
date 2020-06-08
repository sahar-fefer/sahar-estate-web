import React from 'react';
import FormApartment from "./formApartment";

const Carousel = ({ apartmentImages, apartmentData }) => {
    return (
        <div id={"carousel-and-form-wrapper"}>
            <div id="carousel-example-interval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {apartmentImages && apartmentImages.map((image, i) => {
                        return (
                            <div key={i}
                                className={i === 0 ? "responsive-carousel carousel-item active" : "responsive-carousel carousel-item"}
                                style={{ backgroundImage: `url(/${image})` }} alt="slider image">
                            </div>
                        )
                    })}
                </div>
                <a className="carousel-control-prev" href="#carousel-example-interval" role="button"
                    data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example-interval" role="button"
                    data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <FormApartment apartmentData={apartmentData}/>
        </div>
    );
};

export default Carousel;