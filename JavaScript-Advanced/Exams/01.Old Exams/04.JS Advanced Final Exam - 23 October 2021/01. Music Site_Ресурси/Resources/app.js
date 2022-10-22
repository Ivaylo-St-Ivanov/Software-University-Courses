window.addEventListener('load', solve);

function solve() {

    document.getElementById('add-btn').addEventListener('click', add);

    const genre = document.getElementById('genre');
    const song = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');

    const allHits = document.getElementsByClassName('all-hits-container')[0];
    const savedContainer = document.getElementsByClassName('saved-container')[0];

    function add(e) {
        e.preventDefault();

        const genreInput = genre.value;
        const songInput = song.value;
        const authorInput = author.value;
        const dateInput = date.value;

        if (!genreInput || !songInput || !authorInput || !dateInput) {
            return;
        }

        const div = document.createElement('div');
        div.className = 'hits-info';
        div.innerHTML = `<img src="./static/img/img.png">
                         <h2>Genre: ${genreInput}</h2>
                         <h2>Name: ${songInput}</h2>
                         <h2>Author: ${authorInput}</h2>
                         <h3>Date: ${dateInput}</h3>
                         <button class="save-btn">Save song</button>
                         <button class="like-btn">Like song</button>
                         <button class="delete-btn">Delete</button>`;
        allHits.appendChild(div);

        genre.value = '';
        song.value = '';
        author.value = '';
        date.value = '';

        const likeBtn = div.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            const pLikes = document.querySelector('#total-likes .likes p');
            let currentLike = Number(pLikes.textContent.split('Total Likes: ')[1]);
            pLikes.textContent = `Total Likes: ${++currentLike}`;
            likeBtn.disabled = true;
        });

        div.querySelector('.save-btn').addEventListener('click', save);
        div.querySelector('.delete-btn').addEventListener('click', () => {
            div.remove();
        });

        function save() {
            savedContainer.appendChild(div);
            div.innerHTML = `<img src="./static/img/img.png">
                             <h2>Genre: ${genreInput}</h2>
                             <h2>Name: ${songInput}</h2>
                             <h2>Author: ${authorInput}</h2>
                             <h3>Date: ${dateInput}</h3>
                             <button class="delete-btn">Delete</button>`;

            div.querySelector('.delete-btn').addEventListener('click', () => {
                div.remove();
            });
        }
    }
}