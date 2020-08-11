import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = (props) => {
    const { typeSection, navOpen, onNavClick, onNavOpen, onSelectAppartments, onSelectAccount, roleId } = props;
    console.log("role id: ", roleId)

    return (
        <div className="accordion sideNav" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            My Account
                        </button>
                        <button className="closeNav" onClick={onNavOpen}>close</button>
                    </h2>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            {roleId === 1 && "Appartments"}
                            {roleId === 2 && "My Appartments"}
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className={typeSection === "apartments" ? 'collapse show' : 'collapse'} aria-labelledby="headingTwo" data-parent="#accordionExample">
                    {roleId === 1 &&
                        <div className="card-body">
                            <button className="myBtn btn" type="button" data-title="All Appartment" data-status="" onClick={onSelectAppartments}>All Appartments</button>
                            <button className="myBtn btn" type="button" data-title="Panding For Approve" data-status="pending" onClick={onSelectAppartments}>Panding For Approve</button>
                            <button className="myBtn btn" type="button" data-title="Approved Appartments" data-status="approved" onClick={onSelectAppartments}>Removed</button>
                            <button className="myBtn btn" type="button" data-title="Approved Appartments" data-status="approved" onClick={onSelectAppartments}>Suspended</button>
                            <button className="myBtn btn" type="button" data-title="Approved Appartments" data-status="approved" onClick={onSelectAppartments}>Denined</button>
                        </div>
                    }
                    {roleId === 2 &&
                        <div className="card-body">
                            <button className="myBtn btn" type="button" data-title="All Appartment" data-status="" onClick={onSelectAppartments}>All Appartments</button>
                            <button className="myBtn btn" type="button" data-title="Approved Appartments" data-status="approved" onClick={onSelectAppartments}>Approved Appartments</button>
                            <button className="myBtn btn" type="button" data-title="Panding For Approve" data-status="pending" onClick={onSelectAppartments}>Panding For Approve</button>
                            <Link to='/addApartment'>
                                <button className="myBtn btn" type="button">Add Appartment</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            {roleId === 1 &&
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Users
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className={typeSection === "user" ? 'collapse show' : 'collapse'} aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            <button className="myBtn btn" type="button" data-title="All Appartment" data-status="" onClick={onSelectAppartments}>All Users</button>
                            <button className="myBtn btn" type="button" data-title="Panding For Approve" data-status="pending" onClick={onSelectAppartments}>Active Users</button>
                            <button className="myBtn btn" type="button" data-title="Approved Appartments" data-status="approved" onClick={onSelectAppartments}>Inactive Users</button>
                        </div>
                    </div>
                </div>
            }
            {roleId === 2 &&
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={onSelectAccount}>
                                Wish List
                            </button>
                        </h2>
                    </div>
                </div>
            }
        </div>
    );
}

export default SideNav;