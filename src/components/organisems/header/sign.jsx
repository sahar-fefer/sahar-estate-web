import React from 'react';
import { Link } from "react-router-dom";
import { FaUserAstronaut } from 'react-icons/fa';

const Sign = props => {
    return (
        <div className={'col sign'}>
            <div className={'col icon d-sm-none'}>
                <FaUserAstronaut />
            </div>
            <ul className={'row d-sm-flex'}>
                <li className={'col-auto'}>
                    <Link to='/SignIn'>Sign In</Link>
                </li>
                <li className={'col-auto'}>
                    <Link to='/signUp'>Sign Up</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sign;