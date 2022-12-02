import { getSearchedShoes } from "../api/shoes.js";
import { html, nothing } from "../lib.js";


const searchTemplate = (isClicked, result, hasUser, onSubmit) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    ${isClicked ? html`
    <div id="search-container">

        ${result.length ? html`
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${result.map(s => resultCard(s, hasUser))}
        </ul>` : html`
        <!-- Display an h2 if there are no posts -->
        <h2>There are no results found.</h2>`}

    </div>` : nothing}

</section>`;


const resultCard = (shoe, hasUser) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model} ${shoe.designer}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    
    ${hasUser ? html`
    <a class="details-btn" href="/catalog/${shoe._id}">Details</a>` : nothing}
    
</li>`;


export function searchView(ctx) {
    let isClicked = false;
    let result = [];
    const hasUser = ctx.user;

    ctx.render(searchTemplate(isClicked, result, hasUser, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const input = formData.get('search');

        if (!input) {
            return alert('Empty field!');
        }

        isClicked = true;
        result = await getSearchedShoes(input);
        ctx.render(searchTemplate(isClicked, result, hasUser, onSubmit));
    }
}
