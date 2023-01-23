
const shop_content = document.getElementById("shop_content");
const ver_carrito = document.getElementById("ver_carrito");
const modal_container = document.getElementById("modal-container");
const show_alert = document.getElementById("show_alert");
const cantidad_carrito = document.getElementById("cantidad_carrito");

//GET ITEM (OBTENEMOS INFO QUE GUARDAMOS EN EL LOCALSTORAGE) || ARRAY VACIO

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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

        const repeat = carrito.some((repeat_product) => repeat_product.id === product.id);

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
        
            console.log(carrito);
            console.log(carrito.length);
            carrito_counter();
            save_local();
          }
    });
});

//SET ITEM - (ENVIAR INFO AL LOCALSTORAGE)

const save_local = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

