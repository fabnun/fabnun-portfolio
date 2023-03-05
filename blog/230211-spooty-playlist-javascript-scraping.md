# Como obtener las canciones de una playlist en Spotify con JavaScript

## javascript,spotify,playlist,dynamic-web-scraping

Si quieres obtener información de tus playlists favoritas de Spotify, puedes utilizar JavaScript para obtener los datos de tus canciones y guardarlos en un archivo CSV.

En este artículo, te mostraré los pasos que debes seguir para lograrlo:

1. Inicia sesión en Spotify en tu navegador y abre la playlist que deseas migrar.
1. Accede a las herramientas de desarrollador de tu navegador (presionando F12 en Chrome o Edge).
1. Dirígete a la pestaña Console. Copia, pega y ejecuta el siguiente script en la consola. Es importante destacar que, aunque comparto este script con fines educativos y he comentado todo el código, debes tener precaución al ejecutar scripts de terceros, puede ser que algunos scripts no sean seguros y puedan poner en riesgo la seguridad de tus datos.

Al ejecutar el script, se definen dos métodos: start() y stop(). El método start() captura los datos de las canciones mientras haces scroll manualmente y el método stop() detiene el proceso y descarga un archivo CSV con los datos de tus canciones.

```javascript
//interval representa la búsqueda que se ejecutara cada 100ms, mientras hacemos el scroll manual
let interval;
//lastSize indica cuantas canciones se han encontrado
let lastSize;
//map es donde se guardan las canciones encontradas
const map = new Map();
map.set('', ['artist', 'album', 'song', 'duration', 'status']);

//función que inicia el proceso de búsqueda que requiere scroll manual
const start = () => {
  //inicializamos el tamaño en cero
  lastSize = 0;
  //iniciamos el proceso y lo guardamos en la variable interval
  interval = setInterval(() => {
    //obtenemos todos los elementos que contienen canciones (pero no es la lista completa, hay que hacer scroll)
    const tracks = [...document.querySelectorAll('[data-testid=tracklist-row]')];
    //recorremos cada elemento
    for (track of tracks) {
      //obtenemos los datos de la canción
      const song = track.querySelector('[data-testid=internal-track-link]')?.innerText;
      const artist = track.querySelector('span a')?.innerText;
      const album = track.children[2].querySelector('span a')?.innerText;
      const duration = track.children[4]?.innerText;
      //creamos una llave única para cada canción
      const key = `${artist} - ${album} - ${song}`;
      //si la llave no existe en el mapa, la agregamos
      if (!map.has(key)) {
        //si alguno de los datos está vacío, mostramos un error
        if (!song || !artist || !album || !duration) {
          console.log('Error', key);
          map.set(key, [artist, album, song, duration, 'ERROR']);
        } else {
          //sino agregamos la canción al mapa
          map.set(key, [artist, album, song, duration]);
        }
      }
    }
    //obtenemos el tamaño del mapa
    const size = map.size;
    //si el tamaño es mayor al último tamaño, mostramos el tamaño actual y actualizamos el último tamaño
    if (size > lastSize) {
      console.log(`${size} canciones encontradas`);
      lastSize = size;
    }
  }, 100); //ejecutamos el proceso cada 100ms
};

//función que detiene el proceso de búsqueda y genera el archivo csv
const stop = () => {
  //detenemos el proceso
  clearInterval(interval);
  //ordenamos las llaves del mapa
  const keys = [...map.keys()].sort();
  let csv = '';
  //recorremos las llaves ordenadas
  for (key of keys) {
    //obtenemos los datos de la canción
    const data = map.get(key);
    //llenamos el csv con los datos de la canción
    csv += `"${data.join('","')}"\n`;
  }
  //descargamos el csv
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('style', 'display: none');
  a.setAttribute('download', 'canciones.csv');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
```

Para ejecutar el script, escribimos start() y presionamos [enter], luego hacemos scroll hasta el final de la página. Una vez que hayas terminado, escribe stop() y presiona [enter] para detener el proceso y descargar el archivo CSV. Si tienes alguna duda o necesitas más información sobre el código, no dudes en preguntar.

https://youtu.be/-Ladto5MJEs

En una próxima publicación, mostraré cómo agregar las canciones a YouTube Music.
