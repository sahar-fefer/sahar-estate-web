import React from 'react';
import { Link } from 'react-router-dom';

const InfoLine = ({ info }) => {
    return (
        <div id="info-line">
            <div className="info-header">
                <h2>What's happening in Sahar Estate</h2>
            </div>
            <div className="numbers row">
                {
                    info.map((section, key) => {
                        return (
                            <Link className="section perfect-center col-6 col-lg-auto" key={key} to={{
                                pathname: '/gallery',
                                state: {
                                    saleStatus: section.type
                                }
                            }}>
                                <div className="number">{section.number}</div>
                                <div className="description">{section.description}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InfoLine;