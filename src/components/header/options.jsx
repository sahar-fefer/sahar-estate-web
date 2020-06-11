import React from 'react';
import { Link } from "react-router-dom";

const Options = props => {
    return (
        <div className={'col options d-none d-sm-flex'}>
            <ul className={'row'}>
                <li className={'col'}>
                    <Link to='/rent'>Rent</Link>
                </li>
                <li className={'col'}>
                    <Link to='/buy'>Buy</Link>
                </li>
            </ul>
        </div>
    );
};

export default Options;