    // CARRITO
    
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
            }):

            /* let eliminar = document.createElement("span");
            eliminar.innerText = "❌";
            eliminar.className = "delete-product";
            carrito_content.append(eliminar);

            eliminar.addEventListener("click", eliminar_producto); */

       /*  }); */



        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

        const total_buying = document.createElement("div");
        total_buying.className = "total-content";
        total_buying.innerHTML = `total a pagar: ${total} $`;
        modal_container.append(total_buying);
};

ver_carrito.addEventListener("click", pintar_carrito);

// ELIMINAR PRODUCTO

const eliminar_producto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    console.log(foundId);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carrito_counter();
    save_local();
    pintar_carrito();
};

const carrito_counter = () => {
    cantidadCarrito.style.display = "block";
  
    const carritoLength = carrito.length;
  
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
  };
  
  carrito_counter();