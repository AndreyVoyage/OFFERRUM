document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".header__list");
    let headerLogo = document.querySelector(".header__logo");
    let menuLinks = menu.querySelectorAll(".header__item");
    let headerContainer = document.querySelector(".header");
    let mainElement = document.querySelector(".main");

    burger.addEventListener('click',
        function () {
            headerContainer.classList.toggle("header--active");

            burger.classList.toggle("burger--active");

            menu.classList.toggle("header__list--active");

            headerContainer.classList.toggle("header--active");

            headerLogo.classList.toggle("header__logo--active");

            document.body.classList.toggle("stop-scroll");

            // mainElement.classList.toggle("main--active");
        }
    )

    menuLinks.forEach(function (el) {
        el.addEventListener('click', function () {

            burger.classList.remove("burger--active");

            menu.classList.remove("header__list--active");

            headerContainer.classList.remove("header--active");

            document.body.classList.remove("stop-scroll");

            // mainElement.classList.remove("main--active");
        })
    });
});