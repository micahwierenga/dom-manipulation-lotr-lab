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
  console.log(hobbitsList);
  var rivendell = document.querySelectorAll('article');
  console.log(rivendell);
  for (var i = 0; i < rivendell.length; i++) {
    console.log(rivendell[i]);
    if 
  }
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
