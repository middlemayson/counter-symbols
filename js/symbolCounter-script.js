// Получаем ссылку на текстовое поле и элементы для вывода количества символов
const textField = document.getElementById('myTextField');
const charCountElement = document.getElementById('charCount');
const remainingCountElement = document.getElementById('remainingCount');

// Максимальное количество символов
const maxCharacters = 2200;

// Функция для подсчёта количества символов в текстовом поле и обновления элемента счетчика
const countCharacters = () => {
    // Получаем значение текстового поля
    const text = textField.value;
    // Удаляем переносы строк из текста
    const textWithoutNewlines = text.replace(/\n/g, '');
    // Подсчитываем количество символов (включая пробелы)
    const characterCount = textWithoutNewlines.length;
    // Обновляем текст элемента счетчика
    charCountElement.textContent = characterCount;

    // Вычисляем оставшееся количество символов
    const remainingCount = maxCharacters - characterCount;
    // Обновляем текст элемента оставшегося количества символов
    remainingCountElement.textContent = `Осталось символов: ${remainingCount}`;

    // Если значение уходит в минус, выделяем строку красным
    if (remainingCount < 0) {
        remainingCountElement.classList.add('red-area');
        remainingCountElement.classList.remove('green-area');
    } else {
        remainingCountElement.classList.remove('red-area');
        remainingCountElement.classList.add('green-area');
    }
};

// Слушаем событие ввода текста в поле
textField.addEventListener('input', countCharacters);