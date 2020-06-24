import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Options = () => {
    const [selected, setSelected] = useState('');
    return (
        <div className={'col options d-none d-sm-flex'}>
            <ul className={'row'}>
                <li className={`col bottom-line ${selected === 'sale' && 'bottom-line-chosed'} pl-1 pr-1 ml-2 mr-2`}
                    onClick={() => setSelected('sale')}>
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
                <li className={`col bottom-line ${selected === 'rent' && 'bottom-line-chosed'} pl-1 pr-1 ml-2 mr-2`}
                    onClick={() => setSelected('rent')}>
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