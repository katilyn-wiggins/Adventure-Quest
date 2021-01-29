import questData from '../data.js';
import { getUserInfo, setUserInfo } from '../userutils.js';
import { findByID } from '../utils.js';

const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const form = document.querySelector('form');
const img = document.querySelector('section img');
const results = document.getElementById('results-span');
const homeButton = document.getElementById('home');
const homeIcon = document.getElementById('map-image');
const topDisplay = document.getElementById('hpAndGoldTop');


const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findByID(questId, questData);


const user = JSON.parse(localStorage.getItem('USER'));
topDisplay.textContent = `HP: ${user.hp} Gold: ${user.gold}`;


h2.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;
homeButton.hidden = true;


for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(radio, span);

    form.append(label);
}

const button = document.createElement('button');

button.textContent = 'submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectionID = formData.get('choices');

    const choice = findByID(selectionID, quest.choices);

    const user = JSON.parse(localStorage.getItem('USER'));

    button.disabled = true;

    user.hp += choice.hp;
    user.gold += choice.gold;
    console.log(user.gold);

    user.completed[questId] = true;

    localStorage.setItem('USER', JSON.stringify(user));

    results.textContent = choice.result;

    homeButton.hidden = false;

});

homeButton.addEventListener('click', () => {
    window.location = '../map';

});

homeIcon.addEventListener('click', () => {
    window.location = '../map';

});
//