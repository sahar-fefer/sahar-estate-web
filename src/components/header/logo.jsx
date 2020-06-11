import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className={'col logo-wrapper justify-content-start justify-content-sm-center'}>
            <Link to='/'>
                <div className={'border-logo'}>
                    <span className={'logo'}>
                        Sahar Estate
                </span>
                </div>
            </Link>
        </div>
    );
};

export default Logo;