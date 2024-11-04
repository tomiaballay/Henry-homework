//var deportes = {conBalon: ["Futbol", "Basket", "Rugby"],
//    sinBalon:["Boxeo", "Surf", "Trekking"],
//};

var persona = {nombre:"Lucas", edad:26, estudios:{esProgramador:true}};
//console.log(persona.edad);

////PARA CORREGIR////
persona.nombre ="Martin";
//console.log (persona.nombre);
persona.edad = 32;

////PARA AGREGAR////
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
///PARA BORRAR///
delete autos.marcas;
//console.log (autos);


///GUARDAR FUNCION DENTRO DE LA PROPIEDAD///
var misFunciones = {
    saludar: function (){
    console.log ("Hola");
},
};
//misFunciones.saludar ();


////DOT-NOTATION///
var atuendos = {manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"]};
//console.log (atuendos.manos);

///BRACKET-NOTATION///
atuendos ["piernas"] = ["Bermudas", "Pantalones"];

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ["Hamburguesa", "Papas fritas"]
};

diferenciaDeNotaciones("Saludables", "noSaludables");
//console.log(comidas);


////OBJETOS AVANZADOS///
/// ver si existe tal propiedad
var libro = {autor: "Borges", genero: "Policial", año: 1990};
var tienePropiedad = libro.hasOwnProperty ("autor");
//console.log (tienePropiedad);

///ver las propiedades
var todasLasPropiedades = Object.keys(libro);
///console.log (todasLasPropiedades)

var mundo = {continente:7, paises:195, oceanos: 5};
for(var prop in mundo){
//    console.log ("Esta es la propiedad: " + prop);
//    console.log ("Este es el valor: " + mundo[prop]);
}


var mascota = {
    animal: "Perro", 
    raza: "Ovejero aleman", 
    amistoso: true,
    dueña: "Maria", 
    info: function (){
        console.log("Mi perro es un " + this.raza);
    }
}

mascota.info();
