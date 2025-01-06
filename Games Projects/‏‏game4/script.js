const input = document.querySelector('.userInput');
const range = document.querySelector('.range');
const add = document.querySelector('.add');
const clearList = document.querySelector('.clearList');
const items = document.querySelector('.items');
const title = document.querySelector('.title');


function AddItem(e) {
    e.preventDefault();

    if (!input.value) { return; }


    const itemInfo = {
        name: input.value,
        quantity: range.value,
    }


    const div = document.createElement('div');
    const li = document.createElement('li');


    li.innerHTML = `name: ${itemInfo.name} , units:${itemInfo.quantity}`;
    const button = document.createElement('button');


    button.innerText = 'X';
    div.className = "div"


    button.addEventListener('click', () => {


        if (confirm('Are You Sure You Want To Delete This Item From The List?')) {
            div.remove();
        } else {
            return;
        }


    })


    div.appendChild(li);
    div.appendChild(button);
    items.appendChild(div);

    input.value = '';
    range.value = 1;
}


add.addEventListener('click', AddItem);
clearList.addEventListener('click', () => {

    if (confirm('Are You Sure You Want To Delete All Items?')) {
        items.innerHTML = '';
    } else {
        return;
    }

})












