function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSubmit);
    document.getElementById('refresh').addEventListener('click', loadMessage);

    loadMessage();
}
attachEvents();

const textArea = document.getElementById('messages');
const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');

async function onSubmit() {
    const author = authorInput.value;
    const content = contentInput.value;

    await createMessages({ author, content });

    textArea.value += `\n${author}: ${content}`;
    contentInput.value = '';
}

async function loadMessage() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const messages = Object.values(data);

    textArea.value = messages.map(m => `${m.author}: ${m.content}`).join('\n');
}

async function createMessages(message) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };

    const response = await fetch('http://localhost:3030/jsonstore/messenger', options);
    const result = await response.json();

    return result;
}