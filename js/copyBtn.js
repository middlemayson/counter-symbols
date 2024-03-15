// script.js
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    const textField = document.getElementById('myTextField');

    copyButton.addEventListener('click', () => {
        textField.select();
        document.execCommand('copy');
        textField.onmouseout = function(){
            this.value +=' ';
            this.value = this.value.slice(0, -1);
        };
            
    });
});

copyButton.addEventListener('click', () => {
    textField.select();
    document.execCommand('copy');
    
    const message = document.createElement('div');
    message.textContent = 'Текст скопирован';
    message.classList.add('copied-message');
    document.body.appendChild(message);
    
    setTimeout(() => {
        document.body.removeChild(message);
    }, 3000);
});