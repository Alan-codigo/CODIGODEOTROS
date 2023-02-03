
// estamos guardando el url en baseEndpoint
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// corregi las dos lineas siguientes
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

displayUser('stolinski').catch(handleError);