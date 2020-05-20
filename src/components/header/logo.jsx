import React from 'react';
import {Link} from "react-router-dom";

const Logo = props => {
    return (
    <div className={'col logo'}>
                    <Link to='/'>
                        LOGO
                        </Link>
                </div>
    );
};

export default Logo;