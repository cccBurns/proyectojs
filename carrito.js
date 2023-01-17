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
                <p>Cantidad: ${product.cantidad}</p>
                <p>Total: ${product.cantidad * product.precio}</p>
                `;

                modal_container.append(carrito_content);

// BOTON ELEMINR PRODUCTOS

            let eliminar = document.createElement("span");
            eliminar.innerText = "❌";
            eliminar.className = "delete-product";
            carrito_content.append(eliminar);

            eliminar.addEventListener("click", eliminar_producto);

        });



        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

        const total_buying = document.createElement("div");
        total_buying.className = "total-content";
        total_buying.innerHTML = `total a pagar: ${total} $`;
        modal_container.append(total_buying);
};

ver_carrito.addEventListener("click", pintar_carrito);

// ELIMINAR PRODUCTO

const eliminar_producto = () => {
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    pintar_carrito();
};
