// CARRITO
console.log('carrito');
const pintar_carrito = ()  => {
    modal_container.innerHTML = "";
    modal_container.style.display = "flex";
const modal_header = document.createElement("div");
    modal_header.className = "modal-header";
    modal_header.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
        `;
    modal_container.append(modal_header);

const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modal_container.style.display = "none";
    });

    modal_header.append(modalbutton);

carrito.forEach((product) => {
    let carrito_content = document.createElement("div");
    carrito_content.className = "modal-content";
    carrito_content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <span class="restar"> - </span>
        <p>${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ❌ </span>
        `;

modal_container.append(carrito_content);

let restar = carrito_content.querySelector(".restar");

    restar.addEventListener("click", () => {
        if (product.cantidad !== 1) {
            product.cantidad--;
        }
        save_local();
        pintar_carrito();
    });

let sumar = carrito_content.querySelector(".sumar");
    sumar.addEventListener("click", () => {
            product.cantidad++;
        save_local();
        pintar_carrito();
    });

// BOTON ELEMINR PRODUCTOS

let eliminar = carrito_content.querySelector(".delete-product");

    eliminar.addEventListener("click", ()=> {
        eliminar_producto(product.id);
    });
                   
    });

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const total_buying = document.createElement("div");
    total_buying.className = "total-content";
    total_buying.innerHTML = `Total a pagar: ${total} $`;
    modal_container.append(total_buying);
};

ver_carrito.addEventListener("click", pintar_carrito);

// ELIMINAR PRODUCTO

const eliminar_producto = (id) => {
const foundId = carrito.find((element) => element.id === id);



carrito = carrito.filter((carritoId) => {
    console.log('oundId.id' , foundId.id , 'carritoId' ,carritoId);
    if (carritoId.id == foundId.id) {
        Swal.fire({
            icon: 'error',
            title: '',
            text: 'Error al eliminar el producto',            
          })
    }else{
          Swal.fire('Producto Eliminado.')
      }
    return carritoId !== foundId;
});


        carrito_counter();
        save_local();
        pintar_carrito();
};

//CONTADOR DE PRODUCTOS EN CARRITO

const carrito_counter = () => {
cantidad_carrito.style.display = "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

cantidad_carrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carrito_counter();




//OBTENER LISTA DE PRODUCTOS
async function obtener_productos() {
let url = 'products.json';
try {
    let respuesta = await fetch(url);    
    return await respuesta.json();
} catch (error) {
    console.log(error);
}
}
//OBTENER PRODUCTOS

async function render_productos() {
let lista_productos = await obtener_productos();
let html = '';
console.log(lista_productos);return;
lista_productos.forEach(user => {
    console.log(user);return;
    let htmlSegment = `<div class="user">
                        <img src="${user.profileURL}" >
                        <h2>${user.firstName} ${user.lastName}</h2>
                        <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                    </div>`;

    html += htmlSegment;
});

let container = document.querySelector('.container');
container.innerHTML = html;
}

//OBTENER VALOR DOLAR
async function obtener_valor_dolar() {
let url = 'valor_dolar.json';
try {
    let respuesta = await fetch(url);    
    return await respuesta.json();
} catch (error) {
    console.log(error);
}
}


async function render_valor_dolar() {
let datos_dolar = await obtener_valor_dolar();
console.log();
let html = '';
console.log(datos_dolar);
datos_dolar.forEach(dato => {
    console.log(dato);
    let htmlSegment = dato.valor;

    html += htmlSegment;
});

let container = document.getElementById('valor_dolar');
console.log(container);
container.innerHTML = html;
}

render_valor_dolar();

//OBTENER POKEMON
async function obtener_pokemon() {
let url = 'valor_dolar.json';
let html = '';
try {
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/?limit=20",
        method: 'GET',
        cache: false,
        success: function(data){          
          let nombre_pokemon = data.results[3].name;
          let container = document.getElementById('nombre_pokemon');
          html += nombre_pokemon;
          container.innerHTML = html;
        },
        error: function(data){
            console.log(data);
          },
      });

} catch (error) {
    console.log(error);
}
}

obtener_pokemon();