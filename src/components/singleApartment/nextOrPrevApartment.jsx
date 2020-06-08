import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NextOrPrevApartment = ({ apartment, type }) => {
    const [showPrice, setShowPrice] = useState(false);
    return (
        <Link to={`/apartment/${apartment.id}`}>
            <div
                style={{
                    zIndex: 2,
                    left: type === 'prev' && 0,
                    right: type !== 'prev' && 0,
                    bottom: "5vh",
                    position: "fixed",
                    backgroundSize: "cover",
                    backgroundImage: `url(/${apartment.main_image})`
                }}>
                <div onMouseOver={() => {
                    setShowPrice(true)
                }} onMouseLeave={() => {
                    setShowPrice(false)
                }} className={"nextPrevApartmentPointer"}>
                    {type === "next"
                        ? <div><span>Next</span> <i className={"fa fa-chevron-right"} />{showPrice &&
                            <div>{apartment.price}</div>}</div>
                        : <div><i className={"fa fa-chevron-left"} /> <span>Prev</span> {showPrice &&
                            <div>{apartment.price}</div>} </div>}
                </div>
            </div>
        </Link>
    );
}

// static defaultProps = {
//     apartmentData: {}
// }
// };

export default NextOrPrevApartment;