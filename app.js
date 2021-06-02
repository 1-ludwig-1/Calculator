'use strict'

window.addEventListener('load', ()=>{
    var buttons = document.querySelectorAll('button');
    var display = document.querySelector('.display');

    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            display.append(button.value);
            display.style.fontSize = '2.5rem';
            display.style.paddingTop = '0.5rem'
            console.log(button.value);
        });
    });
});