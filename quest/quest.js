import questData from '../data.js';
import { findByID } from '../utils.js';

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const form = document.querySelector('form');
const img = document.querySelector('img');


const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

const quest = findByID(questData, questId);

h1.textContent = quest.title;
p.textContent = quest.description;
img.src = '../assets/${quest.image}';

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();


})