function getArticleGenerator(articles) {

    'use strict';
    const textArea = document.getElementById('content');

    return () => {
        if (articles.length) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            textArea.appendChild(article);
        }
    }
}
