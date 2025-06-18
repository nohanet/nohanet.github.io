console.log("main is geladen")

const sitename = "les week 3"
const toolname = "Counter"


let counter = 0;
let highCounter = 0;
let lowCounter = 0;
let randomNumber = 0;
let hightRandomNumber = 0;
let lowRandomNumber = 0;
let playerCredits = 0;
let computerCredits = 0;
const playercreditelement = document.querySelector(".player-credits")
const computercreditelement = document.querySelector(".computer-credits")

const h1Element = document.querySelector("h1");
console.log(h1Element);
h1Element.textContent = sitename

const toolNameElement = document.querySelector("h2.tool-name")
toolNameElement.textContent = toolname

const reset = document.querySelector(".gaan")
reset.addEventListener("click", function(){
    console.log("reset")
 




playerCredits = 0
 computerCredits = 0
playercreditelement.textContent = playerCredits
computercreditelement.textContent = computerCredits
//
});

const doButton = document.querySelector(".dice-button")

doButton.addEventListener("click", function(){
    const resultElement = document.querySelector(".result");
    console.log(resultElement);
    counter = counter + 1;
    randomNumber = Math.random() * 6
    randomNumber = Math.ceil(randomNumber)
    resultElement.textContent = randomNumber
        if(counter >0) {
            resultElement.classList.add("bg-green")
    }

    


});

const hoolNameElement = document.querySelector("h2.tool-name")


const highButton = document.querySelector(".higher-button")

highButton.addEventListener("click", function(){
    const resultElement = document.querySelector(".result");
    console.log(resultElement);
    highCounter = highCounter + 1;
    hightRandomNumber = Math.random() * 6
    hightRandomNumber = Math.ceil(hightRandomNumber)

    if(randomNumber < hightRandomNumber){
        alert("good job!!!")
        playerCredits = playerCredits + 5;
        playercreditelement.textContent = playerCredits
    }else{
        alert("wrong idiot i hate you and i hope you die!!!!")
        computerCredits = computerCredits + 5;
        computercreditelement.textContent = computerCredits 
    }



    resultElement.textContent = hightRandomNumber
        if(counter >0) {
            resultElement.classList.add("bg-green")
    }

    


});

const loolNameElement = document.querySelector("h2.tool-name")
 

const loButton = document.querySelector(".lower-button")

loButton.addEventListener("click", function(){
    const resultElement = document.querySelector(".result");
    console.log(resultElement);
    lowCounter = lowCounter + 1;
    lowRandomNumber = Math.random() * 6
    lowRandomNumber = Math.ceil(lowRandomNumber)


    if(randomNumber > lowRandomNumber){
        alert("good job!!!")
        playerCredits = playerCredits + 5;
        playercreditelement.textContent = playerCredits
        
    }else{
        alert("wrong idiot i hate you and i hope you die!!!!")
        computerCredits = computerCredits + 5;
        computercreditelement.textContent = computerCredits 
    }
    


    resultElement.textContent = lowRandomNumber
        if(counter >0) {
            resultElement.classList.add("bg-green")
    }
  


});

if (hightRandomNumber > randomNumber)
    alert("yes")

//als ik op gooi button klik dan komt er een getal bij counter. en als ik op hoger klik komt
//er een getal op diezelfde plek en dan wil ik dat als het getal van hoger meer is dan dat van gooi wil ik credits geven aan speler
// en een alert

// haal gooi button op met een queryselector
