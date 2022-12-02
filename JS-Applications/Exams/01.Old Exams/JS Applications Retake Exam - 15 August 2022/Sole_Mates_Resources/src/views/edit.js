import { editShoe, getShoeById } from "../api/shoes.js";
import { html } from "../lib.js";


const editTemplate = (shoe, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoe.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoe.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoe.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoe.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoe.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoe.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;


export async function editView(ctx) {
    const id = ctx.params.id;
    const shoe = await getShoeById(id);

    ctx.render(editTemplate(shoe, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const brand = formData.get('brand');
        const model = formData.get('model');
        const imageUrl = formData.get('imageUrl');
        const release = formData.get('release');
        const designer = formData.get('designer');
        const value = formData.get('value');

        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required!');
        }

        await editShoe(id, { brand, model, imageUrl, release, designer, value });
        ctx.page.redirect('/catalog/' + id);
    }
}