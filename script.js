/* 
The boilerplate keylistener script is courtesy of W3Schools: https://www.w3schools.com/js/js_events_keyboard.asp
The async programming is courtesy of W3Schools: https://www.w3schools.com/js/js_asynchronous.asp
DOM Maniupulation is courtesy of W3Schools: https://www.w3schools.com/js/js_htmldom.asp & https://www.w3schools.com/jsref/met_audio_play.asp
*/


const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const sound = new Audio("resources/scream.mp3");

document.addEventListener('keydown', async (event) => { 
  if (event.key === '%') {
    alert("You have found the easter egg!");
    for (let i = 0; i < 100; i++) {
      sound.play()
      const img = document.createElement('img');
      img.src = 'resources/theImg.JPG';
      img.style.cssText = `
        position: fixed;
        top: ${Math.random() * 90}vh;
        left: ${Math.random() * 90}vw;
        width: ${15 + Math.random() * 25}vw;
        transform: rotate(${Math.random() * 360}deg);
        z-index: ${9999 + i};
        `;   
      document.body.appendChild(img);
      
      await sleep(1); // 10ms between each
    }
  }
});   