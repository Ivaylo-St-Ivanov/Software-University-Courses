import { logout } from "../api/users.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../util.js";

const navElement = document.querySelector('header');

const navTemplate = (hasUser, onLogout) => html`
<!-- Navigation -->
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

<nav>
    <div>
        <a href="/catalog">Dashboard</a>
        <a href="/search">Search</a>
    </div>

    ${hasUser ? html`
    <!-- Logged-in users -->
    <div class="user">
        <a href="/create">Add Pair</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>` : html`
    <!-- Guest users -->
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}

</nav>`;


export function updateNav() {
    const hasUser = getUserData();
    render(navTemplate(hasUser, onLogout), navElement);

}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/catalog');
}