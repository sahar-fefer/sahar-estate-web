import React from 'react';

const InfoLine = ({ info }) => {
    return (
        <div id="info-line">
            <div className="info-header">
                <h2>What's happening in Israel</h2>
            </div>
            <div className="numbers row">
                {
                    info.map(section => {
                        return (
                            <div className="section perfect-center col-6 col-lg-auto">
                                <p><a href="" className="number">{section.number}</a></p>
                                <p><a href="" className="description">{section.description}</a></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InfoLine;