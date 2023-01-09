const productos = [
{ nombre: "RTX 3060", precio: $100000 },
{ nombre: "RTX 3060ti", precio: $150000 },
{ nombre: "RTX 3070", precio: $200000 },
{ nombre: "RTX 3080", precio: $250000 },
{ nombre: "RTX 3090", precio: $350000 },
];

let carrito = []

let  seleccion = prompt("Desea comprar si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}