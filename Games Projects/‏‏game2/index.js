const num1 = document.querySelector('#num1');
const op = document.querySelector('.op');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const next = document.querySelector('.next');
const check = document.querySelector('.check');
const clear = document.querySelector('.clear');
const icon = document.querySelector('.icon');
const BGC = document.querySelector('body');
const bgcColor = 'rgb(120, 216, 225)';

const operators = ['+', '-', '*', '÷'];



function RandomNums() {


    let n1 = Math.floor(Math.random() * 99) + 1;
    let n2 = Math.floor(Math.random() * 99) + 1;
    const operation = operators[Math.floor(Math.random() * operators.length)];

    if ((operation === '-' || operation === '÷') && n1 < n2) {
        [n1, n2] = [n2, n1];
    }

    num1.textContent = n1;
    num2.textContent = n2;
    op.textContent = operation;
    num3.value = '';
    icon.textContent = '';
    BGC.style.backgroundColor = bgcColor;

}

RandomNums();

console.log();

function CheckAnswer() {

    if (op.textContent === '+') {

        let answer = Number(num1.textContent) + Number(num2.textContent);
        if (answer == num3.value) {
            BGC.style.backgroundColor = 'rgb(81, 190, 81)';
            icon.textContent = '✅'
        } else {
            BGC.style.backgroundColor = 'rgb(252, 102, 102)';
            icon.textContent = '❌'
        }



    } else if (op.textContent === '-') {

        let answer = Number(num1.textContent) - Number(num2.textContent);
        if (answer == num3.value) {
            BGC.style.backgroundColor = 'rgb(81, 190, 81)';
            icon.textContent = '✅'
        } else {
            BGC.style.backgroundColor = 'rgb(252, 102, 102)';
            icon.textContent = '❌'
        }

    } else if (op.textContent === '*') {

        let answer = Number(num1.textContent) * Number(num2.textContent);
        if (answer == num3.value) {
            BGC.style.backgroundColor = 'rgb(81, 190, 81)';
            icon.textContent = '✅'
        } else {
            BGC.style.backgroundColor = 'rgb(252, 102, 102)';
            icon.textContent = '❌'
        }
    }
    else if (op.textContent === '÷') {

        let answer = Number(num1.textContent) / Number(num2.textContent);
        if (answer == num3.value) {
            BGC.style.backgroundColor = 'rgb(81, 190, 81)';
            icon.textContent = '✅'
        } else {
            BGC.style.backgroundColor = 'rgb(252, 102, 102)';
            icon.textContent = '❌'
        }
    }


}


function ClearUp() {

    
        num3.value = '';
        icon.textContent = '';
        BGC.style.backgroundColor = bgcColor;
    



}



check.addEventListener('click', CheckAnswer);
next.addEventListener('click', RandomNums);
clear.addEventListener('click', ClearUp);





































