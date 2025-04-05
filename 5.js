document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".scroll-container section"); // Select all sections (pages)
    let currentPage = 0; // Track current page index

    document.getElementById("next").addEventListener("click", function () {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePage();
        }
    });

    document.getElementById("prev").addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    function updatePage() {
        pages.forEach((page, index) => {
            page.style.display = index === currentPage ? "block" : "none"; // Show only the active page
        });
    }

    updatePage(); // Initialize visibility
});

