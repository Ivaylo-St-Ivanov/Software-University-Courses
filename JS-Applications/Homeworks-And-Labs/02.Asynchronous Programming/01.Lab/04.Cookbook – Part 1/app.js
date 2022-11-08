window.addEventListener('DOMContentLoaded', start);

async function start() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    main.replaceChildren();

    recipes.map(createPreview).forEach(el => main.appendChild(el));
}

async function loadRecipe(id, preview) {
    const recipe = await getRecipe(id);
    
    const article = document.createElement('article');
    article.innerHTML = `<h2>${recipe.name}</h2>
                        <div class="band">
                            <div class="thumb">
                                <img src="${recipe.img}">
                            </div>
                            <div class="ingredients">
                                <h3>Ingredients:</h3>
                                <ul>
                                    ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="description">
                            <h3>Preparation:</h3>
                            ${recipe.steps.map(s => `<p>${s}</p>`).join('')}
                        </div>`;
    preview.replaceWith(article);
}

function createPreview(recipe) {
    const article = document.createElement('article');
    article.className = 'preview';
    article.innerHTML = `<div class="title">
                            <h2>${recipe.name}</h2>
                        </div>
                        <div class="small">
                            <img src="${recipe.img}">
                        </div>`;
    article.addEventListener('click', () => loadRecipe(recipe._id, article));
    return article;   
}

async function getRecipes() {
    // try {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');

    // if (!response.ok) {
    //     throw new Error('Error');
    // }

    const data = await response.json();

    return Object.values(data);
    // } catch (error) {
    //     alert(error.message);
    // }
}

async function getRecipe(id) {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);
    const data = await response.json();
    return data;
}