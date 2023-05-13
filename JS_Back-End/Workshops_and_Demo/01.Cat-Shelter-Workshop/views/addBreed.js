const { layoutTemplate } = require('../util')

const addBreed = (req, res) => {
    res.write(layoutTemplate(`
    <main>
        <form action="#" method="" class="cat-form">
            <h2>Add Cat Breed</h2>
            <label for="breed-name">Breed Name</label>
            <input name="breed" type="text" id="breed-name">
            <button type="submit">Add Breed</button>
        </form>
    </main>`));
    res.end();
};

module.exports = {
    addBreed
};
