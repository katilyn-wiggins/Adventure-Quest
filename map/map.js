
import questData from '../data.js';
import { getUser } from '../userutils.js';

const p = document.getElementById('homepage');
const ul = document.querySelector('ul');

const user = getUser;

p.textContent = 'A lone llama named Lucie sets out on a long journey from her current home in the oasis of Ica to her family in the ancient city of Macchu Picchu. She must pass through broad valleys and rugged mountains to get back home. Safety is not guaranteed. Help guide Lucie along her route and make sure she is reunited with her loved ones! Lucie starts with 10 HP and 10 pieces of gold in her pack';

let completedAllQuests = true;

for (let quest of questData) {
    if (!URLSearchParams.completed[quest.id]) {
        completedAllQuests = false;
    }
}

if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}

for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;


    li.append(a);
    ul.append(li);
}


