import React from 'react';
import { Link } from "react-router-dom";

// import { big_logo } from '../../../public/images/general/big_logo.png'
const Logo = () => {
    return (
        <Link to='/' className={'col logo-wrapper justify-content-start justify-content-sm-center'}>
            <img src="./images/general/big_logo.png" alt="sahar estate logo" className={'big-logo d-none d-sm-block'} />
            <img src="./images/general/small_logo.png" alt="sahar estate logo" className={'small-logo d-sm-none'} />
        </Link>
    );
};

export default Logo;