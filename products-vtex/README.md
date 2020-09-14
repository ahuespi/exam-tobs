# Ejercicio de entrevista - TOBS

 

## Requerimientos
-   Maquetar una landing que liste productos
-   Obtener información desde una API Pública 			    (https://fravega.myvtex.com/api/catalog_system/pub/products/search/notebook)
-   Sitio Web Responsive
-   Que haya un buscador para ver los productos
    
## Tecnologias Elegidas
- HTML
- CSS
- Javascript (Angular 2)

## Resolucion
- **¿Porque usé Angular?** - Porque es una de las tecnologias con la que mas experiencia tengo.
- **¿Que se hizo?** - En base a la informacion que se recibe de la api dada para el ejercicio, se generó una grilla de productos responsive, el cual emula una busqueda de "Notebooks". 
Tomé como ejemplo de maquetacion la pagina de Mercado libre el cual tiene en su grilla tarjetas de productos con la informacion de la marca, nombre, precio.

**¿Como funciona la app?**   
 - Al iniciar la aplicacion, se redirigia automaticamente a la grilla de productos (/products)
 - Cualquier URL que no sea definida en las configuraciones de rutas llevará a "/products".
 - Cuando se hace click en *"Ver más"*, se redirecciona a la ficha del producto selecionado.
 - La ficha del producto, se genera con la informacion de la api y cuenta con:
		 - Un Carousel de imagenes 
		 - Marca del producto
		 - Nombre del producto
		 - Informacion de pagos
		 - Informacion de Envios
		 - Boton Comprar y Añadir al Carrito
		 - Caracteristicas del producto seleccionado. 
 - En el buscador se puede filtrar Notebooks solo por marcas: Por ejemplo: Dell
 - El buscador funciona cuando se aprieta enter o se hace click en la lupa de buscar.
 - Desde la url se puede buscar un producto por marca: localhost.com:{port}/search/{marca}
		 - Por Ejemplo: [http://localhost:4200/search/hp](http://localhost:4200/search/hp)

## Proceso para ver la landing localmente. (Para desarrolladores)

 - Clonar este repositorio
 - Tener instalado **npm** en su maquina - [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
 - Tener instalado **Angular** - [https://angular.io/guide/setup-local](https://angular.io/guide/setup-local)
 - Dirigirse a la carpeta **products-vtex** y ejecutar en la terminal **npm install** (Si se hace desde ubuntu o linux, posiblemente pida permisos de administrador, usar sudo antes del comando: **sudo npm install**)
 - Una vez cargado todo el proceso del package.json, ejecutar **npm start** para inicializar el proyecto localmente y poder ver la landing en el navegador web.

| @author | Amir Huespi  | amir.huespi@gmail.com |