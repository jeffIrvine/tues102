const myName = document.getElementById("name");
const nameInput = document.getElementById("name-input");
const myButton = document.getElementById("name-button");


myButton.addEventListener('click', () => {    

    const userInput = nameInput.value;

    myName.textContent = userInput;
});
