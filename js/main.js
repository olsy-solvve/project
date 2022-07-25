// mockup start
const list = [
    'Alex',
    'Oleg',
    'Olena'
];
// mockup end


const $ul = document.querySelector('ul#list');

const removeItem = ($element) => {
    $ul.removeChild($element);
};

const addItem = (item) => {
    const $li = document.createElement('li');
    $li.innerText = item;
    $li.addEventListener('click', (event) => {
        // console.log(
        //     event.target,
        //     $li,
        //     event.target === $li
        // );
        removeItem(event.target);
    });
    $ul.appendChild($li);
};

const updateItem = () => {};

list.forEach((el, index) => {
    addItem(el);
});

// FORM PATH
const $form = document.querySelector('form#user');
const $input = $form.querySelector('input[name="user_name"]');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = $input.value;
    // check validation
    if (value.length >= 2) {
        addItem(value);
        $input.value = '';
    } else {

        // homework
    }
});









