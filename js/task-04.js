let counterValue = 0;
const refs = {
up: document.querySelector('[data-action="increment"]'),
down: document.querySelector('[data-action="decrement"]'),
value: document.querySelector('#value')
};

const changeValue = (num) => {
    counterValue += num;
    refs.value.textContent = counterValue;
};

refs.up.addEventListener('click', () => changeValue(1));
refs.down.addEventListener('click', () => changeValue(-1));