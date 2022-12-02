import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";

const mainElement = document.querySelector('main');

page(decorateContext);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);
page('/search', searchView);

updateNav();
page.start();


function decorateContext(ctx, next) {
    ctx.render = renderMein;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMein(resultTemplate) {
    render(resultTemplate, mainElement);
}