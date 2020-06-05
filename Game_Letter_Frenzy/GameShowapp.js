const phraseDisplay = document.querySelector("ul"); //returns first element within the doc that matches the selector
const endGameScreen = document.querySelector("h2");
const startUpScreen = document.querySelector("a");


const phrasesArr =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var missed = 0;

startUpScreen.addEventListener("click", () => overlay.style.display = "none"); // removes startup screen


//Simple random number generator from 0-25; based on the number of quotes I have
const randomNumber = () =>  Math.floor(Math.random() * 26);


//function that Grabs random quote 
function getRandomPhraseArray(arr) {
    let randomArr = arr[randomNumber()]; //random array will select a random element from array parameter
    return splitArray = randomArr.split([,]);//splits it into an array of characters(inlcuding space bar)
}


//Puts getRandomPhraseArray function into a variable 
const splitRandomPhrase = getRandomPhraseArray(phrasesArr); //array of letters 


// receives phraseArray as a param and creats a li tag for each letter and appends it to the DOM 
function addPhraseToDisplay(arr) {
    arr.forEach(letter => 
    {
       let li = document.createElement("li"); //creating li node
       li.textContent = letter.toUpperCase();
       phraseDisplay.appendChild(li); //appending li node to ul
       if (li.textContent !== " ") 
       {
          li.className = "letter"; //this class has all letters of phrase
       } 
       else 
       {
          li.className = "space"; //this class would have been used to seperate the words in phrase
       }
  });
}


function checkLetter(buttonClicked) { 
    const elementsWithClass = document.getElementsByClassName("letter"); //has all the letters of phrase
    for (let i = 0; i < elementsWithClass.length; i++) 
    {
        if (elementsWithClass[i].textContent.toLowerCase() == buttonClicked.textContent.toLowerCase()) 
        {
            var letter = elementsWithClass[i].textContent;
            elementsWithClass[i] = elementsWithClass[i].classList.add("show");
            //.classList is read-only, but you can manipulate the (css) classes it contains; right now just created a css class of the element called "show".
            
        }

    }
    return letter;
}


//Targets button clicked in qwerty
document.getElementById("qwerty").addEventListener("click", event => {
    if (event.target.tagName == "BUTTON") { //if the type im clicking on is actually a button;
        const button = event.target; //button.textContent is the letter of the clicked button
        button.className = "chosen"; //setting the class name of the element
        let letterFound = checkLetter(button);


    pic = "lostHeart.png";

    if (!letterFound)  
    {
        missed++;

        if (missed == 1) document.getElementById('l1').src = pic;
          
        else if (missed === 2) document.getElementById('l2').src = pic;
         
        else if (missed === 3) document.getElementById('l3').src = pic;
        
        else if (missed === 4) document.getElementById('l4').src = pic;
     
        else if (missed === 5) document.getElementById('l5').src = pic;


    }
  }

    //SCOREBOARD CHECKER:
    const lettersWithClassLetter = document.getElementsByClassName("letter").length;//length of amount of letters
    const lettersWithClassShow = document.getElementsByClassName("show").length; //length of correct letters shown


     function endGameOverlay(text, classAdded) {
         startUpScreen.style.display = "none";
         overlay.style.display = "block";
         endGameScreen.textContent = text;
        overlay.classList.add(classAdded);
     }


    if (lettersWithClassShow == lettersWithClassLetter) endGameOverlay("You Win!!!!","win");

    else if (missed >= 5) endGameOverlay("Try again.....", "lose");

    });

addPhraseToDisplay(splitRandomPhrase);
