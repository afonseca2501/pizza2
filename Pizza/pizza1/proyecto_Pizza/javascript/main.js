/*Obtener los elementos de una clase
let Links = document.querySelectorAll("a");
Recorrerlo
Links.forEach(function(Peo){
    console.log(Peo);
});
let celdas = document.querySelectorAll("td");
celdas.forEach(function(Peo){
    Peo.addEventListener("click",function(){
        console.log(this)
    });
});*/

let Boton = document.querySelectorAll(".close");
Boton.forEach(function(Peo){
    Peo.addEventListener("click",function(ev){
        ev.preventDefault();
        return false;
    });
});
