
import { useEffect, useRef } from 'react';
import './aboutPage.css';

function AboutPage() {
  const canvasRef = useRef(null);

  const drawMatrixEffect = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    context.globalCompositeOperation = 'lighter';

    const textStrip = ['M', 'K', '-', 'U', 'L', 'T', 'R', 'A'];
    const textStrip02 = ['诶', '比', '西', '迪', '伊', '吉', '艾', '杰', '开', '哦', '屁', '提', '维'];

    // https://www.sliderrevolution.com/resources/css-text-animation/
    const stripCount = 60; // Anpassen der Anzahl der Strips

    // Arrays für die Strips
    const stripX = new Array(stripCount);
    const stripY = new Array(stripCount);
    const dY = new Array(stripCount);
    const stripFontSize = new Array(stripCount);

    // Initialisiere die Arrays für die Strips
    for (let i = 0; i < stripCount; i++) {
      stripX[i] = Math.floor(Math.random() * windowWidth);
      stripY[i] = -100;
      dY[i] = Math.floor(Math.random() * 7) + 3;
      stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
    }

    // Funktion zum Zeichnen eines Strips
    const drawStrip = (x, y) => {
      for (let k = 0; k <= 24; k++) {
        const randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
        if (context.fillText) {
          switch (k) {
            case 0:
              context.fillStyle = '#cefbe4';
              break;
            case 1:
              context.fillStyle = '#81ec72';
              break;
            case 3:
              context.fillStyle = '#5cd646';
              break;
            case 7:
              context.fillStyle = '#54d13c';
              break;
            case 13:
              context.fillStyle = '#4ccc32';
              break;
            case 17:
              context.fillStyle = '#43c728';
              break;
          }
          context.fillText(randChar, x, y);
        }
        y -= stripFontSize[k];
      }
    };

    // Zeichne die Strips
    const drawStrips = () => {
      for (let j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j] + 'px MatrixCode';
        context.textBaseline = 'top';
        context.textAlign = 'center';

        if (stripY[j] > windowHeight) {
          stripX[j] = Math.floor(Math.random() * windowWidth);
          stripY[j] = -100;
          dY[j] = Math.floor(Math.random() * 2) + 3;
          stripFontSize[j] = Math.floor(Math.random() * 18) + 12;
        }
        drawStrip(stripX[j], stripY[j]);
        stripY[j] += dY[j];
      }
    };

    // Funktion zum Zeichnen der Animation
    const draw = () => {
      // clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawStrips();
      requestAnimationFrame(draw);
    };

    draw();
  };

  useEffect(() => {
    drawMatrixEffect();
  }, []);


  return (
    <div className='about-container'>
      <canvas ref={canvasRef}></canvas>
      <div className='hobby-container'>
        <h3>Hobbies</h3>
        <p>Natur, Tanzen, Fahrradfahren, Kampfsport, Musik hören, Keyboard, Creativität jeglicher Art</p>
      </div>
      <div className='tchno-container'>
        <h3>Technologien</h3>
        <p>CSS Javascript HTML MongoDB blender XSS</p>
      </div>
      <div className='meta-container'>
        <h3>Metadaten</h3>
        <p>Vorname: Michél</p>
        <p>Name: Kühne</p>
        <p>Geboren am: 22.09.1987</p>
        <p>Aufenthaltsort: Magdeburg</p>
      </div>
      <div className='history-container'>
        <h3>Gechichtliches</h3>
      </div>
    </div>
  );
}

// Exportiere die AboutPage-Komponente
export default AboutPage;
