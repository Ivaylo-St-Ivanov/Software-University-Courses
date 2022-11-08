async function solution() {
    
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    const mainSection = document.getElementById('main');

    for (const current of data) {
        const divAccordion = document.createElement('div');
        divAccordion.className = 'accordion';

        const divHead = document.createElement('div');
        divHead.className = 'head';

        const span = document.createElement('span');
        span.textContent = `${current.title}`;
        divHead.appendChild(span);

        const button = document.createElement('button');
        button.className = 'button';
        button.setAttribute('id', `${current._id}`);
        button.textContent = 'More';
        divHead.appendChild(button);

        divAccordion.appendChild(divHead);

        const divExtra = document.createElement('div');
        divExtra.className = 'extra';

        const p = document.createElement('p');
        p.textContent = '';
        divExtra.appendChild(p);

        divAccordion.appendChild(divExtra);
        mainSection.appendChild(divAccordion);

        button.addEventListener('click', () => showMore(`${current._id}`));

        async function showMore(id) {

            const responseInfo = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + id);
            const dataInfo = await responseInfo.json();

            if (!p.textContent) {
                button.textContent = 'Less';
                p.textContent = dataInfo.content;
                divExtra.style.display = 'block';
            } else {
                button.textContent = 'More';
                p.textContent = '';
                divExtra.style.display = 'none';
            }
        }
    }
}
solution();