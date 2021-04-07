const inputNumber = document.querySelector('#inputNumber');
const sortButton = document. querySelector('#sortButton');
const array = document.querySelector('#array');
const alert = document.querySelector('#alert');

sortButton.addEventListener('click', () => {
    if(!inputNumber.value){
        alert.innerText = 'Please insert a value (1 - 10) in the input';

        alert.classList.remove('alert-display-none');
        alert.classList.add('alert-display-block');

        return;
    }

    alert.classList.remove('alert-display-block');
    alert.classList.add('alert-display-none');
    const numberQuantity = inputNumber.value <= 12 && inputNumber.value > 0 ? inputNumber.value : 12;
    array. innerHTML = '';

    const generateNumbers = () => {
        for(let i = 0; i < numberQuantity; i++){
            let index = document.createElement('div');
            index.className = 'index op-0';
            index.id = `index${i}`;
            index.innerText = Math.floor(Math.random() * (99 - 1)) + 1;
            
            array.appendChild(index);
            index = document.querySelector(`#index${i}`);
            index.classList.add('op-1');
        }
    }
    generateNumbers();
});