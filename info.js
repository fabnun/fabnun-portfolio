let _pdf = undefined;

let info = {
  name: 'Fabián Edgardo Núñez Pérez',
  logo_name: 'fabnun',
  flat_picture: require('./src/assets/face.webp'),
  config: {
    show_blog: true,
    use_cookies: true,
    cv_qrcode: false,
    cv_image_style: 'border-radius: 50%;margin:0 16px 0 0;width:90px',
    navbar: {
      blur: true,
    },
  },
  description: 'Hola, soy Fabián Núñez, ingeniero civil en computación e informática egresado de la Universidad de Santiago de Chile, con ' + (new Date().getFullYear() - 2004) + ' años de experiencia en el desarrollo de software en diferentes lenguajes y plataformas.<br><br>Me considero una persona creativa con capacidades teóricas y prácticas que permiten abordar problemas complejos. Si pudiera elegir, me gustaría trabajar en el desarrollo de algoritmos o en frontend para proyectos del área educativa, ciencias, artes o videojuegos.<br><br>',
  description_cv: 'Ingeniero civil en computación e informática egresado de la Universidad de Santiago de Chile con ' + (new Date().getFullYear() - 2004) + ' años de experiencia en el desarrollo de software en diferentes lenguajes y plataformas.<br><br>Me considero una persona creativa con capacidades teóricas y prácticas que permiten abordar problemas complejos. Si pudiera elegir, me gustaría trabajar en el desarrollo de algoritmos o en frontend para proyectos del área educativa, ciencias, artes o videojuegos.',
  links: {
    cv: '/pdfs/CV - Fabián Edgardo Núñez Pérez (9-2-2023).pdf',
    email: 'mailto:fabnun@gmail.com',
    fono: 'tel:+569 4246 8328',
    linkedin: 'https://linkedin.com/in/fabnun',
    github: 'https://github.com/fabnun',
    instagram: 'https://instagram.com/fabnun',
  },
  linksCV: {
    portafolio: 'https://fabnun.web.app',
    linkedin: 'https://linkedin.com/in/fabnun',
    github: 'https://github.com/fabnun',
    email: 'fabnun@gmail.com',
    fono: '+569 4246 8328',
    //edad: 'Edad: ' + (new Date().getFullYear() - 1974) + ' años',
  },

  portfolio: [
    {
      name: 'Jobwus',
      pictures: [
        {
          img: require('./src/assets/portfolio/Jobwus/logo.webp'),
        },
        {
          youtube: 'https://www.youtube.com/embed/9nzzK7aE9wg',
        },
      ],
      technologies: ['Jobs', 'JavasScript', 'WebScraping', 'RegExp', 'Node', 'Vue2', 'Firebase', 'Html5', 'Css3', 'PWA'],
      category: 'Web App',
      // project: 'https://github.com/fabnun/vue-jobwus',
      date: 'octubre 2022',
      visit: 'https://jobwus.com',
      description: `Herramienta para organizar la búsqueda de ofertas laborales en portales de empleos en Chile. Las ofertas son extraídas, filtradas y agrupadas en los siguientes sectores laborales: 
      <a href='https://jobwus.com/info' target="_blank">Informática</a>,
      <a href='https://jobwus.com/profes' target="_blank">Profesores</a>,
      <a href='https://jobwus.com/sts' target="_blank">Trabajo Social</a> y 
      <a href='https://jobwus.com/compliance' target="_blank">Compliance</a>.
      <br>Las ofertas similares se agrupan usando <a href='https://github.com/stephenjjbrown/string-similarity-js' targer="_blank">string-similarity-js</a> y <a href='https://github.com/deestan/set-clustering' targer="_blank">set-clustering</a>. Este agrupamiento permite revisar las ofertas laborales de forma más eficiente, ya que podemos identificar las ofertas duplicadas o del mismo tipo.<br><br>
      Desgarga la versión para Android <a href='/apk/jobwus.0.7.5.apk' target="_blank">jobwus.0.7.5.apk</a>`,
    },

    {
      name: 'ConWords',
      pictures: [
        {
          img: require('./src/assets/portfolio/ConWords/logo.webp'),
        },
        {
          youtube: 'https://www.youtube.com/embed/iKCwpN4xuQw',
        },
        {
          youtube: 'https://www.youtube.com/embed/noc6wxkFXG4',
        },
        {
          img: require('./src/assets/portfolio/ConWords/1.webp'),
        },
        {
          img: require('./src/assets/portfolio/ConWords/2.webp'),
        },
        {
          img: require('./src/assets/portfolio/ConWords/3.webp'),
        },
        {
          img: require('./src/assets/portfolio/ConWords/4.webp'),
        },
      ],
      technologies: ['Colaborative', 'Crossword', 'Generator', 'VideoGame', 'JavasScript', 'Vue2', 'Firebase', 'Html5', 'Css3', 'CapacitorJS', 'html5Canvas', 'WebScraping', 'Genetic Algorithm', 'PWA'],
      category: 'Web App',
      date: 'Diciembre 2022',
      project: 'https://github.com/fabnun/conwords-generator',
      visit: 'https://conwords.app',
      description: `
      
      ConWords es un juego y editor de crucigramas online donde los usuarios pueden jugar, crear y compartir sus propios crucigramas. Actualmente, se pueden jugar las siguientes temáticas: <a target="_blank" href="https://conwords.app/#informatica">#informatica</a>, 
      <a target="_blank" href="https://conwords.app/#astronomia">#astronomia</a>,
      <a target="_blank" href="https://conwords.app/#ciencias">#ciencias</a>, 
      <a target="_blank" href="https://conwords.app/#niños">#niños</a>, 
      <a target="_blank" href="https://conwords.app/#miscelaneo">#miscelaneo</a>, 
      <a target="_blank" href="https://conwords.app/#castellano">#castellano</a>, 
      <a target="_blank" href="https://conwords.app/#ingles_español">#ingles_español</a>, 
      <a target="_blank" href="https://conwords.app/#español_ingles">#español_ingles</a>, 
      <a target="_blank" href="https://conwords.app/#idiomas">#idiomas</a>, 
      <a target="_blank" href="https://conwords.app/#mapudungun">#mapudungun</a>, 
      <a target="_blank" href="https://conwords.app/#adultos">#adultos</a><br><br>
      El algoritmo para la generación de crucigramas está disponible en <a target="_blank" href="https://github.com/fabnun/conwords-generator">github</a> y <a target="_blank" href="https://www.npmjs.com/package/conwords-generator">npm</a>.
      <br><br>
      Desgarga la versión para Android <a href='https://conwords.app/apk/conwords.0.8.2.apk' target="_blank">conwords.0.8.2.apk</a>
      `,
    },
    {
      name: 'ProgramaGol',
      pictures: [
        {
          img: require('./src/assets/portfolio/PGol/logo.webp'),
        },
        {
          youtube: 'https://www.youtube.com/embed/pwPAasG_qmY',
        },
        {
          img: require('./src/assets/portfolio/PGol/pgol0.webp'),
        },
        {
          img: require('./src/assets/portfolio/PGol/pgol1.webp'),
        },
        {
          img: require('./src/assets/portfolio/PGol/pgol2.webp'),
        },
        {
          img: require('./src/assets/portfolio/PGol/pgol3.webp'),
        },
      ],
      technologies: ['ELearning', 'Soccer', 'JavasScript', 'VideoGame', 'Firebase', 'Html5', 'Css3', 'Web Workers'],
      category: 'Web App',
      date: 'Diciembre 2020',
      visit: 'https://programagol.com',
      description: 'ProgramaGol es una plataforma educativa en línea que une la enseñanza de JavaScript con desafíos lúdicos en un videojuego de fútbol. Este proyecto ha recibido el apoyo de inversión del Capital Semilla de Corfo en 2020 y del programa Google for Startups en 2022.',
    },
    {
      name: 'JavaCup JavaHispano',
      pictures: [
        {
          img: require('./src/assets/portfolio/JavaCup/logo.webp'),
        },
        {
          youtube: 'https://www.youtube.com/embed/hJdcK9MexOI',
        },
        {
          img: require('./src/assets/portfolio/JavaCup/3.webp'),
        },
        {
          img: require('./src/assets/portfolio/JavaCup/4.webp'),
        },
        {
          img: require('./src/assets/portfolio/JavaCup/5.webp'),
        },
      ],
      technologies: ['ELearning', 'Soccer', 'Java', 'VideoGame', 'Java Swing', 'Slick2D', 'PixiJs', 'Google App Engine'],
      category: 'Desktop App',
      date: ' Agosto 2007 - Agosto 2013',
      project: 'https://code.google.com/archive/p/javacup-javahispano',
      visit: 'http://www.javahispano.org/portada/tag/javacup',
      description: `

      La JavaCup de JavaHispano fue un torneo de programación en lenguaje Java que se desarrolló entre el 2007 y 2013, donde los participantes del torneo implementaban una sencilla interfaz Java para definir la lógica de un equipo de futbol.<br><br>
      
      El framework y la idea original fue obra de Jorge Rubira, luego desde el 2009 al 2013 Fabián Núñez actualizo el framework, luego Alfonso Dou Oblanca desarrollo la <a target='_blank' href='http://javaleague.appspot.com/'>JavaLeague</a>  y las últimas modificaciones las realizo Víctor Gavilán.<br><br>
      
      <a target='_blank' href="https://github.com/alfonsodou/javaCup">javaCup en GitHub</a><br>
      <a target='_blank' href="https://github.com/alfonsodou/javaCup">javaLeague en GitHub</a><br>
      <a target='_blank' href="https://www.beqbe.com/javacup-torneo-de-futbol-virtual">Más información</a>
      `,
    },
    {
      name: 'fabnun-portfolio',
      pictures: [
        {
          img: require('./src/assets/portfolio/fabnun-portfolio/logo.webp'),
        },
        {
          img: require('./src/assets/portfolio/fabnun-portfolio/0.webp'),
        },
        {
          img: require('./src/assets/portfolio/fabnun-portfolio/2.webp'),
        },
        {
          img: require('./src/assets/portfolio/fabnun-portfolio/1.webp'),
        },
        {
          img: require('./src/assets/portfolio/fabnun-portfolio/3.webp'),
        },
      ],
      technologies: ['github', 'fork', 'portfolio', 'Vue2', 'JavasScript', 'Node', 'Firebase', 'Html5', 'Css3', 'jspdf', 'qrcode'],
      category: 'Web App',
      date: ' Enero 2023',
      project: 'https://github.com/fabnun/fabnun-portfolio',
      description: 'Portafolio web desarrollado en VUE2 y alojado en FIREBASE. Se realizó una optimización de la configuración y de la carga de recursos, se eliminaron secciones y librerías. Se agregó la funcionalidad de generar automáticamente el CV en formato PDF desde los mismos datos (JSON) que generan la página.<br><br>El proyecto esta ajojado en <a target="_blank" href="https://github.com/fabnun/fabnun-portfolio">fabnun-portfolio</a> y es fork de <a href="https://github.com/hrishikeshpaul/portfolio-template" target="_blank">portfolio-template</a>',
    },
    {
      space: 90,
    },
    {
      name: 'KCMS',
      pictures: [
        {
          img: require('./src/assets/portfolio/kcms/logo.webp'),
        },
        {
          img: require('./src/assets/portfolio/kcms/0.webp'),
        },
        {
          img: require('./src/assets/portfolio/kcms/1.webp'),
        },
        {
          img: require('./src/assets/portfolio/kcms/2.webp'),
        },
        {
          img: require('./src/assets/portfolio/kcms/3.webp'),
        },
        {
          img: require('./src/assets/portfolio/kcms/4.webp'),
        },
        {
          img: require('./src/assets/portfolio/kcms/6.webp'),
        },
        {
          img: require('./src/assets/portfolio/kcms/7.webp'),
        },
      ],
      technologies: ['Java', 'CMS', 'Google App Engine', 'DataStore', 'objectify', 'BeanShell', 'Scriplets', 'Html5', 'Css3', 'WebDesign'],
      category: 'Web App',
      date: 'Enero 2014',
      project: 'https://github.com/fabnun/kcms',
      description: `KCMS fue un sistema de gestión de contenidos desarrollado para Google App Engine (Java) con acceso al almacenamiento en DataStore. Tenía un funcionamiento similar a los Scriplets JSP mediante el uso de BeanShell. La información se organizaba en tablas, donde las columnas podían ser de diferentes tipos, como imágenes, texto o texto enriquecido. Lo utilicé ampliamente en el desarrollo y administración de sitios web.`,
    },
    {
      name: 'ImprentaGes',
      pictures: [
        {
          img: require('./src/assets/portfolio/ImprentaGes/logo.webp'),
        },

        {
          img: require('./src/assets/portfolio/ImprentaGes/1.webp'),
        },
        {
          img: require('./src/assets/portfolio/ImprentaGes/2.webp'),
        },
        {
          img: require('./src/assets/portfolio/ImprentaGes/3.webp'),
        },
        {
          img: require('./src/assets/portfolio/ImprentaGes/4.webp'),
        },
      ],
      technologies: ['Windows', 'POS', 'Java', 'Desktop App', 'PostgreSQL', 'Java Swing'],
      category: 'Desktop App',
      date: ' Agosto 2007',
      project: 'https://github.com/fabnun/ImprentaGes',
      //visit: 'http://www.javahispano.org/portada/tag/javacup',
      description: `ImprentaGes es una aplicación POS (punto de ventas) para Windows desarrollada con Java y PostgreSQL. La aplicación permite gestionar órdenes de trabajo, boletas, facturas, productos, impresoras, cajas, usuarios, permisos de acceso, etc. Fue pensada para ser usada en imprentas, pero eso no impide que se pueda usar en otro tipo de negocio.<br><br>
      El <a href='https://github.com/fabnun/ImprentaGes/tree/main/src' target='_blank'>código fuente</a>, como los <a href='https://github.com/fabnun/ImprentaGes/tree/main/portable' target='_blank'>instalables</a> y un <a href='https://github.com/fabnun/ImprentaGes/blob/main/borrador%20manual.pdf' target='_blank'>manual</a> están disponibles en <a href='https://github.com/fabnun/ImprentaGes' target='_blank'>GitHub</a><br>`,
    },
    {
      name: 'KVentas',
      pictures: [
        {
          img: require('./src/assets/portfolio/KVentas/logo.webp'),
        },
        {
          youtube: 'https://www.youtube.com/embed/mOSZYswDCnM',
        },
        {
          youtube: 'https://www.youtube.com/embed/ooyWV7Kayf8',
        },
        {
          youtube: 'https://www.youtube.com/embed/ErzKDR4x5nA',
        },
      ],
      technologies: ['Windows', 'POS', 'Java', 'Desktop App', 'PostgreSQL', 'Java Swing'],
      category: 'Desktop App',
      date: ' Agosto 2007',
      project: 'https://github.com/fabnun/KVentas',
      description: 'KVentas es una aplicación POS (punto de ventas) para Windows desarrollada con Java y PostgreSQL. La aplicación permite gestionar órdenes de cotizaciones, boletas, facturas, contabilidad, productos, impresoras, cajas, usuarios, permisos de acceso, etc. Fue pensada para ser usada en una distribuidora de papeles, pero eso no impide que se pueda usar en otro tipo de negocio.',
    },
  ],
  skills: [
    {
      title: 'Lenguajes de programacíon y Estándares',
      info: ['Javascript', 'Java', 'C', 'C++', 'Dart', 'SQL', 'NoSQL', 'HTML5', 'CSS3', 'RegExp'],
      icon: 'embed',
    },

    {
      title: 'Frameworks y APIs',
      info: ['Vue', 'Nuxt', 'Flutter', 'Bootstrap', 'Java Swing', 'Web Workers', 'Html5 Canvas', 'PixiJs', 'TreeJs', 'CapacitorJS'],
      icon: 'cube',
    },
    {
      title: 'Base de Datos',
      info: ['PostgreSQL', 'MySQL', 'MongoDB', 'Google Datastore', 'Firestore', 'IndexedDB', 'LocalStorage'],
      icon: 'database',
    },
    {
      title: 'Sistemas Operativos y Plataformas Cloud',
      info: ['Windows', 'Ubuntu', 'Debian', 'Android', 'GCP', 'Firebase'],
      icon: 'tools',
    },
    {
      title: 'IDEs y Editores',
      info: ['VSCode', 'Eclipse', 'Netbeans', 'Android Studio', 'Photoshop', 'Premiere', 'Gimp', 'Inkscape', 'VSDC Video Editor'],
      icon: 'pencil',
    },
    {
      title: 'Idiomas, Metodologías, Paradigmas y Herramientas',
      info: ['Inglés escrito', 'UML', 'SCRUM', 'KanBan', 'POO', 'Git', 'Node', 'NPM'],
      icon: 'cogs',
    },
  ],
  experience: [
    {
      name: 'FREELANCE · Autónomo',
      date: 'Marzo 2021 - Actualidad',
      position: 'Desarrollo de Software',
      description: 'Trabajo freelance en aplicaciones web, aplicaciones híbridas, sitios web y aplicaciones java. Mantenimiento de sistemas existentes. Desarrollo de proyectos personales. Me capacito en nuevas tecnologías como Vue, Nuxt, Flutter, GCP, PWA, etc.',
      skills: ['Trabajo Remoto', 'Capacitación', 'Vue', 'NUXT', 'React', 'Flutter', 'Bootstrap', 'Javascript', 'Dart', 'HTML5', 'CSS3', 'Web Workers', 'Html5 Canvas', 'PixiJs', 'MongoDB', 'PostgreSQL', 'GCP', 'Firebase', 'Firestore', 'IndexedDB', 'SCRUM', 'KanBan', 'Git', 'Node', 'NPM', 'CapacitorJS', 'PWA'],
    },
    {
      name: 'PROGRAMAGOL · Autónomo',
      date: 'Diciembre 2019 - Noviembre 2020',
      position: 'Gerencia y Desarrollo de Software',
      description: 'Funciones de gerencia y desarrollo de software en la implementación de un MVP para ProgramaGol, una plataforma educativa en línea que une la enseñanza de JavaScript con desafíos lúdicos en un videojuego de fútbol. Este proyecto ha recibido el apoyo de inversión del Capital Semilla de Corfo en 2020 y del programa Google for Startups en 2022.',
      skills: ['Trabajo Remoto', 'Gerencia', 'ELearning', 'MVP', 'Capital Semilla', 'Google for Startups', 'JavasScript', 'VideoGame', 'Firebase', 'Html5', 'Css3', 'Web Workers', 'PWA'],
    },
    {
      name: 'ESINFA',
      date: 'Enero 2016 - Noviembre 2019',
      position: 'Desarrollo de Software',
      description: 'Desarrollo de software de procesamiento de datos para sistemas de monitoreo continuo de emisiones (CEMS) y la generación de informes conforme a la normativa vigente, aplicando la sustitución de datos según lo especificado por el Código de Regulación Federal Título 40 Parte 75 de la Agencia Medioambiental de los Estados Unidos (EPA 40 CFR parte 75). Además, se implementaron rutinas para los chequeos diarios de los equipos y mantenimientos preventivos, permitiendo la visualización de valores y gráficos históricos e instantáneos. Adaptación del software para diferentes requerimientos de los clientes. Visitas a terreno para instalación y configuración de equipos. Desarrollos y mantenimiento de intranet y del sitio web.',
      skills: ['CEMS', 'PLC', 'OPC', 'Modbus', 'HMI', 'Java', 'Jetty', 'JavaScript', 'Google App Engine', 'Firebase', 'HTML5', 'CSS3', 'MySQL', 'MongoDB'],
    },
    {
      name: 'KREADI · Autónomo',
      date: 'Enero 2010 - Enero 2016',
      position: 'Gerencia y Desarrollo de Software',
      description: 'Funciones de gerencia y desarrollo de software en KREADI. Desarrollo de CMS basado en Google App Engine (Java) que permitió construir y mantener sitios web de clientes. Desarrollo del framework de javaCup y un visor de partidos WebGl para javaCup 2013. Creación de un motor de videojuegos en html5 canvas y un editor de escenarios en java para los concursos Square Enix Latin America Game 2012 y LG SmartTV 2012. Desarrolló de aplicaciones y webcrawlers para la extracción, procesamiento de ofertas laborales y licitaciones en Mercado Público.',
      skills: ['Trabajo Remoto', 'Gerencia', 'Java', 'JavaScript', 'Google App Engine', 'Firebase', 'HTML5', 'CSS3', 'MySQL', 'MongoDB', 'Inkscape', 'Gimp', 'SCRUM', 'KanBan', 'Git', 'VideoGame'],
    },
    {
      name: 'OS.ONE',
      date: 'Mayo 2009 - Diciembre 2009',
      position: 'Desarrollo de Software',
      description: 'Trabajo como analista programador en OS1, participé en la configuración y administración de Petals ESB para un proyecto en CAT Chile. También, desarrollé una aplicación para generar archivos de configuració de Petals ESB. ',
      skills: ['SCRUM', 'Petals ESB', 'Java', 'Java Swing', 'Tomcat', 'Jetty', 'SQL Server'],
    },
    {
      name: 'INDRA',
      date: 'Enero 2008 - Abril 2009',
      position: 'Desarrollo de Software',
      description: 'Analista programador en Indra Chile para Telefónica Chile, administración y soporte para proyectos Portal de Proveedores, Proyecto Autentica y Proyecto Control de Mando. También, se realizó optimización de procesos en la aplicación Coordinador y mantenimiento de otras aplicaciones web.',
      skills: ['Java', 'JSP', 'PHP', 'Struts', 'Tomcat', 'SQL Server', 'UML'],
    },
    {
      name: 'TELEFONICA',
      date: 'Enero 2006 - Diciembre 2007',
      position: 'Desarrollo de Software',
      description: 'Analista programador en Telefónica Chile, creación y actualización de aplicaciones de intranet, desarrollo de encuesta 360° y del sistema global pago de comisiones SUCOM donde se implementó un lenguaje simple para la codificación y actualización de criterios de comisión.',
      skills: ['Java', 'JavaCC', 'Java Swing', 'Java Dynamic Execution', 'WebSphere', 'JSP', 'Struts', 'Tomcat', 'SQL Server', 'UML'],
    },
    {
      name: 'EJE DIGITAL',
      date: 'mar. 2004 - ago. 2005',
      position: 'Desarrollo de Software',
      description: 'Analista programador en Eje Digital, desarrollo y mantenimiento de aplicaciones web, generación de documentación UML de proyectos existentes.',
      skills: ['Java', 'WebSphere', 'JSP', 'Struts', 'Tomcat', 'SQL Server', 'Visual Basic', 'UML'],
    },
    {
      space: 20,
    },
  ],
  education: [
    {
      name: 'GOOGLE FOR STARTUPS',
      date: '2022',
      description: 'ProgramaGol ingresa al programa de Google for Startups.',
    },
    {
      name: 'CAPITAL SEMILLA DE CORFO',
      date: '2019',
      description: 'ProgramaGol obtiene el financiamiento del Capital Semilla de CORFO.',
    },
    {
      name: 'FRAMEWORK JAVACUP DE JAVAHISPANO',
      date: '2009 - 2013',
      description: 'Desarrollo de la nueva versión del framework, gestión de foros y ejecución del torneo de programación de futbol virtual JavaCup de JavaHispano.',
    },
    {
      name: 'TORNEO JAVACUP DE JAVAHISPANO',
      date: '2007',
      description: 'Campeón del torneo de programación de futbol virtual JavaCup de JavaHispano.',
    },
    {
      name: 'UNIVERSIDAD DE SANTIAGO DE CHILE',
      date: '1996 - 2002',
      description: 'Egresado de Ingeniería Civil en Computación e Informática.',
    },

    {
      name: 'UNIVERSIDAD DE CHILE',
      date: '1992 - 1995',
      description: 'Ingeniería Civil en Computación e Informática (no terminado).',
    },
    {
      name: 'PRUEBA DE APTITUD ACADÉMICA Y PRUEBAS ESPECÍFICAS',
      date: '1991',
      description: 'Obtengo puntaje nacional en la prueba de aptitud académica de matemáticas y en la específica de física.',
    },
    {
      name: 'LICEO MANUEL ARRIARAN BARROS',
      date: '1987 - 1991',
      description: '8º Básico y Educación Media.',
    },
  ],

  pdf: (inicia, termina, error) => {
    //Carga dinamica de funcion pdf()
    if (_pdf === undefined) {
      import('./pdf').then((module) => {
        _pdf = module.default;
        info.pdf(inicia, termina, error);
      });
    } else {
      _pdf(inicia, termina, info);
    }
  },
};

export default info;
