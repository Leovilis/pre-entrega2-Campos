



function opciones(){
    //comprar = false;
    let opcion = prompt("Desea comprar alguno de nuestros vinos?").toLowerCase();
    let comprar;
        if(opcion === "si"){
            comprar = true;
            console.log(comprar);
        }else if(opcion === "no"){
            comprar = false;
            alert("Lo esperamos pronto");
            console.log(comprar);
        }else{
            alert("Ingrese una opcion valida");
        }
 
    return comprar;
}

const articulos = [
    {nombre: "Tilcara", precio: "750", stock:"100"},
    {nombre: "Purmamarca", precio: "750", stock:"100"},
    {nombre: "Maimara", precio: "750", stock:"100"}
]
//CONSTRUCTOR DE ARTICULOS

function Articulo(nombre, precio, stock) {
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}

//FUNCION DE FILTRADO
function filtraArticulo(arr, filtro) {
    const filtrado = arr.filter((el)=>{
        return el.nombre.includes(filtro);
    });
    return filtrado;
}

console.log(filtraArticulo(articulos, "Mai"));



