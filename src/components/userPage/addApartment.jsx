import React from 'react';

import { addApartment } from '../../api/apartments';
import { getCities } from '../../api/cities';

class AddApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            user_id: -1,
            cities: [],
            city_id: '',
            address: '',
            price: '',
            number_of_rooms: '',
            number_of_baths: '',
            sqft: '',
            description: '',
            sale_status: '',
            property_type: '',
            main_image: '',
            errCity: false,
            errAddress: false,
            erPrice: false,
            errNumOfRoom: false,
            errNumOfBath: false,
            errSaleStatus: false,
            errPropertyType: false,
            errors: ''
        }
        console.log('user_id', this.props.userId);
    }

    async componentDidMount() {
        const cities = await getCities();
        this.setState({
            user_id: this.props.userId,
            cities: cities
        })
    }

    addNewApartmentClick = () => {
        this.setState({
            success: false,
            city_id: '',
            address: '',
            price: '',
            number_of_rooms: '',
            number_of_baths: '',
            sqft: '',
            description: '',
            sale_status: '',
            property_type: '',
            main_image: '',
            errCity: false,
            errAddress: false,
            erPrice: false,
            errNumOfRoom: false,
            errNumOfBath: false,
            errSaleStatus: false,
            errPropertyType: false,
            errors: ''
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        console.log('name', name);
        console.log('value', value);
    }

    handleFilesChange = (e) => {
        const { name, files } = e.target;
        this.setState({
            // [name]: files[0]
            [name]: files
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { user_id, city_id, address, price, number_of_rooms, number_of_baths, sqft, sale_status, property_type, main_image, description } = this.state;
        let formData = new FormData();
        formData.append('user_id', user_id)
        // formData.append('city_id', city_id)
        // formData.append('address', address)
        // formData.append('price', price)
        // formData.append('number_of_rooms', number_of_rooms)
        // formData.append('number_of_baths', number_of_baths)
        // formData.append('sale_status', sale_status)
        // formData.append('property_type', property_type)
        formData.append('city_id', '1102079')
        formData.append('address', 'oren 12')
        formData.append('price', '1234')
        formData.append('number_of_rooms', '7')
        formData.append('number_of_baths', '3')
        formData.append('sale_status', 'rent')
        formData.append('property_type', 'house')
        {
            description && formData.append('description', description)
        }
        {
            main_image && formData.append('main_image', main_image[0])
        }
        {
            sqft && formData.append('sqft', sqft)
        }
        console.log('user_id', user_id);
        console.log('city_id', city_id);
        console.log('address', address);
        console.log('price', price);
        console.log('number_of_rooms', number_of_rooms);
        console.log('number_of_baths', number_of_baths);
        console.log('sqft', sqft);
        console.log('sale_status', sale_status);
        console.log('property_type', property_type);
        console.log('main_image', main_image[0]);
        console.log('formData', formData);
        try {
            const result = await addApartment(formData);
            if (result.id) {
                this.setState({
                    success: true
                })
            }
            else if (result.errors) {
                this.setState({
                    errors: result.errors
                });
            }
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        const { success, cities, city_id, address, price, number_of_rooms, number_of_baths, sqft, description, sale_status, property_type, main_image } = this.state;
        // console.log('city', city);
        // console.log('address', address);
        // console.log('price', price);
        // console.log('number_of_rooms', number_of_rooms);
        // console.log('number_of_baths', number_of_baths);
        // console.log('sqft', sqft);
        // console.log('sale_status', sale_status);
        // console.log('property_type', property_type);
        // console.log('main_image', main_image[0]);
        return (
            <div id={"formAddApartment"}>
                {
                    success ?
                        <div className={'container'}>
                            <h2 className={"mt-3"}>Apartment Added</h2>
                            <h4 className={"mt-3"}>your apartment sended to the admin and waitimg to approve</h4>
                            <button className={'btn btn-info mt-2'} onClick={this.addNewApartmentClick}>add new apartment</button>
                        </div>
                        :
                        <div className={'container'}>
                            <h4 className={"mt-3"}>Add New Apartment</h4>
                            <form className={'mt-4 mb-4'}
                                onSubmit={this.onSubmit}>
                                <div class="form-row">
                                    <div class="form-group col-md">
                                        <label for="inputState"><span className={`text-info`}>* </span>City</label>
                                        <select id="inputState" name='city_id' value={city_id} class="form-control" onChange={this.handleInputChange}>
                                            <option value={""} disabled hidden>Cities</option>
                                            {
                                                cities.length &&
                                                cities.map((city, key) => (
                                                    <option value={city.id} key={key} selected={parseInt(city_id) === parseInt(city.id)}>{city.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div class="form-group col-md">
                                        <label for="inputPrice"><span className={`text-info`}>* </span>Price</label>
                                        <input type="number" name='price' min={0} value={price} class="form-control" id="inputPrice" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress"><span className={`text-info`}>* </span>Address</label>
                                    <input type="text" name='address' value={address} class="form-control" id="inputAddress" placeholder="1234 Main Street" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md">
                                        <label for="inputSqft">Sqft</label>
                                        <input type="number" name='sqft' min={0} value={sqft} class="form-control" id="inputSqft" onChange={this.handleInputChange} />
                                    </div>
                                    <div class="form-group col-md">
                                        <label for="inputNumberRooms"><span className={`text-info`}>* </span>Number Of Rooms</label>
                                        <input type="number" name='number_of_rooms' min={0} value={number_of_rooms} class="form-control" id="inputNumberRooms" onChange={this.handleInputChange} />
                                    </div>
                                    <div class="form-group col-md">
                                        <label for="inputNumberBath"><span className={`text-info`}>* </span>Number Of Baths</label>
                                        <input type="number" name='number_of_baths' min={0} value={number_of_baths} class="form-control" id="inputNumberBath" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md">
                                        <label for="textareaDescription">Description</label>
                                        <textarea class="form-control" name='description' value={description} id="textareaDescription" rows="3" onChange={this.handleInputChange}></textarea>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md">
                                        <label for="selectSaleStatus"><span className={`text-info`}>* </span>Sale Status</label>
                                        <select class="form-control" name='sale_status' value={sale_status} id="selectSaleStatus" onChange={this.handleInputChange}>
                                            <option value={""} disabled hidden>Sale Status</option>
                                            <option value={"sale"}>Sale</option>
                                            <option value={"rent"}>Rent</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md">
                                        <label for="selectPropertyType"><span className={`text-info`}>* </span>Property Type</label>
                                        <select class="form-control" name='property_type' value={property_type} id="selectPropertyType" onChange={this.handleInputChange}>
                                            <option value={""} disabled hidden>Property Type</option>
                                            <option value={"house"}>House</option>
                                            <option value={"ranch"}>Ranch</option>
                                            <option value={"condo"}>Condo</option>
                                            <option value={"land"}>Land</option>
                                        </select>
                                    </div>
                                    <div class="ml-auto form-group col-md-auto">
                                        <label for="addImagesFile">Add Images</label>
                                        <input type="file" name='main_image' class="form-control-file" id="addImagesFile" onChange={this.handleFilesChange} />
                                    </div>
                                </div>
                                <div className="text-danger">
                                    <ol>
                                        {this.state.errors && this.state.errors.split(',').map(
                                            err => <li>{err}</li>
                                        )}
                                    </ol>
                                </div>
                                <button type="submit" class="btn btn-primary">Add Apartment</button>
                            </form>
                        </div>
                }
            </div>
        );
    }
}

export default AddApartment;