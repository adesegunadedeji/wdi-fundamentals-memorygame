/* Link  the index.html to the main file  by copying the script elements s
script element and placing it in the html file right before the body closing tag 
<script src="js/main.js"></script> */
console.log("Up and Running!!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];
//Array with cards which are in play: 
var cardsInPlay = [];
//Function that checks for Match
var checkForMatch = function(){
	//THIS IS THE PART IM STRUGGLING WITH 
	this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You Found a match"); 
	}
	else{
	alert("Sorry Try Again");
	}
}


var flipCard = function () {
var cardId = this.getAttribute("data-id");

console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch(this);
}


var createBoard = function(){
for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement('img');

	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id",i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById("game-board").appendChild(cardElement);
}
	

}

/*function resetButton() {
	document.getElementById("myForm").reset();
}*/
/*<form id="myForm"> <input type="button" onclick="resetButton()" value="Reset the Game">*/

createBoard();









