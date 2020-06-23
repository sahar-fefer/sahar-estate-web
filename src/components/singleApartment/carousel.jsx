import React from 'react';
import FormApartment from "./formApartment";

const Carousel = ({ apartmentImages, apartmentData, apartmentCity }) => {
    // console.log('apartmentData.created_in', apartmentData.created_in);
    // console.log('apartmentImages', apartmentImages);
    // console.log('apartmentCityCarosel', apartmentCity);
    // const created_in = apartmentData ? apartmentData.created_in : '';
    // const created_in_date = created_in.substring(0, 11);
    // console.log('created_in', created_in);
    // console.log('typeof(created_in)', typeof(created_in));
    // console.log('created_in_date', created_in_date);
    return (
        <div id={"carousel-and-form-wrapper"}>
            {apartmentImages.length ?
                <div id="carousel-example-interval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {
                            apartmentData.created_in &&
                            <h5 className={"left-top"}>{apartmentData.created_in.substring(0, 10)}</h5>
                        }
                        {
                            apartmentCity &&
                            <h4 className={"right-top"}>{`${apartmentCity.name}`}</h4>
                        }
                        {
                            apartmentData.sale_status &&
                            <h4 className={'left-bottom'}>{apartmentData.sale_status && `For ${apartmentData.sale_status === 'rent' ? 'Rent' : 'Sale'}`}</h4>
                        }
                        {apartmentImages.map((image, i) => {
                            return (
                                <div key={i}
                                    className={i === 0 ? "responsive-carousel carousel-item active" : "responsive-carousel carousel-item"}
                                    style={{ backgroundImage: `url(/${image.url})` }} alt="slider image">
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
                : <div className={'wrapperNoneImage'}>
                    {
                        apartmentData.created_in &&
                        <h5 className={"left-top"}>{apartmentData.created_in.substring(0, 10)}</h5>
                    }
                    {
                        apartmentCity &&
                        <h4 className={"right-top"}>{`${apartmentCity.name}`}</h4>
                    }
                    {
                        apartmentData.sale_status &&
                        <h4 className={'left-bottom'}>{apartmentData.sale_status && `For ${apartmentData.sale_status === 'rent' ? 'Rent' : 'Sale'}`}</h4>
                    }
                    <div
                        className={"noneImage"}
                        style={{ backgroundImage: `url(/images/general/mainPlaceholder.png)` }} alt="slider image">
                    </div>
                </div>
            }
            <FormApartment address={apartmentData.address} />
        </div>
    );
};

export default Carousel;