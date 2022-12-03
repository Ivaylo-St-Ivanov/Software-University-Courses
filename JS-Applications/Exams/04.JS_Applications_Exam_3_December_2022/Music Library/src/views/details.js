import { deleteAlbum, getAlbumById } from "../api/albums.js";
import { addLike, getOwnLikes, getTotalLikes } from "../api/likes.js";
import { html, nothing } from "../lib.js";
import { updateNav } from "./nav.js";


const detailsTemplate = (albums, user, isCreator, totalLikes, canLike, onDelete, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${albums.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${albums.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${albums.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${albums.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${albums.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${albums.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>

        ${user ? html`
        <div id="action-buttons">

            ${!isCreator ? html`
            ${canLike ? html`
            <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` : nothing}
            ` : html`
            <!--Edit and Delete are only for creator-->
            <a href="/edit/${albums._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`}

        </div>` : nothing}

    </div>
</section>`;


export async function detailsView(ctx) {
    const id = ctx.params.id;
    const albums = await getAlbumById(id);
    const user = ctx.user;
    const isCreator = user?.id == albums._ownerId;

    const totalLikes = await getTotalLikes(id);
    console.log(totalLikes)
    let like = false;

    if (user) {
        like = await getOwnLikes(id, user.id);
    }

    const canLike = !isCreator && like == 0;

    ctx.render(detailsTemplate(albums, user, isCreator, totalLikes, canLike, onDelete, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this album?');

        if (choice) {
            await deleteAlbum(id);
            updateNav();
            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
        await addLike(id);
        ctx.page.redirect('/catalog/' + id);
    }
}