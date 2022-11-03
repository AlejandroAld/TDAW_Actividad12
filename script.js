window.onload = function () {

    var todasImagenes = document.querySelectorAll(".imagenes");
    for (var i = 0; i < todasImagenes.length; i++) {
        todasImagenes[i].onmouseover = function () {
            var nodo = document.createElement("img");
            var srcAnte = this.src;
            var division = srcAnte.split("/");
            nodo.src = "images/" + division[division.length - 1];
            nodo.style = "border:solid 1px black;";
            nodo.className = 'imagenGrande';
            this.parentNode.appendChild(nodo);
            console.log(this.src);
        }
        todasImagenes[i].onmouseout = function () {
            var todasImagenes = document.querySelectorAll(".imagenGrande");
            for (var i = 0; i < todasImagenes.length; i++) {
                todasImagenes[i].parentNode.removeChild(todasImagenes[i]);
            }
        }
    }
}