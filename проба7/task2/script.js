const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})

const аlert = document.querySelector('#аlert');

аlert.addEventListener('click',  () => {
    alert('Служит для отображения информации пользователям');
})
