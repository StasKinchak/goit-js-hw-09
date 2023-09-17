function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
          if (shouldResolve) {
            resolve({ position, delay });
          } else {
            reject({ position, delay });
          }
        }, delay);
      });
    }

    
    function handleFormSubmit(event) {
      event.preventDefault();
      
      const delayInput = document.querySelector('input[name="delay"]');
      const stepInput = document.querySelector('input[name="step"]');
      const amountInput = document.querySelector('input[name="amount"]');
      const promisesContainer = document.querySelector('#promises-container');
      
      const initialDelay = parseInt(delayInput.value);
      const step = parseInt(stepInput.value);
      const amount = parseInt(amountInput.value);

      promisesContainer.innerHTML = ''; 
      
      
      for (let i = 0; i < amount; i++) {
        const delay = initialDelay + i * step;
        createPromise(i + 1, delay)
          .then(({ position, delay }) => {
            const message = `✅ Fulfilled promise ${position} in ${delay}ms`;
            addMessageToContainer(promisesContainer, message);
          })
          .catch(({ position, delay }) => {
            const message = `❌ Rejected promise ${position} in ${delay}ms`;
            addMessageToContainer(promisesContainer, message);
          });
      }
    }

    
    function addMessageToContainer(container, message) {
      const p = document.createElement('p');
      p.textContent = message;
      container.appendChild(p);
    }