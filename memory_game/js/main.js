/* Link  the index.html to the main file  by copying the script elements s
script element and placing it in the html file right before the body closing tag 
<script src="js/main.js"></script> */
console.log("Up and Running!!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log ("User flipped " + cardsInPlay[0]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log ("User flipped " + cardsInPlay[1]);

if(cardsInPlay.length === 2){
console.log("The Length Equals two");
if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You Found a match"); 
	}
	else{
		alert("Sorry Try Again");
	}}
	else{ 
		alert("Sorry Try Again");
	}



