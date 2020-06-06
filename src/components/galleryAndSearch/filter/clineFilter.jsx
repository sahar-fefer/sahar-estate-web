import React from 'react';
import { BsSearch } from 'react-icons/bs';

const ClineFilter = ({ cities, handleSubmit, handleInputChange, minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms }) => {
    return (
        <div>
            <form className="search-option form-inline row" >
                <label htmlFor="city">Cities:</label>
                <select className={"buttonStyle cities col-auto"} name="city" onChange={handleInputChange}>
                    <option name='placeholder' value={""}>Cities</option>
                    {
                        cities.length &&
                        cities.map((city, key) => (
                            <option value={city.name} key={key}>{city.name}</option>
                        ))
                    }
                </select>

                <label htmlFor="minPrice">Min Price:</label>
                <input className='col-auto' type="number" id="minPrice" name="minPrice" value={minPrice} onChange={handleInputChange} />
                {/* {minPrice && minPrice}
                </input> */}
                <span>$</span>

                <label htmlFor="maxPrice">Max Price:</label>
                <input className='col-auto' type="number" id="maxPrice" name="maxPrice" value={maxPrice} onChange={handleInputChange} />
                {/* {maxPrice && maxPrice}
                </input> */}
                <span>$</span>

                <label htmlFor="minBath">Min Bath:</label>
                <input className='col-auto' type="number" id="minBath" name="minBath" value={minBath} onChange={handleInputChange} />
                {/* {minBath && minBath}
                </input> */}

                <label htmlFor="maxBath">Max Bath:</label>
                <input className='col-auto' type="number" id="maxBath" name="maxBath" value={maxBath} onChange={handleInputChange} />
                {/* {maxBath && maxBath}
                </input> */}

                <label htmlFor="minRooms">Min Rooms:</label>
                <input className='col-auto' type="number" id="minRooms" name="minRooms" value={minRooms} onChange={handleInputChange} />
                {/* {minRooms && minRooms}
                </input> */}

                <label htmlFor="maxRooms">Max Rooms:</label>
                <input className='col-auto' type="number" id="maxRooms" name="maxRooms" value={maxRooms} onChange={handleInputChange} />
                {/* {maxRooms ? maxRooms : ''}
                </input> */}
                <button className="submitBtn buttonStyle search-button" onClick={handleSubmit}>
                    <BsSearch /></button>
            </form>
        </div>
    );
};

export default ClineFilter;