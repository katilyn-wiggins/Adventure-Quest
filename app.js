// import functions and grab DOM elements
import { getUserInfo, setUserInfo, validateForm } from './userutils.js';
const form = document.querySelector('form');

const title = document.getElementById('title');
const USERINFO = 'USER';
const defaultUserInfo = [];
// initialize state



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        age: formData.get('age'),
        email: formData.get('email'),
        hp: 5,
        gold: 5,
        completed: {},
    };


    getUserInfo();
    setUserInfo(user);

    window.location = './map';

});
// set event listeners to update state and DOM