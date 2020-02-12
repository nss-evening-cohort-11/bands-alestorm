const Cities = [
    {
       City: 'Melbourne',
       Date: 'March 20'
    },
    {
       City: 'Sydney',
       Date: 'March 21'
    },
    {
       City: 'Solvesborg',
       Date: 'June 04'
    },
    {
       City: 'Interlaken',
       Date: 'June 12'
    },
    {
       City: 'Donington',
       Date: 'June 14'
    },
    {
       City: 'Dessel',
       Date: 'June 19'
    },
    {
       City: 'Clisson',
       Date: 'June 20'
    },
    {
       City: 'Barcelona',
       Date: 'July 03'
    },
    {
       City: 'Villafranca di Verona',
       Date: 'July 04'
    },
    {
       City: 'Vizovice',
       Date: 'July 09'
    }
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildConcertSection = () => {
    let domString = '';
    domString += `<h1 class="text-center">Live Shows!</h1>`
    domString += `<div class="d-flex flex-">`
    domString += `<div class="concert-text col-6">`
    domString +=    `<h4>Flogging lugger deadlights trysail cog. Pink lee brig Barbary Coast draft. Grog blossom capstan mizzenmast yard fathom. Jolly Roger marooned sutler flogging lateen sail. Lee come about hardtack dead men tell no tales Admiral of the Black. Skysail galleon Chain Shot keelhaul bounty. Aft hulk gunwalls hands fire in the hole. Blow the man down landlubber or just lubber boatswain hail-shot league. To go on account crow's nest cutlass doubloon Blimey. Privateer pinnace lateen sail Chain Shot code of conduct.</h4>`
    domString += `</div>`
    domString += `<div class="concert-image col-6">`
    domString +=    `<img src="https://live.staticflickr.com/65535/48480398492_97807f80bf_c.jpg" alt="High kicks in Dusseldorf"/>`
    domString += `</div>`
    domString += `</div>`

    printToDom('concert', domString);
};

const listGroupBuilder = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++){
    domString += `<a onClick="buyTicketAlert(${i})" class="list-group-item list-group-item-action">${arr[i].City}  <p>When: ${arr[i].Date}</p></a>`;
    }
    printToDom('list-group', domString);
};

const buyTicketAlert = (i) => {
    window.alert(`You just bought tickets to our show in ${Cities[i].City}. Thank you for your purchase.`)
};

const addCity = () => {
    const newCity = new Object();
    if (document.getElementById('concert-input').value === ''){
        window.alert('Please add a city first.');
    } else {
        userInput = document.getElementById('concert-input').value;
        newCity.City = userInput;
        randomMonth = Math.floor(Math.random() * 12);
        month = months[randomMonth];
        switch (month) {
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December':
                day = Math.floor(Math.random() * 31);
                break;
            case 'April':
            case 'June':
            case 'September':
            case 'November':
                day = Math.floor(Math.random() * 31);
                break;
            case 'February':
                day = Math.floor(Math.random() * 28);
                break;
        }
        newCity.Date = month + ' ' + day;
        Cities.push(newCity);
        listGroupBuilder(Cities);
    }
}

const buttonMaker = () => {
    for (let i = 0; i < Cities.length; i++){
    document.getElementById(`${i}`).addEventListener('click', buyTicketAlert);
    }
};

const events = () => {
    document.getElementById('city-submit').addEventListener('click', addCity);
}

const init = () => {
    if (window.location.pathname == '/concerts.html'){
        listGroupBuilder(Cities);
        events();
    }

    if (window.location.pathname == '/index.html'){
        buildConcertSection();
    }
};

init();