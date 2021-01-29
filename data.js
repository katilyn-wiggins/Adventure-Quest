const ica = {
    id: 'ica',
    title: 'The Dunes of Ica',
    map: {
        top: '95%',
        left: '37%',
    },
    image: 'ica.jpg',
    description: `As she is set to depart from Ica, Luci’s friend April the Alpaca asks Luci to go sandboarding one last time. What should Luci do?`,
    choices: [{
        id: 'sandboard',
        description: 'Go sandboarding!',
        result: 'Who knows when you’ll be near this sea of sand again! Unfortunately, sandboarding takes the entire day and puts you behind schedule! You are tired afterward and must spend extra money to buy food with April as you have none left at home. ',
        hp: -2,
        gold: -2,
    }, {
        id: 'goodbye',
        description: 'Say goodbye to April and hit the road',
        result: 'We all know goodbyes are hard but you gotta put in some mileage before the sun sets! Great job getting started, because you left early you can also catch a great night of sleep. Because it’s still light out you happen to see a couple of gold pieces along the path. You put them in your pack! ',
        hp: 2,
        gold: 2,
    }, {
        id: 'food',
        description: 'Instead of sandboarding, grab a quick bite with April and then hoof it.',
        result: 'The meal is a little spendy and delays the start of your journey. You only make it a few miles before it is completely dark! At least you have a full tummy!',
        hp: 1,
        gold: -2,
    }]

};

const cusco = {
    id: 'cusco',
    title: 'The City of Cusco',
    map: {
        top: '95%',
        left: '54%'
    },
    image: 'cusco.jpg',
    description: 'It is near nightfall as Luci approaches the city of Cusco. Some friendly strangers offer Luci a meal and a place to sleep. What should Luci do? ',
    choices: [{
        id: 'go',
        description: 'Keep going, you can get another mile in before its completely dark!',
        result: 'Just outside of town you are robbed! The masked bandit takes 3 gold and does not hurt you.',
        hp: -2,
        gold: -3,
    }, {
        id: 'rest',
        description: 'Thank the strangers for their kindness and accept their offer, get a good night of sleep before an early morning.',
        result: 'You have a lovely meal with this new extended family and get a good night of rest, they sneak an extra piece of gold in your pack to ensure a safe journey back home.',
        hp: 2,
        gold: 1,
    }, {
        id: 'food',
        description: 'Sit down to eat with the strangers and then proceed a little further before getting some rest.',
        result: 'You enjoy a lovely meal with this newfound family and then proceed towards your next destination with a warm and happy belly.',
        hp: 1,
        gold: 0,
    }]

};

const salkantay = {
    id: 'salkantay',
    title: 'Salkantay Mountain',
    map: {
        top: '90%',
        left: '52%'
    },
    image: 'livellama.jpg',
    description: 'On her final leg of the journey, Luci must cross Salkantay, a giant mountain! Once past it, she will reach the sun gate of Macchu Picchu. What should Luci make sure she has in her pack in order to cross the mountain safely? ',
    choices: [{
        id: 'headlamp',
        description: 'A headlamp',
        result: 'A headlamp is necessary in case it gets dark while hiking! But Luci could have also used an emergency kit in case of an accident, it’s always better to be prepared! Because she has her headlamp, Luci is able to find a safe place to rest after the sun goes down and gets a great night of sleep.',
        hp: 2,
        gold: 0,
    }, {
        id: 'emergency',
        description: 'An emergency kit ',
        result: 'An emergency kit is necessary in case you or a fellow hiker becomes injured. Along the route, Luci passes a hiker who was not prepared and has bumped their knee. Luci helps bandage them and the kind hiker rewards her with 3 pieces of gold! ',
        hp: -1,
        gold: 3,
    }, {
        id: 'both',
        description: 'both!',
        result: 'Because Luci was prepared, she was able to help a fellow hiker who had fallen and bumped their knee. After securing a bandage from Luci’s pack, the kind hiker gifted her 3 pieces of gold! Because of her headlamp, Luci was also to hike a couple more miles after sunset before getting a good night of rest.',
        hp: 2,
        gold: 2,
    }]

};

const questData = [
    ica,
    cusco,
    salkantay,
];

export default questData;  