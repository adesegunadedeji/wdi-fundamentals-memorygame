/* Link  the index.html to the main file  by copying the script elements s
script element and placing it in the html file right before the body closing tag 
<script src="js/main.js"></script> */
console.log("Up and Running!!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){

if (cardsInPlay[0] === cardsInPlay[1]){
	console.log("You Found a match"); 
	}
	else{
	console.log("Sorry Try Again");
	}
}
var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}
flipCard(0);
flipCard(2);







