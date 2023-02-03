/*
LO QUE HACE ESTE PROGRAMA USAR LA API FETCH PARA DESPUES MOSTRAR LOS DATOS EN EL HTML

PRIMERO GUARDAMOS LA DIRECCION URL EN UNA VARIABLE

DESPUES CREAMOS CONSTANTES DONDE PONDREMOS LOS DATOS SOLICITADOS

CON LA API FETCH PONEMOS LA DIRRECCION URL 
NOS REGRESA UN DATA
Y ESA DATA LA TENEMOS QUE CONVERTIR A JSON

DESPUES DE CONVERTIR SELECCIONAMOS QUE ES LO QUE QUEREMOS EN ESTE CASO

NAME 
BLOG 
LOCATION

Y LA PONEMOS EN NUESTRA CONSTANTE $N,$B,$L 
PARA MOSTRAR EN EL HTML


*/




// estamos guardando el url en baseEndpoint
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// corregi las tres lineas siguientes
const $n = document.querySelector('[name="name"]');
const $b = document.querySelector('[name="blog"]');
const $l = document.querySelector('[name="location"]');


// La funcion fetch es una llamada asincrona
// para poder usar un await se necesita que la funcion
// tenga al inicio async


async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // La respuesta de la API no se procesa correctamente
  // se tiene que utilizar el metodo json para extraer los datos
  // como en la siguiente linea
  const data = await response.json();
  console.log(data);
  //Aqui las esta mal en las ' por que lo que va es el grave
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);

  //Se le agrega el signo de pesos porque la constante estaba equivocada
  //aparte puse un ;
  $n.textContent = `Algo salió mal: ${err}`;
}


//llamamos a la funcion con el usert stolinski
displayUser('stolinski').catch(handleError);