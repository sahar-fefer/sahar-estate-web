import React from 'react';

// My Components
import Options from './options';
import Logo from './logo';
import Sign from './sign';
import Hello from './hello';

// const Header = () => {
//     return (
//         <div id={'header'} className={'container-fluid'}>
//             <div className={'row'}>
//                 <Options />
//                 <Logo />
//                 <Sign />
//             </div>
//         </div>
//     );
// };

const Header = ({ userName }) => {
    console.log('userName', userName);
    return (
        <div id={'header'} className={'container-fluid'}>
            <div className={'row'}>
                <Options />
                <Logo />
                <Sign  userName={userName}/>
            </div>
        </div>
    );
};

export default Header;