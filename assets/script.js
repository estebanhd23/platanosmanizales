function toggleMenu() {
    const menu = document.getElementById("menu-desplegable");
    menu.classList.toggle("activo");
}

function cerrarMenu() {
    const menu = document.getElementById("menu-desplegable");
    menu.classList.remove("activo");
}
