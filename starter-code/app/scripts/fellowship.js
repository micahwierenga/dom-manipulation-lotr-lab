console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var midEarth = document.createElement('section');
  midEarth.setAttribute('id', 'middle-earth');

  for (var i = 0; i < lands.length; i++) {
    var landArt = document.createElement('article');
    var landHead = document.createElement('h1');
    landHead.textContent = lands[i];
    landArt.appendChild(landHead);
    midEarth.appendChild(landArt);
  }

body.appendChild(midEarth);
  
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag 
  // on the page)
  // give each hobbit a class of hobbit
  var hobbitList = document.createElement('ul');

  var theShire = document.querySelector('article');

  for (var i = 0; i < hobbits.length; i++) {
    var hobbitItem = document.createElement('li');
    hobbitItem.textContent = hobbits[i];
    hobbitList.appendChild(hobbitItem);
  }

  theShire.appendChild(hobbitList);

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech 
  // function (provided) is invoked
  // add the ring as a child of Frodo
  var ringDiv = document.createElement('div');
  ringDiv.setAttribute('id', 'the-ring');
  ringDiv.setAttribute('class', 'magic-imbued-jewelry');
  ringDiv.addEventListener('click', nazgulScreech);

  var frodo = document.querySelector('li');
  frodo.appendChild(ringDiv);

}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var aside = document.createElement('aside');

  var buddiesList = document.createElement('ul');

  for (var i = 0; i < buddies.length; i++) {
    var buddiesItem = document.createElement('li');
    buddiesItem.textContent = buddies[i];
    buddiesList.appendChild(buddiesItem);
  }
  aside.appendChild(buddiesList);

  var rivendell = document.querySelector('article:nth-child(2)');
  rivendell.appendChild(aside);

}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  // search buddies ul
  // find strider
  var findList = document.querySelectorAll('li');
  findList.forEach(function(li) {
    if (li.textContent === 'Strider')
      li.textContent = 'Aragorn';
  });

}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitsList = document.querySelector('ul');
  var rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(hobbitsList);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var the_fellowship = document.createElement('div');
  
  var rivendell = document.querySelectorAll('article')[1];

  var hobBudList = document.querySelectorAll('li');

  rivendell.appendChild(the_fellowship);
  for (var i = 0; i < hobBudList.length; i++) {
    the_fellowship.appendChild(hobBudList[i]);
    // alert("Joined party!");
  }

}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var findList = document.querySelectorAll('li');
  for (var i = 0; i < findList.length; i++) {
    if (findList[i].textContent === 'Gandalf the Grey') {
      findList[i].textContent = 'Gandalf the White';
      findList[i].style.background = 'white';
      findList[i].style.border = '1px solid grey';
    }
  }
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  // alert('The Horn of Gondor has been blown!');
  var findList = document.querySelectorAll('li');
  for (var i = 0; i < findList.length; i++) {
    if (findList[i].textContent === 'Boromir') {
      findList[i].innerHTML = '<strike>' + 'Boromir' + '</strike>';
      findList[i].setAttribute('id', 'fellowship-list');
    }
  }
  var boromir = document.getElementById('fellowship-list');
  boromir.parentNode.removeChild(boromir);
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var findFrodoSam = document.querySelectorAll('li');
  for (var i = 0; i < findFrodoSam.length; i++) {
    if (findFrodoSam[i].textContent === 'Frodo Baggins') {
      findFrodoSam[i].setAttribute('id', 'frodo');
    }
    if (findFrodoSam[i].textContent === "Samwise 'Sam' Gamgee") {
      findFrodoSam[i].setAttribute('id', 'sam');
    }
  }
  var frodo = document.getElementById('frodo');
  var sam = document.getElementById('sam');

  var list = document.createElement('ul');

  var mordor = document.querySelectorAll('article')[2];
  
  mordor.appendChild(list);
  list.appendChild(frodo);
  list.appendChild(sam);

  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollumDiv = document.createElement('div');
  gollumDiv.setAttribute('id', 'gollum');

  var mordor = document.querySelectorAll('article')[2];
  mordor.appendChild(gollumDiv); 
  
  var ring = document.getElementById('the-ring');
  gollumDiv.appendChild(ring);

  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mountDoom.appendChild(gollumDiv);
  document.body.appendChild(mountDoom);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  console.log("almost done");
  var gollum = document.getElementById('gollum');
  gollum.parentNode.removeChild(gollum);
  
  var theShire = document.querySelector('article');

  var hobbitList = document.createElement('ul');
  hobbitList.setAttribute('id', 'hobbits');

  theShire.appendChild(hobbitList);

  var buddyHobbits = document.querySelectorAll('li');
  for (var i = 0; i < buddyHobbits.length; i++) {
    if (buddyHobbits[i].textContent === "Meriadoc 'Merry' Brandybuck") {
      buddyHobbits[i].setAttribute('id', 'merry');
    }
    if (buddyHobbits[i].textContent === "Peregrin 'Pippin' Took") {
      buddyHobbits[i].setAttribute('id', 'pippin');
    }
  }

  var merry = document.getElementById('merry');
  var pippin = document.getElementById('pippin');

  var frodo = document.getElementById('frodo');
  var sam = document.getElementById('sam');

  hobbitList.appendChild(frodo);
  hobbitList.appendChild(sam);
  hobbitList.appendChild(merry);
  hobbitList.appendChild(pippin);

  var buddies = document.getElementsByTagName('div')[1];
  buddies.parentNode.removeChild(buddies);
  console.log(buddies);
}

thereAndBackAgain();
