function solve() {

    const name = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');

    document.getElementById('add').addEventListener('click', add);

    const ul = document.getElementById('list');
    const sentList = document.getElementsByClassName('sent-list')[0];
    const deleteList = document.getElementsByClassName('delete-list')[0];

    function add(e) {
        e.preventDefault();

        let nameInput = name.value;
        let titleInput = title.value;
        let messageInput = message.value;

        if (!nameInput || !titleInput || !messageInput) {
            return;
        }

        const li = document.createElement('li');

        const h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${titleInput}`;
        li.appendChild(h4Title);

        const h4Name = document.createElement('h4');
        h4Name.textContent = `Recipient Name: ${nameInput}`;
        li.appendChild(h4Name);

        const span = document.createElement('span');
        span.textContent = `${messageInput}`;
        li.appendChild(span);

        const div = document.createElement('div');
        div.className = 'list-action';

        const sendBtn = document.createElement('button');
        sendBtn.textContent = `Send`;
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        div.appendChild(sendBtn);
        sendBtn.addEventListener('click', send);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = `Delete`;
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        div.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', deleteMail);

        li.appendChild(div);
        ul.appendChild(li);

        name.value = '';
        title.value = '';
        message.value = '';

        function send() {
            const liSent = document.createElement('li');

            const spanName = document.createElement('span');
            spanName.textContent = `To: ${nameInput}`;
            liSent.appendChild(spanName);

            const spanTittle = document.createElement('span');
            spanTittle.textContent = `Title: ${titleInput}`;
            liSent.appendChild(spanTittle);

            const div = document.createElement('div');
            div.className = 'btn';

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.setAttribute('type', 'submit');
            delBtn.className = 'delete';

            div.appendChild(delBtn);
            liSent.appendChild(div);
            sentList.appendChild(liSent);

            li.remove();

            delBtn.addEventListener('click', () => {
                deleteList.appendChild(liSent);
                liSent.removeChild(div);
            });
        }

        function deleteMail() {
            deleteList.appendChild(li);

            li.innerHTML = `<li>
                                <span>To: ${nameInput}</span>
                                <span>Title: ${titleInput}</span>
                            </li>`;
        }
    }

    document.getElementById('reset').addEventListener('click', (e) => {
        e.preventDefault();
        name.value = '';
        title.value = '';
        message.value = '';
    });
}
solve();
