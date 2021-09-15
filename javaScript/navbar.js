document.onreadystatechange = function () {
    var toggleMenu = function () {
        var body = document.getElementsByTagName('body')[0];
        var listaDeClasses = body.classList;
        listaDeClasses.toggle('navAberto');
    };
    document.getElementById('menu-btn').onclick = toggleMenu;
    document.getElementById('auxiliar-menu').onclick = toggleMenu;
}

//Código não utilizado, este código é um nav-menu para mobile. Achei interessante deixar a lógica utilizada aqui, mas n achei que servia para o projeto em si, decidi focar em mostrar que consigo trabalhar com responsividade no CSS e consigo me planejar utilizando as tags SEO. :)