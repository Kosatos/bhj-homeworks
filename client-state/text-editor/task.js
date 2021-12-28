const inputBox = document.getElementById('editor');
const formButton = document.getElementById('reset_button');

localStorage.textValue = inputBox.value;
inputBox.value = localStorage.getItem('textValue');

formButton.addEventListener('click', (e)=> {
    e.preventDefault();
    inputBox.value = '';
})