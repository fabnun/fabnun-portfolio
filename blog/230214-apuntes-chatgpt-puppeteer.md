# Apuntes de Puppeteer

## puppeteer, javascript, web-scraping, automation, chat-gpt

_Esta documentación fue construida con la ayuda de [ChatGPT](https://chat.openai.com/) de OpenAI (la verdad es que ChatGPT la escribio y yo solo revice 😂)._

Puppeteer es una biblioteca de Node.js que permite controlar un navegador mediante código para realizar tareas de automatización web.

Instalación de Puppeteer:

```bash
npm install puppeteer
```

---

Ejemplo básico de cómo usar Puppeteer:

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(); //1
  const page = await browser.newPage(); //2
  await page.goto('https://www.example.com'); //3
  await page.screenshot({ path: 'example.png' }); //4
  await browser.close(); //5
})();
```

1.  Inicia un navegador 2. Abre una nueva página 3. Navega a https://www.example.com 4. Captura una captura de pantalla y la guarda en un archivo llamado example.png 5. Cierra el navegador.

---

Aquí tienes algunos métodos para interactuar con los elementos de la página:

```javascript
// Obtener un elemento por su selector CSS
const element = await page.$('#myElement');

// Obtener varios elementos por su selector CSS
const elements = await page.$$('.myElements');

// Hacer clic en un elemento
await element.click();

// Escribir texto en un elemento
await element.type('Hello, world!');

// Obtener el valor de un atributo de un elemento
const value = await element.getProperty('value').jsonValue();

// Obtener el texto de un elemento
const text = await element.evaluate((node) => node.innerText);
```

---

Puppeteer puede esperar a que ocurran ciertas cosas en la página antes de continuar:

```javascript
// Esperar a que la página cargue
await page.waitForNavigation();

// Esperar a que un elemento aparezca
await page.waitForSelector('#myElement');

// Esperar a que un elemento desaparezca
await page.waitForSelector('#myElement', { hidden: true });

// Esperar un tiempo específico
await page.waitForTimeout(1000);
```

---

Aquí tienes algunos eventos del navegador a los que puedes suscribirte:

```javascript
// Escuchar cuando se abre una nueva página
browser.on('targetcreated', (target) => {
  if (target.type() === 'page') {
    console.log('New page:', target.url());
  }
});

// Escuchar cuando se cierra una página
browser.on('targetdestroyed', (target) => {
  if (target.type() === 'page') {
    console.log('Page closed');
  }
});

// Escuchar cuando se produce un error en el navegador
browser.on('error', (error) => {
  console.error('Browser error:', error);
});
```

---

# Documentación detallada de Puppeteer

El objeto **_puppeteer_** es el punto de entrada a la biblioteca de Puppeteer. Contiene métodos para crear un navegador y conectarse a uno ya existente.

### **_puppeteer.launch([options])_**

Crea una instancia de un navegador Chromium y devuelve una promesa que se resuelve en una instancia de **_Browser_**.

Opciones admitidas:

- **_headless_** (boolean): si es **_true_**, el navegador se ejecutará en modo sin cabeza (es decir, sin interfaz gráfica de usuario). Por defecto es **_true_**.
- **_slowMo_** (number): ralentiza el navegador en milisegundos. Por defecto es **_0_**.
- **_devtools_** (boolean): si es **_true_**, abre las herramientas de desarrollo de Chromium. Por defecto es **_false_**.
- **_args_** (string\[\]): un array de argumentos de línea de comandos para pasar al navegador. Por defecto es **_[]_**.
- **_executablePath_** (string): la ruta al ejecutable de Chromium que se va a utilizar. Si no se especifica, Puppeteer buscará un ejecutable en el sistema.

```javascript
const puppeteer = require('puppeteer');

puppeteer
  .launch({
    headless: false,
    slowMo: 100,
    devtools: true,
    args: ['--disable-infobars'],
    executablePath: '/path/to/chromium',
  })
  .then((browser) => {
    // ...
  });
```

### **_puppeteer.connect([options])_**

Crea una conexión a una instancia ya existente de Chromium y devuelve una promesa que se resuelve en una instancia de **_Browser_**.

Opciones admitidas:

- **_browserURL_** (string): la URL a la que se debe conectar Puppeteer para conectarse al navegador existente. Esta URL debe estar en el formato **_ws://_** o **_wss://_**.
- **_browserWSEndpoint_** (string): el endpoint de WebSockets a través del cual Puppeteer puede conectarse al navegador existente.

```javascript
const puppeteer = require('puppeteer');

puppeteer
  .connect({
    browserURL: 'http://localhost:9222',
  })
  .then((browser) => {
    // ...
  });
```

---

El objeto **_browser_** representa una instancia de un navegador Chromium. Contiene métodos para crear nuevas páginas y controlar el navegador en sí mismo.

### **_browser.newPage()_**

Crea una nueva instancia de **_Page_** en el navegador y devuelve una promesa que se resuelve en la nueva página.

```javascript
const page = await browser.newPage();
```

### **_browser.pages()_**

Devuelve una promesa que se resuelve en un array de todas las instancias de **_Page_** abiertas en el navegador.

```javascript
const pages = await browser.pages();
```

### browser.close()

Cierra el navegador y todas las páginas que contiene.

```javascript
await browser.close();
```

### browser.on(event, callback)

Registra un **_callback_** para ser llamado cada vez que se produce el evento especificado.

Eventos admitidos:

- **_disconnected_**: se produce cuando la conexión entre Puppeteer y el navegador se pierde.
- **_targetcreated_**: se produce cuando se crea un nuevo objeto **_Target_** en el navegador

---

El objeto **_page_** representa una página web en el navegador. Contiene métodos para interactuar con la página, manipular su contenido y realizar capturas de pantalla.

### page.goto(url[, options])

Navega a la URL especificada y devuelve una promesa que se resuelve cuando la navegación ha terminado.

Opciones admitidas:

- **_timeout_** (number): el tiempo de espera en milisegundos antes de que la navegación falle. Por defecto es 30 segundos.
- **_waitUntil_** (string | string\[\]): una o varias cadenas que especifican cuándo considerar que la navegación ha terminado. Los valores admitidos son **_"load"_**, **_"domcontentloaded"_**, **_"networkidle0"_** y **_"networkidle2"_**. Por defecto es **_"load"_**.

```javascript
await page.goto('https://example.com');
```

### page.waitForSelector(selector[, options])

Espera a que el selector especificado esté presente en la página y devuelve una promesa que se resuelve cuando se encuentra.

Opciones admitidas:

- **_visible_** (boolean): si es **_true_**, espera a que el selector esté visible. Si es **_false_**, espera a que el selector exista en el DOM. Por defecto es **_false_**.
- **_hidden_** (boolean): si es **_true_**, espera a que el selector esté oculto. Por defecto es **_false_**.
- **_timeout_** (number): el tiempo de espera en milisegundos antes de que la espera falle. Por defecto es 30 segundos.

```javascript
await page.waitForSelector('#myElement');
```

### page.click(selector[, options])

Hace clic en el elemento especificado por el selector y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_button_** (string): el botón del ratón que se debe utilizar para hacer clic. Los valores admitidos son **_"left"_**, _**"right"**_ y **_"middle"_**. Por defecto es **_"left"_**.
- **_clickCount_** (number): el número de clics que se deben realizar. Por defecto es **_1_**.
- **_delay_** (number): el tiempo de espera en milisegundos antes de hacer clic en el elemento. Por defecto es **_0_**.

```javascript
await page.click('#myButton');
```

### page.type(selector, text[, options])

Escribe el texto especificado en el elemento especificado por el selector y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_delay_** (number): el tiempo de espera en milisegundos entre las pulsaciones de teclas. Por defecto es **_0_**.

```javascript
await page.type('#myInput', 'Hello, world!');
```

### page.screenshot([options])

Toma una captura de pantalla de la página y devuelve una promesa que se resuelve con los datos de la imagen en formato PNG.

Opciones admitidas:

- **_path_** (string): la ruta al archivo en el que se debe guardar la imagen.
- **_type_** (string): el formato de la imagen. Los valores admitidos son **_"jpeg"_** y **_"png"_**. Por defecto es **_"png"_**.
- **_quality_** (number): la calidad de la imagen en caso de que se utilice el formato JPEG. Por defecto es **_80_**.
- fullPage ...........

---

El objeto **_elementHandle_** representa un elemento en la página. Contiene métodos para interactuar con el elemento y obtener información sobre él.

### elementHandle.click([options])

Hace clic en el elemento y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_button_** (string): el botón del ratón que se debe utilizar para hacer clic. Los valores admitidos son **_"left"_**, **_"right"_** y **_"middle"_**. Por defecto es **_"left"_**.
- **_clickCount_** (number): el número de clics que se deben realizar. Por defecto es **_1_**.
- **_delay_** (number): el tiempo de espera en milisegundos antes de hacer clic en el elemento. Por defecto es **_0_**.

```javascript
const button = await page.$('#myButton');
await button.click();
```

### elementHandle.type(text[, options])

Escribe el texto especificado en el elemento y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_delay_** (number): el tiempo de espera en milisegundos entre las pulsaciones de teclas. Por defecto es **_0_**.

```javascript
const input = await page.$('#myInput');
await input.type('Hello, world!');
```

### elementHandle.getProperty(propertyName)

Obtiene la propiedad especificada del elemento y devuelve una promesa que se resuelve con su valor.

```javascript
const element = await page.$('#myElement');
const className = await element.getProperty('className');
console.log(className);
```

### elementHandle.boundingBox()

Obtiene las coordenadas del cuadro delimitador del elemento y devuelve una promesa que se resuelve con un objeto con las propiedades **_x_**, **_y_**, **_width_** y **_height_**.

```javascript
const element = await page.$('#myElement');
const box = await element.boundingBox();
console.log(box);
```

### elementHandle.screenshot([options])

Toma una captura de pantalla del elemento y devuelve una promesa que se resuelve con los datos de la imagen en formato PNG.

Opciones admitidas:

- **_path_** (string): la ruta al archivo en el que se debe guardar la imagen.
- **_type_** (string): el formato de la imagen. Los valores admitidos son **_"jpeg"_** y **_"png"_**. Por defecto es **_"png"_**.
- **_quality_** (number): la calidad de la imagen en caso de que se utilice el formato JPEG. Por defecto es **_80_**.
- **_omitBackground_** (boolean): si es **_true_**, no se incluye el fondo de la página en la captura de pantalla. Por defecto es **_false_**.

```javascript
const element = await page.$('#myElement');
const screenshot = await element.screenshot();
console.log(screenshot);
```

---

El objeto **_keyboard_** representa el teclado en el navegador. Contiene métodos para emular pulsaciones de teclas.

### keyboard.type(text[, options])

Escribe el texto especificado y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_delay_** (number): el tiempo de espera en milisegundos entre las pulsaciones de teclas. Por defecto es **_0_**.

```javascript
await page.keyboard.type('Hello, world!');
```

### keyboard.press(key[, options])

Simula la pulsación de una tecla y devuelve una promesa que se resuelve cuando se completa la acción.

**_key_** es una cadena que especifica la tecla a pulsar. Los valores admitidos son las teclas que aparecen en un teclado estándar, como **_"ArrowUp"_**, **_"Enter"_**, **_"Backspace"_**, etc. También se admiten códigos de tecla numéricos, como **_"\u0008"_** para **_"Backspace"_**. Puedes encontrar una lista completa de teclas en la [documentación de Puppeteer](https://pptr.dev/#?product=Puppeteer&version=v10.4.0&show=api-keyboardpresskey-options).

Opciones admitidas:

- **_delay_** (number): el tiempo de espera en milisegundos antes de soltar la tecla. Por defecto es **_0_**.

```javascript
await page.keyboard.press('ArrowDown');
```

### keyboard.up(key)

Simula la liberación de una tecla y devuelve una promesa que se resuelve cuando se completa la acción.

**_key_** es una cadena que especifica la tecla a liberar. Los valores admitidos son los mismos que para **_keyboard.press()_**.

```javascript
await page.keyboard.up('ArrowDown');
```

### keyboard.down(key)

Simula la pulsación de una tecla y devuelve una promesa que se resuelve cuando se completa la acción.

**_key_** es una cadena que especifica la tecla a pulsar. Los valores admitidos son los mismos que para **_keyboard.press()_**.

```javascript
await page.keyboard.down('Shift');
await page.keyboard.press('KeyA');
await page.keyboard.up('Shift');
```

---

El objeto **_mouse_** representa el ratón en el navegador. Contiene métodos para mover y hacer clic con el ratón.

### mouse.move(x, y[, options])

Mueve el ratón a las coordenadas especificadas y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_steps_** (number): el número de pasos intermedios que se deben realizar al mover el ratón. Por defecto es **_1_**.
- **_delay_** (number): el tiempo de espera en milisegundos entre cada paso intermedio. Por defecto es **_0_**.

```javascript
await page.mouse.move(100, 200);
```

### mouse.click(x, y[, options])

Hace clic con el ratón en las coordenadas especificadas y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_button_** (string): el botón del ratón que se debe utilizar para hacer clic. Los valores admitidos son **_"left"_**, **_"right"_** y **_"middle"_** . Por defecto es **_"left"_** .
- **_clickCount_** (number): el número de clics que se deben realizar. Por defecto es **_1_**.
- **_delay_** (number): el tiempo de espera en milisegundos antes de hacer clic con el ratón. Por defecto es **_0_**.

```javascript
await page.mouse.click(100, 200);
```

### mouse.down([options])

Mantiene presionado un botón del ratón y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_button_** (string): el botón del ratón que se debe mantener presionado.

Los valores admitidos son los mismos que para **_mouse.click()_**.

```javascript
await page.mouse.down();
```

### mouse.up([options])

Liberar el botón del ratón y devuelve una promesa que se resuelve cuando se completa la acción.

Opciones admitidas:

- **_button_** (string): el botón del ratón que se debe liberar. Los valores admitidos son los mismos que para **_mouse.click()_**.

```javascript
await page.mouse.up();
```

---

El objeto **_touchscreen_** representa una pantalla táctil en el navegador. Contiene métodos para simular eventos táctiles, como toques, desplazamientos y pellizcos.

### touchscreen.tap(x, y)

Simula un toque en las coordenadas especificadas y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.tap(100, 200);
```

### touchscreen.down(x, y)

Simula el inicio de un toque en las coordenadas especificadas y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.down(100, 200);
```

### touchscreen.move(x, y)

Simula el movimiento de un toque a las coordenadas especificadas y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.move(150, 250);
```

### touchscreen.up()

Simula el final de un toque y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.up();
```

### touchscreen.cancel()

Cancela el evento táctil actual y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.cancel();
```

### touchscreen.scroll(x, y)

Simula un desplazamiento en la pantalla táctil y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.scroll(0, 100);
```

### touchscreen.pinch(x, y)

Simula un pellizco en la pantalla táctil y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.pinch(100, 200);
```

### touchscreen.pinchMove(x, y, scale)

Simula un movimiento de pellizco en la pantalla táctil y devuelve una promesa que se resuelve cuando se completa la acción.

```javascript
await page.touchscreen.pinchMove(150, 250, 0.5);
```

---

El objeto **_coverage_** le permite recopilar información sobre el código que se ejecuta en la página. Puede recopilar información sobre el código JavaScript, CSS y de recursos.

### coverage.startJSCoverage([options])

Comienza a recopilar información de cobertura de código JavaScript y devuelve una promesa que se resuelve cuando la acción está completa. De forma predeterminada, se recopila información de cobertura para todo el código cargado en la página, pero se puede limitar a un solo archivo usando la opción **_resetOnNavigation_**.

Opciones admitidas:

- **_resetOnNavigation_** (boolean): si es **_true_**, se restablece la información de cobertura de código cada vez que se navega a una nueva URL. De forma predeterminada, es **_true_**.

```javascript
await page.coverage.startJSCoverage();
```

### coverage.stopJSCoverage()

Detiene la recopilación de información de cobertura de código JavaScript y devuelve una promesa que se resuelve con los datos de cobertura. Los datos de cobertura se presentan como una matriz de objetos que tienen las siguientes propiedades:

- **_url_** (string): la URL del archivo cubierto.
- **_text_** (string): el código fuente cubierto.
- **_ranges_** (array): una matriz de objetos que representan los rangos de código cubiertos. Cada objeto tiene las siguientes propiedades:
  - **_start_** (number): el índice del primer carácter del rango cubierto.
  - **_end_** (number): el índice del último carácter del rango cubierto.
  - **_count_** (number): el número de veces que se ejecutó el rango cubierto.

```javascript
const coverage = await page.coverage.stopJSCoverage();
console.log(coverage);
```

### coverage.startCSSCoverage([options])

Comienza a recopilar información de cobertura de código CSS y devuelve una promesa que se resuelve cuando la acción está completa. De forma predeterminada, se recopila información de cobertura para todo el código cargado en la página, pero se puede limitar a un solo archivo usando la opción **_resetOnNavigation_**.

Opciones admitidas:

- **_resetOnNavigation_** (boolean): si es **_true_**, se restablece la información de cobertura de código cada vez que se navega a una nueva URL. De forma predeterminada, es **_true_**.

```javascript
await page.coverage.startCSSCoverage();
```

### coverage.stopCSSCoverage()

Detiene la recopilación de información de cobertura de código CSS y devuelve una promesa que se resuelve con los datos de cobertura. Los datos de cobertura se presentan como una matriz de objetos que tienen las siguientes propiedades:

- **_url_** (string): la URL del archivo cubierto.
- **_ranges_** (array): una matriz de objetos que representan los rangos de código cubiertos. Cada objeto tiene las siguientes propiedades:
  - **_start_** (number): el índice del primer carácter del rango cubierto.
  - **_end_** (number): el índice del último carácter del rango cubierto.

```javascript
const coverage = await page.coverage.stopCSSCoverage();
console.log(coverage);
```

### coverage.startJSCoverage(options)

Comienza a recopilar información de cobertura de código JavaScript y devuelve
