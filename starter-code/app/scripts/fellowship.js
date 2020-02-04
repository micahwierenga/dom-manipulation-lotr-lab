console.log("linked");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const lands = ['The Shire', 'Rivendell', 'Mordor'];
const body = document.querySelector('body');


// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // for each land, create an article tag
  // in each article, create an h1 element whose text is the land name
  // inside each article tag include an h1 with the name of the land
  // append each article to the middle earth section
  // append the middle earth section to your document body
  const midEarth = document.createElement('section');
  midEarth.setAttribute('id', 'middle-earth');

  for (let i = 0; i < lands.length; i++) {
    const landArt = document.createElement('article');
    const landHead = document.createElement('h1');
    landHead.textContent = lands[i];
    landArt.appendChild(landHead);
    midEarth.appendChild(landArt);
  }

  body.appendChild(midEarth);
}


// Part 2

function makeHobbits() {
  // display an unordered list from the hobbits array inside the shire article tag
  // (this is the first article tag on the page)
  // give each hobbit a class of hobbit and set the text of each list item to each hobbit's name
  const hobbitList = document.createElement('ul');

  const theShire = document.querySelector('article');

  for (let i = 0; i < hobbits.length; i++) {
    const hobbitItem = document.createElement('li');
    hobbitItem.textContent = hobbits[i];
    hobbitItem.className = 'hobbit';
    hobbitList.appendChild(hobbitItem);
  }

  theShire.appendChild(hobbitList);
}


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech 
  // function (provided) is invoked
  // add the ring as a child of Frodo
  const ringDiv = document.createElement('div');
  ringDiv.setAttribute('id', 'the-ring');
  ringDiv.setAttribute('class', 'magic-imbued-jewelry');
  ringDiv.addEventListener('click', nazgulScreech);

  const frodo = document.querySelector('li');
  frodo.appendChild(ringDiv);
}

function nazgulScreech(){
  document.querySelector('#nazgul-screech').play();
}


// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list from the buddies array in the aside
  // append the buddy list inside the rivendell article element

  const aside = document.createElement('aside');

  const buddiesList = document.createElement('ul');

  for (let i = 0; i < buddies.length; i++) {
    const buddiesItem = document.createElement('li');
    buddiesItem.textContent = buddies[i];
    buddiesList.appendChild(buddiesItem);
  }
  aside.appendChild(buddiesList);

  const rivendell = document.querySelector('article:nth-child(2)');
  rivendell.appendChild(aside);

}


// Part 5

function beautifulStranger() {
  // change the text 'Strider' to 'Aragorn'
  // (search the buddies ul and find strider)
  const findList = document.querySelectorAll('li');
  findList.forEach(function(li) {
    if (li.textContent === 'Strider')
      li.textContent = 'Aragorn';
  });

}


// Part 6

function leaveTheShire() {
  // move the hobbits list inside the rivendell article
  const hobbitsList = document.querySelector('ul');
  const rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(hobbitsList);
}


// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within the rivendell article
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  // (after you've completed this function, you may want to comment out the alert)
  const the_fellowship = document.createElement('div');
  
  const rivendell = document.querySelectorAll('article')[1];

  const hobBudList = document.querySelectorAll('li');

  rivendell.appendChild(the_fellowship);
  for (let i = 0; i < hobBudList.length; i++) {
    the_fellowship.appendChild(hobBudList[i]);
    // alert(`${hobBudList[i].textContent} joined the party!`);
  }

}


// Part 8

function theBalrog() {
  // change the 'Gandalf the Grey' textNode to 'Gandalf the White'
  // apply style to the element by making the background 'white' and adding a grey border
  const findList = document.querySelectorAll('li');
  for (let i = 0; i < findList.length; i++) {
    if (findList[i].textContent === 'Gandalf the Grey') {
      findList[i].textContent = 'Gandalf the White';
      findList[i].style.background = 'white';
      findList[i].style.border = '1px solid grey';
    }
  }
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // (you may want to comment this out after you've completed this function)
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on Boromir's name
  // remove Boromir from the Fellowship
  // alert('The Horn of Gondor has been blown!');
  const findList = document.querySelectorAll('li');
  for (let i = 0; i < findList.length; i++) {
    if (findList[i].textContent === 'Boromir') {
      findList[i].style.textDecoration = 'line-through';
      findList[i].parentNode.removeChild(findList[i])
    }
  }
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to the mordor article
  // add a div with an id of 'mount-doom' to Mordor
  const allBuddies = document.querySelectorAll('li');
  const mordor = document.querySelectorAll('article')[2];
  
  for (let i = 0; i < allBuddies.length; i++) {
    if (allBuddies[i].textContent === 'Frodo Baggins' || allBuddies[i].textContent === "Samwise 'Sam' Gamgee") {
      mordor.appendChild(allBuddies[i]);
    }
  }

  const mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
}


// Part 11

function weWantsIt() {
  // create a div with an id of 'gollum' and add it to the mordor article
  // remove the ring from Frodo and give it to Gollum
  // move Gollum into Mount Doom
  const gollumDiv = document.createElement('div');
  gollumDiv.setAttribute('id', 'gollum');

  const mordor = document.querySelectorAll('article')[2];
  mordor.appendChild(gollumDiv); 
  
  const ring = document.getElementById('the-ring');
  gollumDiv.appendChild(ring);

  const mountDoom = document.querySelector('#mount-doom');
  mountDoom.appendChild(gollumDiv);
  mordor.appendChild(mountDoom);
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // move all the hobbits back to the shire
  const gollum = document.querySelector('#gollum');
  gollum.parentNode.removeChild(gollum);
  
  const theShire = document.querySelector('article');

  const hobbitList = document.createElement('ul');
  const hobbits = document.querySelectorAll('.hobbit');

  for(let i = 0; i < hobbits.length; i++) {
    hobbitList.append(hobbits[i]);
  }

  theShire.appendChild(hobbitList);
}

document.querySelector('#makeMiddleEarth').addEventListener('click', makeMiddleEarth);
document.querySelector('#makeHobbits').addEventListener('click', makeHobbits);
document.querySelector('#keepItSecretKeepItSafe').addEventListener('click', keepItSecretKeepItSafe);
document.querySelector('#makeBuddies').addEventListener('click', makeBuddies);
document.querySelector('#beautifulStranger').addEventListener('click', beautifulStranger);
document.querySelector('#leaveTheShire').addEventListener('click', leaveTheShire);
document.querySelector('#forgeTheFellowShip').addEventListener('click', forgeTheFellowShip);
document.querySelector('#theBalrog').addEventListener('click', theBalrog);
document.querySelector('#hornOfGondor').addEventListener('click', hornOfGondor);
document.querySelector('#itsDangerousToGoAlone').addEventListener('click', itsDangerousToGoAlone);
document.querySelector('#weWantsIt').addEventListener('click', weWantsIt);
document.querySelector('#thereAndBackAgain').addEventListener('click', thereAndBackAgain);

document.querySelector('#clickAll').addEventListener('click', function(e) {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBuddies();
  beautifulStranger();
  leaveTheShire();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});