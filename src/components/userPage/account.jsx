import React, { Component, useEffect, useState } from 'react';
import { getUserById } from '../../api/users';

class Account extends Component {
    constructor(props) {
        super(props);
        console.log("user props", this.props.user);
        this.state = {
            user: this.props.user,
            update: false
        }
    }

    editAccount = () => {
        this.setState({
            update: !this.state.update
        })
    }

    onSubmit = () => {
        this.setState({
            update: false
        })
    }

    passwordHashed = () => {
        let passwordHashed = '';
        for (let i = 0; i < this.state.user.password.length; i++) {
            passwordHashed = passwordHashed + '*'
        }
        return passwordHashed;
    }

    render() {
        const { user, update } = this.state;
        const { first_name, last_name, email, password } = user;
        const { editAccount, passwordHashed } = this;
        return (
            <div>
                {update ?
                    <form className="ml-3">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputFirstName">First Name</label>
                                <input type="text" className="form-control" id="inputFirstName" value={first_name} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputLastName">Last Name</label>
                                <input type="text" className="form-control" id="inputLastName" value={last_name} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" value={email} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword">Password</label>
                                <input type="password" className="form-control" id="inputPassword" value={password} /> {/*pattern="[0-9]{3}-[0-9]{7}"*/}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Updateּ</button>
                    </form> :
                    <div className="ml-3">
                        <div className="row">
                            <div className="mb-2 col-md-6">First Name: {first_name}</div>
                            <div className="mb-2 col-md-6">Last Name: {last_name}</div>
                        </div>
                        <div className="row">
                            <div className="mb-2 col-md-6">Email: {email}</div>
                            <div className="mb-2 col-md-6">Password: {passwordHashed()}</div>
                        </div>
                    </div>
                }
                <button className="mt-2 ml-3 btn btn-info" onClick={editAccount}>{update ? "See Account" : "Edit Account"}</button>
            </div>
        );
    }
}

export default Account;

// const Account = ({ propUser }) => {
//     [user, setUser] = useState({});
//     [update, setUpdate] = useState(false);

//     useEffect = ({
//         setUser(propUser);
//     }, [])

//     const editAccount = () => {
//         setUpdate(!update);
//     }

//     // const onSubmit = () => {
//     //     setUpdate(false);
//     // }

//     const { first_name, last_name, email, phone } = user;
//     return (
//         <div>
//             {update ?
//                 <form className="ml-3">
//                     <div className="form-row">
//                         <div className="form-group col-md-6">
//                             <label for="inputFirstName">First Name</label>
//                             <input type="text" className="form-control" id="inputFirstName" value={first_name} />
//                         </div>
//                         <div className="form-group col-md-6">
//                             <label for="inputLastName">Last Name</label>
//                             <input type="text" className="form-control" id="inputLastName" value={last_name} />
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="form-group col-md-6">
//                             <label for="inputEmail4">Email</label>
//                             <input type="email" className="form-control" id="inputEmail4" value={email} />
//                         </div>
//                         <div className="form-group col-md-6">
//                             <label for="inputPhone">Phone</label>
//                             <input type="tel" className="form-control" id="inputPhone" value={phone} /> {/*pattern="[0-9]{3}-[0-9]{7}"*/}
//                         </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Updateּ</button>
//                 </form> :
//                 <div className="ml-3">
//                     <div className="row">
//                         <div className="mb-2 col-md-6">First Name: {first_name}</div>
//                         <div className="mb-2 col-md-6">Last Name: {last_name}</div>
//                     </div>
//                     <div className="row">
//                         <div className="mb-2 col-md-6">Email: {email}</div>
//                         <div className="mb-2 col-md-6">Phone: {phone}</div>
//                     </div>
//                 </div>
//             }
//             <button className="mt-2 ml-3 btn btn-info" onClick={editAccount}>{update ? "See Account" : "Edit Account"}</button>
//         </div>
//     );
// }

// export default Account;