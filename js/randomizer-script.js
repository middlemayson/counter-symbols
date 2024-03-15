// Функция для генерации случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция для обработки нажатия кнопки
  function randomize() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const randomNumber = getRandomInt(min, max);
    document.getElementById('output').innerHTML = 'Случайное число: <b>' + randomNumber + '</b>';
  }