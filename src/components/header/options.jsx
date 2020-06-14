import React from 'react';
import { Link } from "react-router-dom";

const Options = () => {
    return (
        <div className={'col options d-none d-sm-flex'}>
            <ul className={'row'}>
                <li className={'col'}>
                    <Link
                        to={{
                            pathname: "/gallery",
                            state: {
                                saleStatus: 'sale',
                                selectedCityId: ''
                            }
                        }}>
                        Buy
                      </Link>
                </li>
                <li className={'col'}>
                    <Link
                        to={{
                            pathname: "/gallery",
                            state: {
                                saleStatus: 'rent',
                                selectedCityId: ''
                            }
                        }}>
                        Rent
                      </Link>
                </li>
            </ul>
        </div>
    );
};

export default Options;