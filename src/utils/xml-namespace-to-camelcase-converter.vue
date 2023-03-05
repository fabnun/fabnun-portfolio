<template>
  <div class="container text-center">
    <h2 class="mt-5">XML NameSpace to CamelCase Converter</h2>
    <button class="m-5 p-5" @click="loadSVG" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop">Click or Drag<br />to load your SVG file</button>
    <br />
    <a href="/blog/xml-namespace-to-camelcase-converter">View blog post</a><br />
    <a href="https://github.com/fabnun/fabnun-portfolio/blob/main/src/utils/xml-namespace-to-camelcase-converter.vue" target="_blank">View converter in github</a>
  </div>
</template>
<script>
const xml2js = require('xml-js');
export default {
  metaInfo: {
    title: 'XML NameSpace to CamelCase Converter',
  },
  name: 'XmlConverter',
  data() {
    return {};
  },
  methods: {
    loadSVG() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/svg+xml';
      input.onchange = (e) => {
        const file = e.target.files[0];
        this.readFile(file);
      };
      input.click();
    },
    onDragOver(event) {
      event.preventDefault();
      this.dragging = true;
    },
    onDragLeave(event) {
      event.preventDefault();
      this.dragging = false;
    },
    onDrop(event) {
      event.preventDefault();
      this.dragging = false;

      const file = event.dataTransfer.files[0];

      this.readFile(file);
    },
    readFile(file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const xml = event.target.result;
        const fnNameSpace2CamelCase = (val) => {
          if (val.indexOf(':') > -1) {
            const parts = val.split(':');
            return parts[0] + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
          } else {
            return val;
          }
        };
        const options = {
          ignoreComment: true,
          elementNameFn: fnNameSpace2CamelCase,
          attributeNameFn: fnNameSpace2CamelCase,
        };
        const result = xml2js.xml2js(xml, options);
        const xmlModified = xml2js.js2xml(result);
        //Save file
        const blob = new Blob([xmlModified], { type: 'text/plain' });
        const link = document.createElement('a');
        const fileName = file.name.split('.')[0] + '-converted.svg';
        link.download = fileName;
        link.href = URL.createObjectURL(blob);
        link.click();
      };
      reader.readAsText(file);
    },
  },
};
</script>
<style scoped>
button {
  border: none;
  outline: none;
  background-color: #f1f1f1;
  border-radius: 4px;
}
</style>
