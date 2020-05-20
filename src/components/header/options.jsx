import React from 'react';
import { Link } from "react-router-dom";

import Burger from './burger';

const Options = props => {
    return (
        <div className={'col options'}>
            <Burger/>
            <div className={'d-none d-sm-flex'}>
                <ul className={'row'}>
                    <li className={'col'}>
                        <Link to='/rent'>Rent</Link>
                    </li>
                    <li className={'col'}>
                        <Link to='/buy'>Buy</Link>
                    </li>
                    <li className={'col'}>
                        <Link to='/sell'>Sell</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Options;