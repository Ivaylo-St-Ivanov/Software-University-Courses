import { deleteShoe, getShoeById } from "../api/shoes.js";
import { html, nothing } from "../lib.js";
import { updateNav } from "./nav.js";


const detailsTemplate = (shoe, isCreator, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoe.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        ${isCreator ? html`
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>` : nothing}
        
    </div>
</section>`;


export async function detailsView(ctx) {
    const id = ctx.params.id;
    const shoe = await getShoeById(id);
    const user = ctx.user;
    const isCreator = user?.id == shoe._ownerId;

    ctx.render(detailsTemplate(shoe, isCreator, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this shoe?');

        if (choice) {
            await deleteShoe(id);
            updateNav();
            ctx.page.redirect('/catalog');
        }
    }
}