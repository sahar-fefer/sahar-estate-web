import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { FaUserAstronaut, FaUserNinja } from 'react-icons/fa';
import { MdEmail, MdFingerprint, MdSend } from 'react-icons/md';

import { logIn, addUser } from '../../api/users';
import { Link } from 'react-router-dom';

const Sign = ({ userName }) => {
    const [sign, setSign] = useState('signIn');
    const [authenticated, setAuthenticated] = useState(true);
    const [signIn, setSignIn] = useState({
        email: 'elikBelik@bombombom.com',
        password: '1234'
    });
    const [signUp, setSignUp] = useState({
        email: 'elikBelik@bom.com',
        password: '1234',
        first_name: 'elik',
        last_name: 'belik',
        role_id: 2
    });

    const onSignIn = async (e) => {
        e.preventDefault();
        const { email, password } = signIn;
        const user = await logIn(email, password);
        console.log("user", user);
        if (user) {
            setAuthenticated(true);
        } else {
            console.log("uncorecct");
            setAuthenticated(false);
        }
        window.location.reload();
    }

    const onSignUp = async (e) => {
        e.preventDefault();
        const user = await addUser(signUp);
        console.log("user", user);
        if (user) {
            setAuthenticated(true);
        } else {
            console.log("uncorecct");
            setAuthenticated(false);
        }
    }

    const onInputChange = (e) => {
        sign === 'signIn'
            ? setSignIn({
                ...signIn,
                [e.target.name]: e.target.value
            })
            : setSignUp({
                ...signUp,
                [e.target.name]: e.target.value
            })
    }

    const signOut = () => {
        const cookie = Cookies.remove('auth');
        if (cookie) {
            console.log('log out user');
            const cookie = Cookies.get('auth');
            console.log(cookie);
            this.setState({
                user: null
            })
        }
        window.location.reload();
    }

    console.log('userName', userName);
    return (
        <div className={'sign col'}>
            {
                userName
                    ? < ul className={'header-option-wrapper row'}>
                        <li className={'col icon-astronaut d-sm-none'} data-toggle={"modal"} data-target={"#exampleModalCenter"}>
                            <FaUserAstronaut />
                        </li>
                        <li className={'bottom-line header-option sign-header-option col-auto d-sm-block pl-1 pr-1 ml-3 ml-3'}>
                            <Link to='/myaccount'>{userName}</Link>
                        </li>
                        <li className={'bottom-line header-option sign-header-option col-auto d-sm-block pl-1 pr-1 ml-3 ml-3'}
                            onClick={signOut}>
                            Sign Out
                    </li>
                    </ul>

                    : < ul className={'header-option-wrapper row'}>
                        <li className={'col icon-astronaut d-sm-none'} data-toggle={"modal"} data-target={"#exampleModalCenter"}>
                            <FaUserAstronaut />
                        </li>
                        <li className={'bottom-line header-option sign-header-option col-auto d-sm-block pl-1 pr-1 ml-3 ml-3'}
                            data-toggle={"modal"}
                            data-target={"#exampleModalCenter"}
                            onClick={() => setSign('signIn')}>
                            Sign In
                </li>
                        <li className={'bottom-line header-option sign-header-option col-auto d-sm-block pl-1 pr-1 ml-3 ml-3'}
                            data-toggle={"modal"}
                            data-target={"#exampleModalCenter"}
                            onClick={() => setSign('signUp')}>
                            Sign Up
                </li>
                    </ul>
            }
            {/* <!-- Modal --> */}
            <div className={"modal fade"} id={"exampleModalCenter"} tabIndex={"-1"} role={"dialog"} aria-labelledby={"exampleModalCenterTitle"} aria-hidden={"true"}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className={'sign-type-wrapper row'}>
                                <button className={`sign-type col-6 ${sign === 'signIn' && 'chosen'}`} onClick={() => setSign('signIn')}>Sign In</button>
                                <button className={`sign-type col-6 ${sign === 'signUp' && 'chosen'}`} onClick={() => setSign('signUp')}>Sign Up</button>
                            </div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {sign === 'signIn' ?
                                <div>
                                    <div className='row'>
                                        <form className="col content">
                                            <div className="row">
                                                <div className="col">
                                                    <MdEmail className={'icons'} />
                                                    <input id="email"
                                                        type="email"
                                                        name='email'
                                                        className="input"
                                                        value={signIn.email}
                                                        onChange={onInputChange} />
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                                <div className="col">
                                                    <MdFingerprint className={'icons'} />
                                                    <input id="password"
                                                        type="password"
                                                        name='password'
                                                        className="input"
                                                        value={signIn.password}
                                                        onChange={onInputChange} />
                                                    <label htmlFor="password">Password</label>
                                                </div>
                                            </div>
                                            {
                                                !authenticated &&
                                                <div>
                                                    username or password incorrect
                                            </div>
                                            }
                                        </form>
                                    </div>
                                    <MdSend className={'send'}
                                        onClick={onSignIn}
                                        data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </MdSend>
                                </div> :
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <FaUserNinja className={'icons'} />
                                            <input id="first_name"
                                                type="text"
                                                name='first_name'
                                                className="input"
                                                value={signUp.first_name}
                                                onChange={onInputChange} />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="col">
                                            <FaUserNinja className={'icons'} />
                                            <input id="last_name"
                                                type="text"
                                                name='last_name'
                                                className="input"
                                                value={signUp.last_name}
                                                onChange={onInputChange} />
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col">
                                            <MdEmail className={'icons'} />
                                            <input id="email"
                                                type="email"
                                                name='email'
                                                className="input"
                                                value={signUp.email}
                                                onChange={onInputChange} />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="col">
                                            <MdFingerprint className={'icons'} />
                                            <input id="password"
                                                type="password"
                                                name='password'
                                                className="input"
                                                value={signUp.password}
                                                onChange={onInputChange} />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <MdSend className={'send'}
                                        onClick={onSignUp}
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </MdSend>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sign;