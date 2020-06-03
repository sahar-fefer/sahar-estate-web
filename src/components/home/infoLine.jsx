import React from 'react';

const InfoLine = ({ info }) => {
    return (
        <div id="info-line">
            <div className="info-header">
                <h2>What's happening in Israel</h2>
            </div>
            <div className="numbers row">
                {
                    info.map((section, key) => {
                        return (
                            <div className="section perfect-center col-6 col-lg-auto" key={key}>
                                <div className="number">{section.number}</div>
                                <div className="description">{section.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InfoLine;