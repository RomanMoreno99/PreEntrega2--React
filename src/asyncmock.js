const misProductos = [
    { id: 1, nombre: "Tradicionales", precio: 1600, img: "../img/tradicional.jpg", idCat: "1" },
    { id: 3, nombre: "Horneables", precio: 1800, img: "../img/horneable.jpg", idCat: "1" },
    { id: 4, nombre: "Papas en Gajo", precio: 1700, img: "../img/gajo.jpg", idCat: "1" },
    { id: 5, nombre: "Frutales", precio: 1000, img: "../img/frutales.jpg", idCat: "2" },
    { id: 6, nombre: "Bañadas", precio: 1500, img: "../img/bañadas.jpg", idCat: "2" },
    { id: 7, nombre: "Paletas", precio: 1500, img: "../img/paletas.jpg", idCat: "2" },
    { id: 8, nombre: "Alfajores Helados", precio: 900, img: "../img/alfajor.jpg", idCat: "2" },
    { id: 9, nombre: "Sorrentinos", precio: 2100, img: "../img/sorrentinos.jpg", idCat: "3" },
    { id: 10, nombre: "Raviolis", precio: 2000, img: "../img/ravioles.jpg", idCat: "3" },
    { id: 11, nombre: "Tortellini", precio: 2500, img: "../img/tortellini.jpg", idCat: "3" },
    { id: 12, nombre: "Cintas", precio: 1500, img: "../img/cintas.jpg", idCat: "3" },
  
  ];
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(misProductos);
      }, 100);
    });
  };
  
  
  export const getUnProducto = (id) => {
    return new Promise(resolve => {
      setTimeout( () => {
        const producto = misProductos.find(prod=> prod.id === id);
        resolve(producto)
      }, 100)
    })
  }
  
  export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
  }