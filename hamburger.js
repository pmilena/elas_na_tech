    function closeMenu() {
        const itensMenu = document.getElementById("itens_menu");
        itensMenu.classList.remove("show");
    }

    document.getElementById("hamburger").addEventListener("click", function () {
        const itensMenu = document.getElementById("itens_menu");
        itensMenu.classList.toggle("show");
    });

