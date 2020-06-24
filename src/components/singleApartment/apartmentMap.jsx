import React from 'react';

function ApartmentMap() {
    return (
        <div className={"map-apartment container col d-md-block d-none"}>
            <div id="map-container-google-1" className="z-depth-1-half map-container">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        title="map of the real estate erea"
                        style={{border: 0}} allowFullScreen/>
            </div>
        </div>
    );
}

export default ApartmentMap;