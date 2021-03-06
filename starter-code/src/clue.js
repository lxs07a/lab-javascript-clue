// Characters
var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
}

var drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:   "Scientist"
}

var profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
}

var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
}

var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
}

var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
}

// Weapons

var rope = {
  name: "rope",
  weight: 10
}
var knife = {
  name: "knife",
  weight: 8
}
var candlestick = {
  name: "candlestick",
  weight: 2
}
var dumbbell = {
  name: "dumbbell",
  weight: 30
}
var poison = {
  name: "poison",
  weight: 2
}
var axe = {
  name: "axe",
  weight: 15
}
var bat = {
  name: "bat",
  weight: 13
}
var trophy = {
  name: "trophy",
  weight: 25
}
var pistol = {
  name: "pistol",
  weight: 20
}

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
// Rooms' Collection
var roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

function randomSelector(array) {
  var x = array[Math.floor(Math.random() * array.length)];
  return x;
}

function pickMistery() {
  var x = randomSelector(charactersArray);
  var y = randomSelector(weaponsArray);
  var z = randomSelector(roomsArray);
  return [x, y, z];
}

var misteryEnvelope = pickMistery();

function revealMistery(array) {
  var firstName = array[0].first_name;
  var lastName = array[0].last_name;
  var weapon = array[1].name;
  var place = array[2];
  var string = firstName + " " + lastName + " killed Mr.Boddy using the " + weapon + " in the " + place + "!!!!";

  return string;
}

var mistery = revealMistery(misteryEnvelope);

function guess(secret, array) {
  var answer;
  switch(secret) {
    case "name":
      answer = misteryEnvelope[0].first_name;
      break;
    case "weapon":
      answer = misteryEnvelope[1].name;
      break;
    case "place":
      answer = misteryEnvelope[2];
      break;
  }
  var guessName1 = window.prompt("Try to guess the " + secret + " - you have three attempts");
  if (guessName1.toLowerCase()===answer.toLowerCase()) {
    alert("You got it!");
    return 1;
  } else {
    var guessName2 = window.prompt("Nope. Try again");
    if (guessName2.toLowerCase()===answer.toLowerCase()) {
      alert("You got it!");
      return 1;
    } else {
      var guessName3 = window.prompt("Nope. Last try");
      if (guessName3.toLowerCase()===answer.toLowerCase()) {
        alert("You got it!");
        return 1;
      } else {
        alert("Sorry, you lose, the correct answer is: " + answer);
      }
    }
  }
}

guess("name", misteryEnvelope);
guess("weapon", misteryEnvelope);
guess("place", misteryEnvelope);
alert(mistery);

