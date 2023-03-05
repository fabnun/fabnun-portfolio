# Conversor de namespaces a camelCase en XML

## xml,namespace,camelcase,converter,react,svg,xml-js

Cuando trabajamos con archivos SVG en React, es probable que nos ocurra el siguiente error:

```error
SyntaxError: unknown file: Namespace tags are not supported by default. React's JSX doesn't support namespace tags. You can set `throwIfNamespace: false` to bypass this warning.
```

Este error surge debido a que React JSX no admite componentes que utilizan namespaces en etiquetas o atributos.

En mi caso, me topé con este problema cuando edité un archivo SVG en Inkscape. Afortunadamente, existe una solución sencilla para este problema: convertir los namespaces a formato camelCase.

Ejemplo: sketch:type -> sketchType

Para llevar a cabo esta solución, utilizaremos la librería [xml-js](https://www.npmjs.com/package/xml-js), una librería que nos permite convertir xml a json y viceversa. Asi que comenzemos instalando xml-js:

```bash
npm i xml-js
```

y lo usamos de la siguiente forma:

```javascript
const xml2js = require('xml-js');

//XML DE EJEMPLO
const xml = `
<foo:root xmlns:foo="http://ex.com/foo">
  <noChange>value1</noChange>
  <foo:elem>value2</foo:elem>
</foo:root>
`;

//FUNCION PARA CONVERTIR UN NAMESPACE A FORMATO CAMELCASE
const fnNameSpace2CamelCase = (val) => {
  if (val.indexOf(':') > -1) {
    const parts = val.split(':');
    return parts[0] + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  } else {
    return val;
  }
};

//OPCIONES PARA XML2JS
const options = {
  ignoreComment: true,
  //CONVIERTE LOS ELEMENTOS
  elementNameFn: fnNameSpace2CamelCase,
  //CONVIERTE LOS ATRIBUTOS
  attributeNameFn: fnNameSpace2CamelCase,
};

//CONVERTIMOS XML A JSON APLICANDO LAS OPCIONES ANTERIORES
const result = xml2js.xml2js(xml, options);
//Y LUEGO VOLVEMOS A CONVERTIR EL JSON A XML
const xmlModified = xml2js.js2xml(result);
console.log(xmlModified);
```

Ahora, si quieres ahorrarte el trabajo, puedes usar el siguiente conversor online que construí en:

[fabnun.web.app/xml-namespace-to-camelcase-converter](/xml-namespace-to-camelcase-converter)

[Conversor en github](https://github.com/fabnun/fabnun-portfolio/blob/main/src/utils/xml-namespace-to-camelcase-converter.vue)
