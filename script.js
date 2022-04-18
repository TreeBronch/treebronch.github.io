var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
function toggleNav() {
    document.body.classList.toggle("nav-open");
}
function toggleNavButton() {
    document.nav-button.classList.toggle("nav-icon")
}
document.querySelector(".nav-close").addEventListener("click", () => {
   toggleNav(); 
})

var checked = 0;
if (scrollTop>10) {
    if (checked != 1) {
        toggleNavButton();
    }
    checked = 1;
}
else {
    if (checked != 2) {
        toggleNavButton();
    }
    checked = 2;
}