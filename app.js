const myGreeting = document.getElementById("greeting");
console.log(greeting);
const myInput = document.getElementById("greeting-input");
console.log(myInput);
const myButton = document.getElementById("greeting-button");
console.log(myButton);

myButton.addEventListener('click', () => {    

    const userInput = myInput.value;

    myGreeting.textContent = userInput;
});
