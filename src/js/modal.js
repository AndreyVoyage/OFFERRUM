document.addEventListener('DOMContentLoaded', function () {
    let modal = document.querySelector(".modal");
    let modalContentClose = document.querySelector(".modal-content__close");
    let headerItemButton = document.querySelector(".header__item-button");
    let mainElement = document.querySelector(".main");
    

    headerItemButton.addEventListener('click',
        function () {
            modal.classList.toggle("modal--active");

            modalContentClose.classList.toggle("modal-content__close--active");

            mainElement.classList.toggle("main--active");

            document.body.classList.toggle("stop-scroll");
        }
    )

    modalContentClose.addEventListener('click',
        function () {
            modal.classList.remove("modal--active");

            mainElement.classList.remove("stop-scroll");

            mainElement.classList.remove("main--active");
        }
    )

});