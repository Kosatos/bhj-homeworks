const inputBox = document.getElementById('editor');
const formButton = document.getElementById('reset_button');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.textValue) {
        inputBox.value = localStorage.getItem('textValue');
    }
})

inputBox.addEventListener('input', () => {
    localStorage.textValue = inputBox.value;
})

formButton.addEventListener('click', (e)=> {
    e.preventDefault();
    inputBox.value = '';
    localStorage.removeItem('textValue');
})