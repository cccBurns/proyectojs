
const shop_content = document.getElementById("shop_content");
const ver_carrito = document.getElementById("ver_carrito");
const modal_container = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [];

//RECORRIDO DEL PRODUCTO

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
         <img src="${product.img}">
         <h3>${product.nombre}</h3>
         <p class="price">${product.precio} $</p>
          `;

        shop_content.append(content);

    // BOTON COMPRAR

    let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

// ACUMULAR CANTIDAD DE PRODUCTO

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat === true) {
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
            });
        }
        console.log(carrito);
    });
});



/* let  seleccion = prompt("Desea comprar si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if (seleccion == "si"){
    alert("lista de productos a continuacion")
    let todos_los_productos = productos.map((productos) => productos.nombre + " " + productos.precio + "$");

    alert(todos_los_productos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias y vuelva pronto")
}

while(seleccion != "no"){
    let producto = prompt("agrega tus productos al carrito")
    let precio = 0 

    if (producto == "RTX 3060" || producto == "RTX 3060ti" || producto == "RTX 3070"|| producto == "RTX 3080" || producto == "RTX 3090" ){
        switch (producto){ 

                case "RTX 3060":
                precio = 100000;
                break;

                case "RTX 3060ti":
                precio = 150000;
                break;

                case "RTX 3070":
                precio = 200000;
                break;

                case "RTX 3080":
                precio = 250000;
                break;

                case "RTX 3090":
                precio = 350000;
                break;

                default:
                break;
                                   
        }

        let unidades = parseInt(prompt("cuantas desea comprar"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)

    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando?")

    while (seleccion == "no" ){
        alert("gracias por su compra")
        carrito.forEach((carrito_final) => {
            console.log(`producto: ${carrito_final.producto}, unidades: ${carrito_final.unidades}, total a pagar por producto ${carrito_final.unidades * carrito_final.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar es: ${total}`) */