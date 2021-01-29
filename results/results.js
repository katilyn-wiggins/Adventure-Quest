

import { scoreGold, scoreHp } from './resultUtil.js';
import { hpMessages, goldMessages } from './messages.js';
import questData from '../data.js';
import { getUserInfo, setUserInfo } from '../userutils.js';
import { findByID } from '../utils.js';

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const form = document.querySelector('form');
const img = document.querySelector('section img');
const startOverButton = document.getElementById('start-over');
const homeIcon = document.getElementById('map-image');
const defaultUserInfo = [];
const topDisplay = document.getElementById('hpAndGoldTop');



// h1.textContent = quest.title;
// p.textContent = quest.description;
img.src = '../assets/macchu.jpg';

const user = JSON.parse(localStorage.getItem('USER'));
const results = document.getElementById('results-span');

topDisplay.textContent = `HP: ${user.hp} Gold: ${user.gold}`;

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.hp);

const hpMessage = hpMessages[hpResult];
const goldMessage = goldMessages[goldResult];

const story = `It was a long journey, ${user.name}. With only ${user.age} years under your belt, you made the best of it. ${hpMessage} . ${goldMessage} .`;

results.textContent = story;

startOverButton.addEventListener('click', () => {
    window.location = '../index.html';
    const emptyUserInfo = JSON.stringify(defaultUserInfo);

    localStorage.setItem('USER', emptyUserInfo);


});

homeIcon.addEventListener('click', () => {
    window.location = '../index.html';
    const emptyUserInfo = JSON.stringify(defaultUserInfo);

    localStorage.setItem('USER', emptyUserInfo);

});
