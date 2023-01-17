import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import info from './info.js';

const pdf = (inicia, termina, error) => {
  inicia();
  const pdf = new jsPDF();
  // Agrega contenido HTML al PDF utilizando addHTML
  const htmlDoc = document.createElement('div');
  htmlDoc.className = 'pdf';
  htmlDoc.innerHTML = `
    <style>
      .pdf * {
          font-family: Times;
      }
      .pdf h1 {
          background-color: #ccc;
          padding: 8px;
          font-size: 24px;
          margin-bottom: 32px;
          text-align: center;
          font-weight: bold;
      }
      .pdf h2 {
        background-color: #ccc;
        padding: 8px;
        font-size: 20px;
        margin: 16px 0;
        font-weight: bold;
      }
      .pdf h3 {
        float:left;
        font-size: 16px;
        font-weight: bold;
      }
      .pdf p {
        font-size:16px;
        text-align: justify;
        padding: 0;
      }
      .pdf img {
          border-radius: 50%;
          margin:4px 16px 16px 0;
      }
      .pdf span {
        max-width: 128px;
        display: inline-block;
        text-align: center;
      }
      .pdf label {
        word-wrap: break-word;
        white-space: nowrap;
        padding: 8px;
        background-color: #ccc;
        border-radius: 2px 1px;
        margin: 0 8px 8px 0;
        display: inline-block;
      }
    </style>
    <p style="float:right">cv generado el ${new Date().toLocaleString()}</p>
    <br style="clear:both">
    <h1>Curriculum Vitae<br>${info.name}</h1>
    <img style="float:left;width:100px" src="${info.flat_picture}" />
    
    <p>${info.description}</p>
    <div style="clear:both;" id="qr-links"></div>
    <h2>Experiencia Laboral</h2>
      ${info.experience
        .map(
          (exp) => `
          <h3>${exp.name} - ${exp.position}</h3>
          <h3 style="float:right">${exp.date}</h3>
          <p style="clear:both">${exp.description}<br><br></p>
        `
        )
        .join('')}
        <br>
    <h2>Educación e Hitos Importantes</h2>
      ${info.education
        .map(
          (exp) => `
          <h3>${exp.name}</h3>
          <h3 style="float:right">${exp.date}</h3>
          <p style="clear:both">${exp.description}<br><br></p>
        `
        )
        .join('')}
    <h2>Habilidades</h2>
      ${info.skills
        .map(
          (skill) => `
          <h3 style="display:inline-block;padding-bottom:0px">${skill.title.trim()} :</h3><p>&nbsp;${skill.info.join(', ')}</p><br>
        `
        )
        .join('')}
    <h2>Proyectos</h2>
          
      ${info.portfolio
        .map(
          (project) => `
          <h3>${project.name} - ${project.date}</h3> : 
            ${project.project ? project.project + ' &nbsp; ' : ''}
            ${project.visit ? project.visit : ''}
          <br>
        `
        )
        .join('')}

    `;

  if (info.use_qrcore) {
    for (const link in info.linksCV) {
      const span = document.createElement('span');

      var canvas = document.createElement('canvas');
      QRCode.toCanvas(
        canvas,
        info.linksCV[link],
        {
          width: 132,
          height: 132,
        },
        function(error) {
          if (error) console.error(error);
        }
      );
      span.appendChild(canvas);
    }
    span.appendChild(document.createTextNode(link));
    htmlDoc.querySelector('#qr-links').appendChild(span);
  } else {
    for (const link in info.linksCV) {
      const label = document.createElement('label');
      label.innerHTML = info.linksCV[link];
      htmlDoc.querySelector('#qr-links').appendChild(label);
    }
  }
  //console.log(pdf.getFontList());
  pdf.setFont('Times'); // set custom font

  pdf.html(htmlDoc, {
    callback: function(doc) {
      const fecha = new Date();
      const fechaActual = fecha.getDate() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getFullYear();
      doc.save(info.name + ' CV ' + fechaActual + ' .pdf');
      termina();
    },
    x: 15,
    y: 15,
    html2canvas: {
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: './pdf/generate.pdf',
    },
    width: 180, //target width in the PDF document
    windowWidth: 800, //window width in CSS pixels
  });
};

export default pdf;
