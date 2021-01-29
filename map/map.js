
import questData from '../data.js';
import { getUserInfo } from '../userutils.js';

const p = document.querySelector('p');
const ul = document.querySelector('ul');
const mapImage = document.getElementById('map');
const mapSpan = document.getElementById('map-span');
const topDisplay = document.getElementById('hpAndGoldTop');

mapImage.src = '../assets/new-peru-map.png';

const user = JSON.parse(localStorage.getItem('USER'));


topDisplay.textContent = `HP: ${user.hp} Gold: ${user.gold}`;


let completedAllQuests = true;

for (let quest of questData) {
    if (!user.completed[quest.id]) {
        completedAllQuests = false;

    }

}

if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}


for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.style.left = quest.map.left;
    li.style.top = quest.map.top;
    li.style.position = `absolute`;

    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    // a= quest.map;

    li.append(a);
    // ul.append(li);
    mapSpan.append(li);

    if (user.completed[quest.id] === true) {
        a.style.textDecoration = 'line-through';
        a.href = '';
    }
}


