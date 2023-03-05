# Basic API (Node, Express, Jwt, Ejs)

## node, express, jwt, ejs, api

https://youtu.be/ZDggvJSeSS4

[Ver proyecto en Github](https://github.com/fabnun/template-jwt-express-api)

El siguiente código un ejemplo de una API básica en Node utilizando Express, JsonWebToken (JWT) y Ejs. Esta API ofrece tres endpoints: /login, /logout y /sumar.

El endpoint /login recibe los datos de usuario y contraseña y verifica si son válidos. Si las credenciales son correctas, la API genera un token de autenticación JWT, lo devuelve y lo utiliza para las siguientes solicitudes.

El endpoint /logout requiere una validación de token, y si es exitosa, devuelve un mensaje de éxito.

El endpoint /sumar también requiere una validación de token, y si es exitosa, suma dos números y devuelve el resultado.

La API utiliza la biblioteca Ejs para renderizar un archivo HTML que muestra la lista de los endpoints disponibles y botones para llamarlos.

El código también incluye una función de validación de token (validateToken), que se utiliza para verificar si un token es válido antes de permitir el acceso a los endpoints que lo requieren.

### index.js (Servidor / Express)

```javascript
const jwt = require('jsonwebtoken');
const express = require('express');
const ejs = require('ejs');

// Inicia la aplicación
const app = express();

// Permite usar archivos estáticos de la carpeta public
app.use(express.static('public'));

// Renderiza archivos html de la carpeta views con ejs
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// Permite recibir datos en formato JSON
app.use(express.json());

// El home se renderiza con ejs, usando un titulo y un mensaje
app.get('/', function(req, res) {
  const titulo = 'Basic API (Node, Express, Jwt, Ejs)';
  res.render('index', {
    titulo: titulo,
    mensaje: `
    <h1>${titulo}</h1>
    <ul>
        <li><code>/login</code> iniciar sesión</li>
        <li><code>/logout</code> cerrar sesión</li>
        <li><code>/sumar</code> sumar dos números (requiere token valido)</li>
    </ul> 
  `,
  });
});

// API login
app.post('/login', (req, res) => {
  // Recibe los datos del usuario y la contraseña
  const { username, password } = req.body;
  // Verifica las credenciales con valores de ejemplo (deberia usar una base de datos y encriptar la contraseña)
  if (username === 'usuario' && password === 'contraseña') {
    // Genera el token de autenticación, usando el nombre de usuario como payload
    const token = jwt.sign({ username }, 'secret-key');
    // Devuelve el token
    res.json({ token });
  } else {
    // Devuelve un error si las credenciales son inválidas
    res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }
});

//API logout, requiere validar token
app.post('/logout', validateToken, (req, res) => {
  // Devuelve mensaje de exito
  res.json({ mensaje: 'Logout exitoso' });
});

//API sumar, requiere validar token
app.post('/sumar', validateToken, (req, res) => {
  // Recibe los datos del formulario
  const { num1, num2 } = req.body;
  // Suma los números
  const resultado = num1 + num2;
  // Devuelve el resultado
  res.json({ resultado });
});

// Función para validar el token
function validateToken(req, res, next) {
  // Obtiene el token del header de la petición
  const token = req.headers.authorization;
  try {
    // Verifica que el token sea del tipo Bearer
    if (token.startsWith('Bearer ')) {
      // Verifica que el token sea válido
      jwt.verify(token.substring(7), 'secret-key');
      // Continua con la petición
      next();
    } else {
      // Devuelve un error si el token no es del tipo Bearer
      res.status(401).json({ mensaje: 'Sin autorización, Token inválido' });
    }
  } catch (err) {
    // Devuelve un error si se genera un error al verificar el token
    res.status(401).json({ mensaje: 'Sin autorización, Token inválido' });
  }
}

// Inicia el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => console.log('http://localhost:' + port));
```

.Y este segundo código es un ejemplo de cómo llamar a la API desde el lado del cliente utilizando JavaScript.

La función login() realiza una solicitud POST al endpoint /login con las credenciales del usuario y contraseña en formato JSON. Si la respuesta es exitosa, el token de autenticación se guarda en el localStorage. Si hay un error, se muestra en la consola.

La función logout() realiza una solicitud POST al endpoint /logout con el token de autorización en el header. Si la respuesta es exitosa, el token se elimina del localStorage. Si hay un error, se muestra en la consola.

La función sumar() genera dos números aleatorios y realiza una solicitud POST al endpoint /sumar con el token de autorización en el header y los números a sumar en formato JSON en el cuerpo de la solicitud. Si la respuesta es exitosa, muestra el resultado en la consola. Si hay un error, se muestra en la consola.

### index.js (Cliente / JavaScript)

```javascript
// API login
const login = async () => {
  try {
    // Hace un post a /login, pasando el usuario y contraseña
    const resp = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'usuario', password: 'contraseña' }),
    });
    //Obtiene la respuesta en formato json
    const data = await resp.json();
    // Si la respuesta no es ok, lanza el error indicado en "mensaje"
    if (!resp.ok) {
      throw new Error(data.mensaje);
    }
    // Si login esta ok, guarda el token en el localStorage
    localStorage.setItem('token', data.token);
    // Muestra el mensaje de exito
    console.log('Login correcto, token guardado');
  } catch (error) {
    // Si hay error, lo muestra en la consola
    console.error(error.message);
  }
};

// API logout
const logout = async () => {
  try {
    // Hace un post a /logout, pasando el token de autorización
    const resp = await fetch('/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Bearer es el tipo de token que se usa, y el token se obtiene del localStorage
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    //Obtiene la respuesta en formato json
    const data = await resp.json();
    // Si la respuesta no es ok, lanza el error indicado en "mensaje"
    if (!resp.ok) {
      throw new Error(data.mensaje);
    }
    // Si logout esta ok, elimina el token del localStorage
    localStorage.removeItem('token');
    // Muestra el mensaje de exito
    console.log(data.mensaje);
  } catch (error) {
    // Si hay error, lo muestra en la consola
    console.error(error.message);
  }
};

// API sumar
const sumar = async () => {
  try {
    // numero aleatorio entre 0 y 10
    const num1 = Math.trunc(Math.random() * 10);
    // numero aleatorio entre 0 y 10
    const num2 = Math.trunc(Math.random() * 10);
    // Hace un post a /sumar, pasando el token de autorización y los numeros a sumar
    const resp = await fetch('/sumar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Bearer es el tipo de token que se usa, y el token se obtiene del localStorage
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ num1, num2 }),
    });
    //Obtiene la respuesta en formato json
    const data = await resp.json();
    // Si la respuesta no es ok, lanza el error indicado en "mensaje"
    if (!resp.ok) {
      throw new Error(data.mensaje);
    }
    // Si sumar esta ok, muestra el resultado
    console.log(`${num1} + ${num2} = ${data.resultado}`);
  } catch (error) {
    // Si hay error, lo muestra en la consola
    console.error(error.mensaje);
  }
};
```

Espero que este ejemplo sirva como introducción a la autenticación con JWT, cualquier duda, critica o comentario pueden dejarlo en los comentarios.
