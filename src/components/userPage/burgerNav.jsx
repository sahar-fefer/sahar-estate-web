import React from 'react';

const BurgerNav = (props) => {
    const { onNavOpen } = props;
    console.log('burger on');
    return (
        <div className="burger-button" onClick={onNavOpen}>
            <div className="lineBurgerButton"></div>
            <div className="lineBurgerButton"></div>
            <div className="lineBurgerButton"></div>
        </div>
    );
}

export default BurgerNav;