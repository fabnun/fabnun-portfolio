const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { encode } = require('html-entities');
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  //console.log('href', href, 'title', title, 'text', text);
  //si el href es un video de youtube, lo reemplazo por un iframe
  let videoId, match;
  if ((match = href.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i))) {
    videoId = match[1];
  }
  if (videoId) {
    return `<div style="position: relative;padding-bottom: 56.25%;"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?rel=0&amp;controls=1&amp;mute=0&amp;showinfo=0&amp;version=3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="border-radius:8px;position: absolute;top: 0;left: 0;width: 100%;height: 100%;" allowfullscreen></iframe></div>
    `;
  } else return '<a' + (href[0] !== '/' ? ' target="_blank"' : '') + ' href="' + href + '" title="' + (title ? title : href[0] !== '/' ? ' abrir en pestaña ' + href : ' abrir ' + href) + '">' + text + '</a>';
};

renderer.code = function(code, language) {
  return `<pre>${language}:<button onclick="copy(event)" style="float:right;color:yellow;font-weight:bolder;background:transparent;border:none;outline:none;">copiar</button><code class="language-${language}">${encode(code)}</code></pre>`;
};

marked.setOptions({
  lexer: marked.lexer,
  parser: marked.Parser,
});

let timer = [];
const debounce = (fn, delay, id = 0) => {
  if (timer[id]) {
    clearTimeout(timer[id]);
    delete timer[id];
    //console.log('clear debounce', id, timer.length);
  }
  return function() {
    timer[id] = setTimeout(() => {
      fn.apply(this, arguments);
      delete timer[id];
      //console.log('clear debounce', id, timer.length);
    }, delay);
    //console.log('debounce', id, timer.length);
  };
};

//-------------------- UPDATE TIME --------------------
function updateTime() {
  setTimeout(() => {
    const updateTime = '' + Date.now();
    fs.writeFile(path.join(__dirname, './public/blog/updateTime'), updateTime, (error) => {});
  }, 250);
}

let blogArray = undefined;
//-------------------- BLOG.JS --------------------
function blogJS() {
  const code = `const blog = ${JSON.stringify(blogArray, null, 2)};export default blog;`;
  fs.writeFile(path.join(__dirname, './blog.js'), code, (error) => {
    if (error) {
      console.log('Error generando el archivo blog.js', error);
    } else {
      updateTime();
    }
  });
}

//-------------------- HTML --------------------
//TODO: Solo actualizar los archivos que han cambiado, incluir copiar imagenes, (imagen principal: se muestra en el listado), mostrar y filtrar por tags, agregar un buscador de texto... integrar con nuxt.
const now = Date.now();
const mdPath = path.join(__dirname, './blog');
async function htmlUpdate() {
  if (blogArray === undefined) {
    let blogStr = await fs.promises.readFile(path.join(__dirname, './blog.js'), 'utf-8');
    blogStr = blogStr.substring(blogStr.indexOf('['), blogStr.lastIndexOf(']') + 1);
    blogArray = JSON.parse(blogStr);
  }
  const htmlPath = path.join(__dirname, './public/blog');
  fs.readdir(mdPath, function(err, files) {
    const markdownFiles = files.filter((file) => file.endsWith('.md'));
    for (let file of markdownFiles) {
      const dateString = file.substring(0, 6);
      const date = dateString.substring(4, 6) + '/' + dateString.substring(2, 4) + '/' + dateString.substring(0, 2);
      const uri = file.substring(7, file.length - 3);
      fs.readFile(path.join(mdPath, file), 'utf-8', function(err, data) {
        const old = blogArray.find((item) => item.url === uri);
        if (data.length === old?.size) {
          return;
        }

        let tokens = marked.lexer(data);
        //console.log(tokens);
        if (tokens.length < 3) {
          console.error('Blog Error -> ', file, '. Debe tener: # título, ## tags y contenido');
          return;
        }

        if (tokens[0].type === 'heading' && tokens[0].depth === 1) {
          var title = tokens[0].text;
        } else {
          console.error('Blog Error -> ', file, '. El primer elemento debe ser (#)');
          return;
        }

        if (tokens[1].type === 'heading' && tokens[1].depth === 2) {
          var tags = tokens[1].text
            .toLocaleLowerCase()
            .replace(/\s/g, '')
            .split(',');
        } else {
          console.error('Blog Error -> ', file, '. El segundo elemento debe ser (##) con una lista de tags separados por comas');
          return;
        }
        tokens = tokens.slice(2);

        const htmlContent = marked.parser(tokens, { renderer });
        const html = `
        <!DOCTYPE html>
        <html lang="es">
        
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="author" content="Fabián Núñez" />
            <meta name="description" content="Portafolio, Curriculum y Blog de Fabián Núñez" />
            <base href="/" />
            <link rel="icon" href="/icon.svg" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap" />
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" crossorigin="anonymous" />
            <link rel="stylesheet" href="/blog/style.css?v=${now}">
            <link rel="stylesheet" href="/blog/normalize.css?v=${now}">
            <link rel="stylesheet" href="/blog/styles/paraiso-dark.min.css">
            <link rel="stylesheet" href="/blog/md.css?v=${now}">
            <script src="/blog/highlight.min.js"></script>
            
            <style>
              #idc-container-parent{
                display: none;
              }
            </style>
            <title>${title}</title>
          </head>
          <body>
            
            <div class="header">
              <div class="container">
                <div style="float: right;width: 90px;">
                  <span class="date">${date}</span><br>
                  <a class="date" href="/blog/">< Volver</a>
                </div>
                <h1 style="margin-top:0;font-size:28px">${title}</h1>
                <hr>
                <h3>TAGS: ${tags.join(', ')}</h3>
              </div>
            </div>
            <div class="container">
              
              <div class="row">
                <div id="app" class="md col-12">

${htmlContent}


                </div>
              </div>
            </div>
            <span id="IDCommentsPostTitle" style="display:none"></span>
          </body>
          
          <script>

            async function copy(event) {
              try {
                const code=event.target.parentElement.children[1].innerText
                await navigator.clipboard.writeText(code);
                alert('Texto copiado al portapapeles.');
              } catch (err) {
                alert('Error al copiar texto al portapapeles: '+ err.message);
              }
            }
            var idcomments_acct = '7133cfcf914d938be0f4d8672fffda74';
            var idcomments_post_id;
            var idcomments_post_url;
            if(window.location.port==="8080"){
              let lastTime=window.localStorage.getItem('lastTime')||"0";
              setInterval(async () => {
                const resp=await fetch("/blog/updateTime?timestamp="+Date.now(),{
                  method: 'get'
                });
                const updateTime=await resp.text();
                if(updateTime!==lastTime){
                  console.log(lastTime, updateTime);
                  lastTime=updateTime;
                  window.localStorage.setItem('lastTime',lastTime);
                  window.location.reload();
                }
              }, 1000);
            }
          </script>
          <script type="text/javascript" src="https://www.intensedebate.com/js/genericCommentWrapperV2.js"></script>
          <script>
          const interval=setInterval(() => {
            const div=document.getElementById('idc-container-parent')
            if (div?.style){
              div.style.display='block';
              clearInterval(interval);
            }
          }, 200);
          document.querySelectorAll('.language-javascript,.language-html,.language-css,.language-java').forEach((el) => {
            hljs.highlightElement(el);
          });
          </script>
        </html>
      `;
        fs.writeFile(path.join(htmlPath, uri), html, (error) => {
          if (error) {
            console.log('Error generando el archivo', uri, error);
          }
        });
        //get index of blogArray with same url
        const index = blogArray.findIndex((blog) => blog.url === uri);
        const objectEdit = {
          date,
          dateTime: parseInt(dateString),
          title,
          tags,
          size: data.length,
          url: uri,
          fixed: false,
        };
        if (index > -1) {
          blogArray[index] = objectEdit;
        } else {
          blogArray.push(objectEdit);
        }
        console.log('Blog Atualizado -> ', file);
        debounce(blogJS, 1000, 'blog')();
      });
    }
  });
}
fs.watch(mdPath, () => {
  debounce(htmlUpdate, 250, 'html')();
});
