document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById('hamburger');
    var itensMenu = document.getElementById('itens_menu');
  
    hamburger.addEventListener('click', aparecer);

function aparecer(){
    if(itensMenu.style.display == 'block'){
        itensMenu.classList.remove('show');
    }else{
        itensMenu.classList.toggle('show');
    }
}
});







