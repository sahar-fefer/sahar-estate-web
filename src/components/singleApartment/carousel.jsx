import React from 'react';

// import {serverURL} from '../../api/fetcher';
import FormApartment from "./formApartment";

class Carousel extends React.Component {
    render() {
        const { apartmentImages } = this.props;
        return (
            <div id={"carouselAndFormWrapper"}>
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {apartmentImages && apartmentImages.map((image, i) => {
                            // { image && console.log('apartmentImages[0]', image.url) }; !!!!!!!!!!
                            return (
                                <div key={i}
                                    className={i === 0 ? "responsive-carousel carousel-item active" : "responsive-carousel carousel-item"}
                                    style={{ backgroundImage: `url(/${image})` }} alt="slider image">
                                </div>
                            )
                        })}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button"
                        data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button"
                        data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <FormApartment />
            </div>
        );
    }
}

export default Carousel;