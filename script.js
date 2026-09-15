const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const sound = new Audio("resources/scream.mp3");

document.addEventListener('keydown', async (event) => {
    
    // ;   
  if (event.key === '%') {
    alert("Your browser is now cooked!");
    for (let i = 0; i < 1000; i++) {
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

element.addEventListener('animationend', () => {
  element.classList.remove('animate-class');
});   