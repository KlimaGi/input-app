var wordEl = document.getElementById("word");
var translEl = document.getElementById("transl");
var btn1El = document.getElementById("btn1");

var dictionary = {};

function createNewItem(a, b) {
  dictionary[a] = b;
}

btn1El.addEventListener("click", () => {
  createNewItem(wordEl.value, translEl.value);
  wordEl.value = "";
  translEl.value = "";
});
//------------------------------------------------------

var btn2El = document.getElementById("btn2");
var ulEl = document.getElementById("ul");

function name1() {
  Object.entries(dictionary).forEach(([key, value]) => {
    var newLi = document.createElement("LI");
    var textNode = document.createTextNode(`${key} - ${value}`);
    newLi.appendChild(textNode);
    ulEl.appendChild(newLi);
    //${key} ${value}
  });
}

btn2El.addEventListener("click", () => {
  while (ulEl.hasChildNodes()) {
    ulEl.removeChild(ulEl.firstChild);
  }
  name1();
});
//-------------------------------------------------------------
var btn3El = document.getElementById("btn3");
var randomNotes = document.getElementById("randomNotes");

function randomNum() {
  var objectLength = Object.keys(dictionary).length;
  return Math.floor(Math.random() * objectLength);
}

btn3El.addEventListener("click", () => {
  var dictionaryKey = Object.keys(dictionary)[randomNum()];
  var dictionaryValue = dictionary[dictionaryKey];
  randomNotes.innerText = dictionaryKey + " " + dictionaryValue;
});
//------------------------------------------------------------------

var btn4El = document.getElementById("btn4");
var ulTimeRepeatEl = document.getElementById("ulTimeRepeat");

function showRandomText() {
  var repeatedLi = document.createElement("LI");
  var textNode2 = document.createTextNode(randomNotes.innerText);
  repeatedLi.appendChild(textNode2);
  ulTimeRepeatEl.appendChild(repeatedLi);
}

btn4El.addEventListener("click", () => {
  setTimeout(showRandomText, 5000);
  setTimeout(showRandomText, 10000);
  setTimeout(showRandomText, 15000);
  // showRandomText();
});

//------------------------------------------
var dictionary1 = {
  maintenance: "prieziura",
  quaintly: "savotiskai",
  appliance: "prietaisas",
  buzzword: "zargonas",
  prominent: "zinomas",
  determination: "ryztas",
  determine: "nustatyti",
  acquisition: "isigijimas",
  recite: "isvardinti",
  efferent: "iscentrinis",
  inclusive: "imtinai",
};

var ulTest = document.getElementById("ulTest");
var btnSubmit = document.getElementById("submit");

function randomNumArr(a) {
  var arr1 = [];
  while (arr1.length < a) {
    var objectLength1 = Object.keys(dictionary1).length;
    var idx = Math.floor(Math.random() * objectLength1);
    if (arr1.indexOf(idx) === -1) arr1.push(idx);
  }
  return arr1;
}

function showKey(b) {
  var createLi = document.createElement("LI");
  var textNode3 = document.createTextNode(b);
  var createInput = document.createElement("INPUT");
  createInput.style.margin = "10px";
  createLi.appendChild(textNode3);
  createLi.appendChild(createInput);
  ulTest.appendChild(createLi);
}

function idxOfKey(arrLength) {
  var arr2 = randomNumArr(arrLength);
  for (var i = 0; i < arr2.length; i++) {
    var key = Object.keys(dictionary1)[arr2[i]];
    showKey(key);
  }
}

idxOfKey(6);

function checkAnswer() {
  var childs = ulTest.children;
  var count = 0;

  for (var a = 0; a < childs.length; a++) {
    childs[a].lastChild.style.color = "green";
    if (
      dictionary1[childs[a].firstChild.textContent] == childs[a].lastChild.value
    ) {
      count++;
    } else {
      childs[a].lastChild.style.color = "red";
    }
  }
  var getScore = document.getElementById("score");
  getScore.innerText = count;
}

btnSubmit.addEventListener("click", () => {
  checkAnswer();
});
