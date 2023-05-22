const fs = require('fs');

const cats = JSON.parse(fs.readFileSync('./services/data.json'));

const getAllCats = () => {
    return cats;
};

const getCatById = (id) => {
    return cats.find(c => c["data-id"] == id);
};

const addCat = async (data) => {
    const id = 'asdf' + ('0000' + (Math.random() * 99999 | 0)).slice(-8);
    cats.push({
        'data-id': id,
        img: data.img,
        title: data.title,
        breed: data.breed,
        description: data.description
    });

    return new Promise((resolve, reject) => {
        fs.writeFile(
            './services/data.json',
            JSON.stringify(cats, null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    reject(err);
                }
            });
    });
};

module.exports = {
    getAllCats,
    getCatById,
    addCat
};