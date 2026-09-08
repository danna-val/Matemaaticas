const menuButton = document.getElementById("menuButton");
const sidebar = document.querySelector(".sidebar");

menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});


const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i> <span>Modo claro</span>';

    } else {

        localStorage.setItem("theme", "light");

        themeButton.innerHTML =
            '<i class="fa-solid fa-moon"></i> <span>Modo oscuro</span>';
    }

});


const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sidebar.classList.remove("open");

    });

});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute("id");

        }

    });


    menuLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});