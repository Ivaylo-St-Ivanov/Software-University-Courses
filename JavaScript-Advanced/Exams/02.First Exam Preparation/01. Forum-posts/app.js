window.addEventListener("load", solve);

function solve() {

    'use strict';
    const title = document.getElementById('post-title');
    const category = document.getElementById('post-category');
    const content = document.getElementById('post-content');

    const reviewList = document.getElementById('review-list');
    const publishedList = document.getElementById('published-list');

    document.getElementById('publish-btn').addEventListener('click', getInfo);
    document.getElementById('clear-btn').addEventListener('click', clear);

    function getInfo() {
        const titleValue = title.value;
        const categoryValue = category.value;
        const contentValue = content.value;

        if (!title.value || !category.value || !content.value) {
            return;
        }
        const li = document.createElement('li');
        li.className = 'rpost';
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = title.value;
        article.appendChild(h4);
        const pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${category.value}`;
        article.appendChild(pCategory);
        const pContent = document.createElement('p');
        pContent.textContent = `Content: ${content.value}`;
        article.appendChild(pContent);
        li.appendChild(article);

        const approveBtn = document.createElement('button');
        approveBtn.textContent = 'Approve';
        approveBtn.className = "action-btn approve";
        li.appendChild(approveBtn);
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = "action-btn edit";
        li.appendChild(editBtn);

        reviewList.appendChild(li);

        title.value = '';
        category.value = '';
        content.value = '';

        editBtn.addEventListener('click', edit);
        approveBtn.addEventListener('click', approve);

        function edit() {
            title.value = titleValue;
            category.value = categoryValue;
            content.value = contentValue;

            li.remove();
        }

        function approve() {
            publishedList.appendChild(li);

            editBtn.remove();
            approveBtn.remove();
        }
    }

    function clear(e) {
        publishedList.innerHTML = '';
    }
}