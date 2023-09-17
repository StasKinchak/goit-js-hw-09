    const startBtn = document.querySelectorAll('[data-start]');
    const stopBtn = document.querySelectorAll("[data-stop]");
    const bodySite = document.querySelector("body");
    
    let timerId = null; 
    
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        
        function changeBackgroundColor() {
            document.body.style.backgroundColor = getRandomHexColor();
        }

        

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    changeBackgroundColor;
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  
});

    
        

   
    



