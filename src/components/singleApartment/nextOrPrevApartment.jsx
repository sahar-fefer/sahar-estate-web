import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apartments } from '../../app-data/apartment-data';

const NextOrPrevApartment = ({ apartment, type, items }) => {
    const [showPrice, setShowPrice] = useState(false);
    // console.log('items next prev', items);
    // console.log('apartment next prev', apartment);
    return (
        // <Link to={`/apartment/${apartment.id}`} className={'d-none d-sm-block'}>
        <Link to={{
            pathname: `/apartment/${apartment.id}`,
            state: {
                items
            }
        }} className={'d-none d-sm-block'}>
            {
                items.length &&
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
                <div
                    onMouseOver={() => { setShowPrice(true) }}
                    onMouseLeave={() => { setShowPrice(false) }}
                    className={"nextPrevApartmentPointer"}>
                    {type === "next"
                        ? <div>
                            <span>Next</span>
                            <i className={"fa fa-chevron-right"} />
                            {showPrice && <div>{apartment.price}</div>}
                        </div>
                        : <div>
                            <i className={"fa fa-chevron-left"} />
                            <span>Prev</span>
                            {showPrice && <div>{apartment.price}</div>}
                        </div>
                    }
                </div>
            </div>
            }
        </Link>
    );
}

export default NextOrPrevApartment;