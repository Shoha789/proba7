
const tekst = document.querySelector('#tekst');

tekst.addEventListener('click', (even) => {
   const userText = prompt('Измините текст ссылки');
   const userTextField = document.querySelector('#tekst');
   userTextField.textContent = userText;
   event.preventDefault()
})
