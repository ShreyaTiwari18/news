document.addEventListener("DOMContentLoaded", () => {
    // Display alert when "More Information" button is clicked
    const moreInfoButton = document.querySelector("button");
    moreInfoButton.addEventListener("click", () => {
        alert("Redirecting you to more detailed information about the event!");
    });
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.textContent = "Scroll to Top";
    scrollToTopButton.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    const article = document.querySelector("article");
    if (article) {
        const paragraphs = article.querySelectorAll("p"); // Only target paragraphs
        paragraphs.forEach(paragraph => {
            const paragraphContent = paragraph.innerHTML;
            const highlightedContent = paragraphContent.replace(/(terrorist|attack|Jammu|Kashmir|Hindu)/gi, match => {
                return `<span style="color: #FF5722; font-weight: bold;">${match}</span>`;
            });
            paragraph.innerHTML = highlightedContent;
        });
    }
    const footer = document.querySelector("footer");
    if (footer) {
        const currentDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const dateParagraph = document.createElement("p");
        dateParagraph.textContent = `Today's Date: ${currentDate}`;
        footer.appendChild(dateParagraph);
    }
});
