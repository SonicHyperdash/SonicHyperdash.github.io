document.addEventListener("DOMContentLoaded", function() {
    // Background image cycling
    const backgrounds = [
        "assets/sonic-bg1.jpg",
        "assets/sonic-bg2.jpg",
        "assets/sonic-bg3.jpg"
    ];
    let currentBgIndex = 0;
    const homeSection = document.getElementById("home");
    
    function changeBackground() {
        homeSection.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
        currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    }
    
    changeBackground();
    setInterval(changeBackground, 30000); // Change every 30 seconds

    // Fetch and display news
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
