import React from 'react';
import { BsSearch } from 'react-icons/bs';

const ClineFilter = ({ minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms }) => {
    return (
        <div>
            <form className="search-option form-inline">
                <label for="tentacles">Min Price:</label>
                <input type="number" id="tentacles" name="tentacles" min="10" max="100" />
                <span>$</span>

                <label for="tentacles">Max Price:</label>
                <input type="number" id="tentacles" name="tentacles" min="10" max="100" />
                <span>$</span>

                <label for="tentacles">Min Bath:</label>
                <input type="number" id="tentacles" name="tentacles" min="10" max="100" />

                <label for="tentacles">Max Bath:</label>
                <input type="number" id="tentacles" name="tentacles" min="10" max="100" />

                <label for="tentacles">Min Rooms:</label>
                <input type="number" id="tentacles" name="tentacles" min="10" max="100" />

                <label for="tentacles">Max Rooms:</label>
                <input type="number" id="tentacles" name="tentacles" min="10" max="100" />
                <button className="submitBtn buttonStyle search-button">
                    <BsSearch /></button>
            </form>
        </div>
    );
};

export default ClineFilter;