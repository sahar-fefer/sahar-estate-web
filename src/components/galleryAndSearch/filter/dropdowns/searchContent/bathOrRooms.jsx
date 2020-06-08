import React from 'react';

const BathOrRooms = ({ handleInputChange, minBath, maxBath, minRooms, maxRooms, type }) => {
    return (
        <div className="wrapper row">
            <select className={"buttonInputStyle col-auto"} name={`min${type}`} onClick={handleInputChange}>
                <option value={''} disabled selected hidden>From</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <span className='mt-auto mb-auto'>-</span>
            <select className={"buttonInputStyle col-auto"} name={`max${type}`} onClick={handleInputChange}>
                <option value={''} disabled selected hidden>To</option>
                {/* {type === 'Bath' ? maxBath : maxRooms} */}
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    );
};
export default BathOrRooms;