function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

const funcToChangeColor = () => {

   let randomNumberOne = getRandomNumber();
   let randomNumberTwo = getRandomNumber();
   let randomNumberThree = getRandomNumber();

   const container = document.querySelector('.container');
   const keys = document.querySelectorAll('.service');
   const ord = document.querySelectorAll('.ordinary');
   const keysTwo = document.querySelectorAll('.key');
   container.style.backgroundColor = `rgba(${randomNumberOne}, ${randomNumberTwo}, ${randomNumberThree}, 0.5)`;

   keys.forEach((elem) => {
    elem.style.backgroundColor = `rgba(${randomNumberTwo}, ${randomNumberThree}, ${randomNumberOne}, 1)`;
    elem.style.color = `rgba(${randomNumberThree}, ${randomNumberOne}, ${randomNumberOne}, 1)`;
   })

   keysTwo.forEach((elem) => {
    elem.style.boxShadow = `2px 2px 4px rgba(${randomNumberTwo}, ${randomNumberThree}, ${randomNumberThree}, 1)`;
   })

   ord.forEach((elem) => {
    elem.style.color = `rgba(${randomNumberOne}, ${randomNumberThree}, ${randomNumberOne}, 1)`;
   })
}

export default funcToChangeColor;