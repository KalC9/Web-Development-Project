let headerMain = document.querySelector(".header-main");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");
let menu = document.querySelector("#menuBtn");
let cross = document.querySelector("#closeBtn");



let isMenuOpen = false;

headerMobileBtn.onclick =function () {
    if (!isMenuOpen) {
        headerMain.style.display = "flex";
        menu.style.display = "none";
        cross.style.display = "inline";

        isMenuOpen = true;

    }
    else if (isMenuOpen) {
        headerMain.style.display = "none";
        menu.style.display = "inline";
        cross.style.display = "none";

        isMenuOpen = false;
    }
}
