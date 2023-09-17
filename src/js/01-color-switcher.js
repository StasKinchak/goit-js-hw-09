const startBtn = document.querySelectorAll('[data-start]'); button.addEventListener('click', startColorChange);
const stopBtn = document.querySelectorAll('[data-stop]');

startBtn = button.addEventListener('click', startColorChange);
stopBtn= button.addEventListener('click', stopColorChange);


        let intervalId; 
        let isChanging = false; 

    
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        
        function changeBackgroundColor() {
            document.body.style.backgroundColor = getRandomHexColor();
        }

    
        function startColorChange() {
            if (!isChanging) {
                intervalId = setInterval(changeBackgroundColor, 1000);
                isChanging = true;
                document.querySelectorAll('[data-start]').forEach(button => button.disabled = true);
                document.querySelectorAll('[data-stop]').forEach(button => button.disabled = false);
            }
        }

        
        function stopColorChange() {
            if (isChanging) {
                clearInterval(intervalId);
                isChanging = false;
                document.querySelectorAll('[data-start]').forEach(button => button.disabled = false);
                document.querySelectorAll('[data-stop]').forEach(button => button.disabled = true);
            }
        }

   
    



