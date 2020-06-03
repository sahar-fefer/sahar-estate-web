let apartments = [
    {
        id: 1,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 2,
        userId: 3,
        address: '330 3rd Ave',
        cityId: 2,
        price: "34336",
        number_of_rooms: 2,
        number_of_bath: 1,
        sqft: 500,
        created_on: '2020-01-09 21:24:03',
        for_rent: true, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_2.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 3,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 4,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 5,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 6,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 7,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 8,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'removed',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 9,
        userId: 2,
        address: '330 3rd Ave',
        cityId: 1,
        price: "6336",
        number_of_rooms: 5,
        number_of_bath: 2,
        sqft: 900,
        created_on: '2020-01-09 21:24:03',
        for_rent: true, //not exsist in db (sale status)
        for_sale: false, //not exsist in db (sale status)
        availability: 'suspended',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 10,
        userId: 4,
        address: '330 3rd Ave',
        cityId: 2,
        price: "34336",
        number_of_rooms: 2,
        number_of_bath: 1,
        sqft: 500,
        created_on: '2020-01-09 21:24:03',
        for_rent: true, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'sold', //not exsist in db
        property_type: 'ranch',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_2.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 11,
        userId: 5,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'house',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 12,
        userId: 6,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 13,
        userId: 1,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 14,
        userId: 7,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 15,
        userId: 8,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 16,
        userId: 9,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },{
        id: 17,
        userId: 9,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 18,
        userId: 4,
        address: '330 3rd Ave',
        cityId: 2,
        price: "34336",
        number_of_rooms: 2,
        number_of_bath: 1,
        sqft: 500,
        created_on: '2020-01-09 21:24:03',
        for_rent: true, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_2.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 19,
        userId: 7,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    },
    {
        id: 20,
        userId: 5,
        address: '330 3rd Ave',
        cityId: 2,
        price: "21336",
        number_of_rooms: 4,
        number_of_bath: 3,
        sqft: 7500,
        created_on: '2020-01-09 21:24:03',
        for_rent: false, //not exsist in db (sale status)
        for_sale: true, //not exsist in db (sale status)
        availability: 'available',
        property_type: 'condo',
        description: 'My apartment description', //not exsist in db
        main_image: "images/apartment/apartment_1.jpg",
        images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"]
    }];
export {apartments}