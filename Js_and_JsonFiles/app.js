var XMLHttpRequest = require("./node_modules/xmlhttprequest").XMLHttpRequest;
//guardamos el nombre o ruta de larchivo json que queremos cargar y procesar
const file = 'persona.json';
//creamos un objeto XMLHttpRequest(es una api: una interfaz de programacion) mediante el cual haremos la llamada al archivo json
/*XMLHTTPRequest es una api atravez de la cual el cliente puede trasferir datos desde o hacia el
el servidor en modo sincrono o asincrono, sin tener que actualizar la pagina.
esto nos permite actualizar la pagina sin volver a cargarla, y enviar datos a un servidor en segundo plano.
XMLHttpRequest soporta intercambio de datos xml y json.*/
const request = new XMLHttpRequest();
/*altrabajar con un archivo local es necesario especificar que tipo de datos estamos transmitiendo
mediante el siguiente metodo:*/

/*utilizamos el objeto XMLHTTPRequest, usamos el metodo open para definir la fuente de datos que deseamos 
abrir y como se abrira*/
request.open('GET', file, true);
/*el primer argumento de open() especifica el metodo de trasnferencia de datos(GET o POST),
el nombre del archivo , en este caso esta guardado en la variable FILE,
y por ultimo si la solicitud es asincrona (TRUE) o sincrona(FALSE)*/
/* el hecho de que la solicitud se asincrona permite, en caso de retraso en la recepcion de los mismos no bloquear la 
ejecucuion del codigo de lresto de la pagina*/

/*despues de configurar el open() definimos que hacer cuando  el servicio que proporciona los datos JSON(archivo URL) responde.

la funcion onload() es una funcion callback(retrollamada) y sera llamada solo cuando haya llegado la respuesta.
CALLBACK:es una funcion que se pasa como argumento a otra funcion y se llama cuand se verifica cualquier evento.*/

request.onload = function (){
    //convertimos el json a un formato texto que podamos procesas
    const dato = JSON.parse(this.responseText);
    letHTML = '<div><h1>${dato.nombre} ${dato.apellido}</h1></div>';
    
}
console.log(dato.nombre);
