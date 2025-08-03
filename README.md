# ProyectoFinal-Rivero

##  E-commerce de Álbumes de Metal

Este proyecto es una Single Page Application (SPA) desarrollada con **React** como entrega final del curso de React JS en Coderhouse. Se trata de una tienda online donde los usuarios pueden explorar un catálogo de álbumes de metal, ver detalles, agregar productos al carrito y finalizar su compra mediante un formulario, conectando con **Firebase Firestore**.

---

##  Tecnologías utilizadas

- React
- React Router DOM
- Firebase Firestore
- Context API
- Bootstrap
- CSS personalizado
- Vite

---

##  Estructura principal del proyecto

src/
├── components/
│ ├── NavBar.jsx
│ ├── CartWidget.jsx
│ ├── ItemListContainer.jsx
│ ├── ItemList.jsx
│ ├── Item.jsx
│ ├── ItemDetailContainer.jsx
│ ├── ItemDetail.jsx
│ ├── ItemCount.jsx
│ ├── Cart.jsx
│ ├── CartItem.jsx
│ ├── CheckoutForm.jsx
│
├── providers/
│ └── CartProvider.jsx
│
├── firebase.js
├── App.jsx
└── main.jsx


---

##  Funcionalidades

- Visualización del catálogo completo desde Firestore.
- Filtrado por categoría mediante rutas dinámicas.
- Vista detallada del producto con descripción, lineup y canciones.
- Selector de cantidad (`ItemCount`) con validaciones por stock.
- Agregado al carrito y cálculo de totales en contexto global.
- Visualización del contenido del carrito (`Cart`).
- Formulario de checkout (`CheckoutForm`) con envío de orden a Firestore.
- Muestra del **ID de la orden generada** al finalizar la compra.
- Mensajes condicionales como "Carrito vacío" o errores en el formulario.

---

##  Firebase Firestore

- **Colección `productos`**: Contiene los datos del catálogo de álbumes.
- **Colección `ordenes`**: Se genera un documento por cada compra realizada, con los datos del cliente, los productos y la fecha.

---

##  Cómo probar el proyecto

1. Cloná el repositorio:

```bash
git clone https://github.com/tu-usuario/ProyectoFinal-Rivero.git

2. Instalá las dependencias 
    npm install

3. Configurá Firebase (creá un archivo .env o editá directamente firebase.js con tus credenciales).

4. Iniciá el servidor
    npm run dev