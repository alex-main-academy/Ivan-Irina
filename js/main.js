const heroBlocks = document.querySelectorAll(".js-hero-block");

window.addEventListener("scroll", () => {
    const cord = window.scrollY;

    if (cord > window.innerHeight * 3) {
        heroBlocks[0].classList.remove("active");
        heroBlocks[1].classList.add("active");
    } else {
        heroBlocks[1].classList.remove("active");
        heroBlocks[0].classList.add("active");
    }
});
