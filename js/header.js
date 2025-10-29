const header = document.querySelector(".hd");

window.addEventListener("scroll", () => {
    let sy = window.scrollY;

    if (sy > 20) {
        header.classList.add("header__active");
    } else {
        header.classList.remove("header__active");
    }
});
