document.addEventListener("DOMContentLoaded", function() {
    fetch("news/news.json")
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("news-container");
            data.articles.forEach(article => {
                const articleElement = document.createElement("div");
                articleElement.classList.add("news-item");
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.link}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.error("Error loading news:", error));
});