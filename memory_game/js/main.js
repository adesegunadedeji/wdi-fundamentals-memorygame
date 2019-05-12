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
var cardsInPlay = [];
var checkForMatch = function(){

if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You Found a match"); 
	}
	else{
	alert("Sorry Try Again");
	}
}
var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch();
}
flipCard(0);
flipCard(2);










