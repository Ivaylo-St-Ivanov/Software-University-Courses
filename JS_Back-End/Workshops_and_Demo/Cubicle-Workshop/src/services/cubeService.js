const data = [
    {
        "id": "asdf000001",
        "name": "Gan356 Air SM",
        "description": "Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.",
        "imageUrl": "https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg",
        "level": "3"
    },
    {
        "id": "asdf000002",
        "name": "Eco-Dark",
        "description": "Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.",
        "imageUrl": "https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg",
        "level": "6"
    },
    {
        "id": "asdf000003",
        "name": "Pyraminx",
        "description": "Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg",
        "level": "1"
    },
    {
        "id": "asdf000004",
        "name": "Megaminx",
        "description": "Magnets in AirSM will not drop, and their positions will be more precise with the Magnets-Snap-On design. With the use of 3mm*2mm magnets, the handfeel will be more stable and more comfortable. P.S. This design is brand new for the AirSM.",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg",
        "level": "3"
    }
]

const getAllCubes = () => {
    return data;
};

const getCubeById = (id) => {
    return data.find(c => c.id == id);
};

const addCube = (cubeData) => {
    data.push({
        id: 'asdf' + ('0000' + (Math.random() * 99999 | 0)).slice(-8),
        ...cubeData
    })
};

module.exports = {
    getAllCubes,
    getCubeById,
    addCube
};