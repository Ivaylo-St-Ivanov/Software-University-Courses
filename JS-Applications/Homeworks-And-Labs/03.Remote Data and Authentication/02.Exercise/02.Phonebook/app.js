function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContact);
    document.getElementById('btnCreate').addEventListener('click', onCreate);

    loadContact();
}
attachEvents();

const phoneBook = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

phoneBook.addEventListener('click', onDelete);

async function onDelete(event) {
    const id = event.target.dataset.id;
    if (id != undefined) {
        await deleteContact(id);

        event.target.parentElement.remove();
    }
}

async function onCreate() {
    person = personInput.value;
    phone = phoneInput.value;
    const contact = { person, phone };

    const result = await createContact(contact);

    phoneBook.appendChild(createItem(result));
}

function createItem(contact) {
    const li = document.createElement('li');
    li.innerHTML = `${contact.person}: ${contact.phone}<button data-id="${contact._id}">Delete</button>`;

    return li;
}

async function loadContact() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    phoneBook.replaceChildren(...Object.values(data).map(createItem));
}

async function createContact(contact) {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
    const result = response.json();

    return result;
}

async function deleteContact(id) {

    const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'delete'
    });
    const result = await response.json();

    return result;
}