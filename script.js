// script.js
document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("productos");
    const listaCarrito = document.getElementById("lista-carrito");

    const productos = [
        { id: 1, nombre: "Funko POP: Rengoku-Serie: Demon slayer", precio: 20.99, imagen: "imagen1.jpg" },
        { id: 2, nombre: "Funko POP: Azula-Serie: Avatar", precio: 15.49, imagen: "imagen2.jpg" },
        { id: 3, nombre: "Funko POP: Coleccion naruto-Serie: Naruto", precio: 50.99, imagen: "imagen3.jpg" },
        // Agrega más productos según sea necesario
    ];

    // Evento de clic en el contenedor principal para agregar al carrito
    main.addEventListener('click', function(event) {
        if (event.target.classList.contains('agregar-carrito')) {
            const id = event.target.getAttribute('data-id');
            const nombre = event.target.getAttribute('data-nombre');
            const precio = event.target.getAttribute('data-precio');
            const imagen = event.target.getAttribute('data-imagen');
            agregarAlCarrito(id, nombre, precio, imagen);
        }
    });


    
    // Evento de clic en el contenedor del carrito para eliminar
    listaCarrito.addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar-producto')) {
            const id = event.target.getAttribute('data-id');
            eliminarDelCarrito(id);
        }
    });

    function agregarAlCarrito(id, nombre, precio, imagen) {
        // Añadir el producto al carrito
        const itemCarrito = document.createElement("li");
        itemCarrito.setAttribute('data-id', id); //  atributo de identificación
        itemCarrito.innerHTML = `
            <img src="${imagen}" alt="${nombre}">
            <p>${nombre} - $${precio}</p>
            <button class="eliminar-producto" data-id="${id}">Eliminar</button>
        `;
        listaCarrito.appendChild(itemCarrito);
    }

    function eliminarDelCarrito(id) {
        const itemParaEliminar = listaCarrito.querySelector(`[data-id="${id}"]`);
        if (itemParaEliminar) {
            listaCarrito.removeChild(itemParaEliminar);
        }
    }

    // Crear productos y botones "Agregar al carrito"
    productos.forEach(producto => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("product");
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="agregar-carrito" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-imagen="${producto.imagen}">Agregar al carrito</button>
        `;
        main.appendChild(productoElement);
    });
    
});

