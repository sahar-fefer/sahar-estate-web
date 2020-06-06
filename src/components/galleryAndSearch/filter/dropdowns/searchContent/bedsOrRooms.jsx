import React from 'react';

const BedsOrRooms = ({ handleInputChange, minBath, maxBath, minRooms, maxRooms, type }) => {
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


{/* <select className={"buttonInputStyle col-5"} name={`min${type}`} onClick={handleInputChange}>
<option value={0} name={`min${type}`} onClick={handleInputChange}>From</option>
<option>Studio</option>
<option value={1} name={`min${type}`} onClick={handleInputChange}>1</option>
<option value={2} name={`min${type}`} onClick={handleInputChange}>2</option>
<option value={3} name={`min${type}`} onClick={handleInputChange}>3</option>
<option value={4} name={`min${type}`} onClick={handleInputChange}>4</option>
<option value={5} name={`min${type}`} onClick={handleInputChange}>5</option>
</select>
<span>-</span>
<select className={"buttonInputStyle col-5"} name={`max${type}`} onClick={handleInputChange}>
<option>To</option>
<option value={1} name={`max${type}`}>1</option>
<option value={2} name={`max${type}`}>2</option>
<option value={3} name={`max${type}`}>3</option>
<option value={4} name={`max${type}`}>4</option>
<option value={5} name={`max${type}`}>5</option>
</select> */}

export default BedsOrRooms;