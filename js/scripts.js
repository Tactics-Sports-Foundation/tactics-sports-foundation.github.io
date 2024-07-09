function toggleMenu() {
    var menu = document.getElementById("myLinks");
    var menuIcon = document.getElementById("menuIcon");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    } else {
        menu.style.display = "block";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}
