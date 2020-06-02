import React from 'react';

// My Components
import Options from './options';
import Logo from './logo';
import Sign from './sign';

const Header = props => {
    return (
        <div id={'header'} className={'container-fluid'}>
            <div className={'row'}>
                <Options />
                <Logo/>
                <Sign/>
            </div>
        </div>
    );
};

export default Header;