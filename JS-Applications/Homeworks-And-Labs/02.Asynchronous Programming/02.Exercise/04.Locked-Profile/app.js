const mainElement = document.getElementById('main');
mainElement.replaceChildren();

async function lockedProfile() {

    const info = await users();

    let id = 1;

    for (const current of Object.values(info)) {
        const div = document.createElement('div');
        div.setAttribute('class', 'profile');

        div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                         <label>Lock</label>
                         <input type="radio" name="user${id}Locked" value="lock" checked>
                         <label>Unlock</label>
                         <input type="radio" name="user${id}Locked" value="unlock"><br>
                         <hr>
                         <label>Username</label>
                         <input type="text" name="user${id}Username" value="${current.username}" disabled readonly />
                         <div id="user${id}HiddenFields">
                             <hr>
                             <label>Email:</label>
                             <input type="email" name="user${id}Email" value="${current.email}" disabled readonly />
                             <label>Age:</label>
                             <input type="email" name="user${id}Age" value="${current.age}" disabled readonly />
                         </div>`;
        mainElement.appendChild(div);

        const hiddenDiv = document.getElementById(`user${id}HiddenFields`);
        hiddenDiv.style.display = 'none';
        
        const unlock = document.querySelectorAll('input');

        const button = document.createElement('button');
        button.textContent = 'Show more';
        div.appendChild(button);
        button.addEventListener('click', (e) => {
            if ((e.target.parentElement.children)[4].checked && e.target.textContent == 'Show more') {
                hiddenDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else if ((e.target.parentElement.children)[4].checked && e.target.textContent == 'Hide it') {
                hiddenDiv.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        });

        id++;
    }
}

async function users() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await response.json();

    return data;
}