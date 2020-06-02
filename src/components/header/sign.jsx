import React, { useState } from 'react';
import { FaUserAstronaut, FaPhone, FaUserNinja } from 'react-icons/fa';
import { MdEmail, MdFingerprint, MdSend } from 'react-icons/md';

const Sign = props => {
    const [sign, setSign] = useState('signIn');
    return (
        <div className={'sign col'}>
            <ul className={'header-option-wrapper row'}>
                <li className={'col icon-astronaut d-sm-none'} data-toggle={"modal"} data-target={"#exampleModalCenter"}>
                    <FaUserAstronaut />
                </li>
                <li className={'header-option col-auto d-sm-block'} data-toggle={"modal"} data-target={"#exampleModalCenter"} onClick={() => setSign('signIn')}>
                    Sign In
                </li>
                <li className={'header-option col-auto d-sm-block'} data-toggle={"modal"} data-target={"#exampleModalCenter"} onClick={() => setSign('signUp')}>
                    Sign Up
                </li>
            </ul>

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
                                <div className='row'>
                                    <form className="col content">
                                        <div className="row">
                                            <div className="col">
                                                <MdEmail className={'icons'} />
                                                <input id="email" type="email" name='email' className="input" />
                                                {/* value={this.state.email} onChange={this.onInputChange}  */}
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div className="col">
                                                <MdFingerprint className={'icons'} />
                                                <input id="password" type="password" name='password' className="input" />
                                                {/* value={this.state.password} onChange={this.onInputChange}  */}
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        {/* {
                                        this.state.loginFaild &&
                                        <div>
                                            username or password incorrect
                                </div>
                                    } */}
                                    </form>
                                </div> :
                                <div className='row'>
                                    <form className="col content">
                                        <div className="row">
                                            <div className="col">
                                                <MdEmail className={'icons'} />
                                                <input id="email" type="email" name='email' className="input" />
                                                {/* value={this.state.email} onChange={this.onInputChange}  */}
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div className="col">
                                                <MdFingerprint className={'icons'} />
                                                <input id="password" type="password" name='password' className="input" />
                                                {/* value={this.state.password} onChange={this.onInputChange}  */}
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <FaUserNinja className={'icons'} />
                                                <input id="first_name" type="text" name='text' className="input" />
                                                {/* value={this.state.email} onChange={this.onInputChange}  */}
                                                <label htmlFor="first_name">First Name</label>
                                            </div>
                                            <div className="col">
                                                <FaUserNinja className={'icons'} />
                                                <input id="last_name" type="text" name='text' className="input" />
                                                {/* value={this.state.password} onChange={this.onInputChange}  */}
                                                <label htmlFor="last_name">Last Name</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <FaPhone className={'icons'} />
                                                <input id="phone" type="phone" name='phone' className="input" />
                                                {/* value={this.state.password} onChange={this.onInputChange}  */}
                                                <label htmlFor="phone">Phone</label>
                                            </div>
                                        </div>
                                        {/* {
                                        this.state.loginFaild &&
                                        <div>
                                            username or password incorrect
                                </div>
                                    } */}
                                    </form>
                                </div>
                            }
                            {/* <div className={'send-wrapper'}> */}
                            <MdSend className={'send'} /> {/* onClick={this.onInputSubmit} */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign;