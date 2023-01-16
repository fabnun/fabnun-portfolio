import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import info from './info.js';

const pdf = () => {
  const pdf = new jsPDF();
  // Agrega contenido HTML al PDF utilizando addHTML
  const htmlDoc = document.createElement('div');
  htmlDoc.className = 'pdf';
  htmlDoc.innerHTML = `
    <style>
      .pdf * {
          font-family: arial;
      }
      .pdf h1 {
          background-color: #ccc;
          padding: 8px;
          font-size: 28px;
          margin-bottom: 32px;
          text-align: center;
          font-weight: bold;
      }
      .pdf h2 {
        background-color: #ccc;
        padding: 8px;
        font-size: 24px;
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
          border-radius: 4px;
          margin:4px 16px 16px 0;
      }
      .pdf span {
        max-width: 128px;
        display: inline-block;
        text-align: center;
      }
    </style>
    <p style="display:inline-block">${new Date().toLocaleString()}</p>
    <p style="float:right">cv generado desde json en <a href="https://fabnun.web.app">fabnun.web.app</a></p>
    <br style="clear:both">
    <h1>Curriculum Vitae<br>${info.name}</h1>
    <img style="float:left;width:100px" src="${info.flat_picture}" />
    
    <p>${info.description}</p>
    <div style="clear:both;" id="qr-links"></div>
    <h2>Experiencia Laboral</h2>
      ${info.experience.map(
        (exp) => `
          <h3>${exp.name} - ${exp.position}</h3>
          <h3 style="float:right">${exp.date}</h3>
          <p style="clear:both">${exp.description}<br><br></p>
        `
      )}
    <h2>Educación e Hitos Importantes</h2>
      ${info.education.map(
        (exp) => `
          <h3>${exp.name}</h3>
          <h3 style="float:right">${exp.date}</h3>
          <p style="clear:both">${exp.description}<br><br></p>
        `
      )}
    <h2>Habilidades</h2>
      ${info.skills.map(
        (skill) => `
          <h3>${skill.title}</h3>
          <p>${skill.info.join(', ')}<br><br></p>
        `
      )}
      
    `;

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
    span.appendChild(document.createTextNode(link));

    htmlDoc.querySelector('#qr-links').appendChild(span);
  }

  pdf.html(htmlDoc, {
    callback: function(doc) {
      const fecha = new Date();
      const fechaActual = fecha.getDate() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getFullYear();
      console.log(doc.save(info.name + ' CV ' + fechaActual + ' .pdf'));
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
