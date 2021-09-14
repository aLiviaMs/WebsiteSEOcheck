document.onreadystatechange = function () {
    var toggleMenu = function () {
        var body = document.getElementsByTagName('body')[0];
        var listaDeClasses = body.classList;
        listaDeClasses.toggle('navAberto');
    };
    document.getElementById('menu-btn').onclick = toggleMenu;
    document.getElementById('auxiliar-menu').onclick = toggleMenu;
}