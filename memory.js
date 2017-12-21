var languageSetting = 1

//Dictionary for images.
var cardChoices = [["pink.png","pink_1.png"],["brown.png","brown_1.png"],["purple.png","purple_1.png"],["blue.png","blue_1.png"],["green.png","green_1.png"],["yellow.png","yellow_1.png"],["orange.png","orange_1.png"],["red.png","red_1.png"],["grey.png","grey_1.png"],["black.png","black_1.png"],["white.png","white_1.png"],["rectangle_pink.png","rectangle_pink_1.png"],["rectangle_brown.png","rectangle_brown_1.png"],["rectangle_purple.png","rectangle_purple_1.png"],["rectangle_blue.png","rectangle_blue_1.png"],["rectangle_green.png","rectangle_green_1.png"],["rectangle_yellow.png","rectangle_yellow_1.png"],["rectangle_orange.png","rectangle_orange_1.png"],["rectangle_red.png","rectangle_red_1.png"],["rectangle_grey.png","rectangle_grey_1.png"],["rectangle_black.png","rectangle_black_1.png"],["rectangle_white.png","rectangle_white_1.png"],["arrow_pink.png","arrow_pink_1.png"],["arrow_brown.png","arrow_brown_1.png"],["arrow_purple.png","arrow_purple_1.png"],["arrow_blue.png","arrow_blue_1.png"],["arrow_green.png","arrow_green_1.png"],["arrow_yellow.png","arrow_yellow_1.png"],["arrow_orange.png","arrow_orange_1.png"],["arrow_red.png","arrow_red_1.png"],["arrow_grey.png","arrow_grey_1.png"],["arrow_black.png","arrow_black_1.png"],["arrow_white.png","arrow_white_1.png"],["star_pink.png","star_pink_1.png"],["star_brown.png","star_brown_1.png"],["star_purple.png","star_purple_1.png"],["star_blue.png","star_blue_1.png"],["star_green.png","star_green_1.png"],["star_yellow.png","star_yellow_1.png"],["star_orange.png","star_orange_1.png"],["star_red.png","star_red_1.png"],["star_grey.png","star_grey_1.png"],["star_black.png","star_black_1.png"],["star_white.png","star_white_1.png"],["triangle_pink.png","triangle_pink_1.png"],["triangle_brown.png","triangle_brown_1.png"],["triangle_purple.png","triangle_purple_1.png"],["triangle_blue.png","triangle_blue_1.png"],["triangle_green.png","triangle_green_1.png"],["triangle_yellow.png","triangle_yellow_1.png"],["triangle_orange.png","triangle_orange_1.png"],["triangle_red.png","triangle_red_1.png"],["triangle_grey.png","triangle_grey_1.png"],["triangle_black.png","triangle_black_1.png"],["triangle_white.png","triangle_white_1.png"],["circle_pink.png","circle_pink_1.png"],["circle_brown.png","circle_brown_1.png"],["circle_purple.png","circle_purple_1.png"],["circle_blue.png","circle_blue_1.png"],["circle_green.png","circle_green_1.png"],["circle_yellow.png","circle_yellow_1.png"],["circle_orange.png","circle_orange_1.png"],["circle_red.png","circle_red_1.png"],["circle_grey.png","circle_grey_1.png"],["circle_black.png","circle_black_1.png"],["circle_white.png","circle_white_1.png"],["square_pink.png","square_pink_1.png"],["square_brown.png","square_brown_1.png"],["square_purple.png","square_purple_1.png"],["square_blue.png","square_blue_1.png"],["square_green.png","square_green_1.png"],["square_yellow.png","square_yellow_1.png"],["square_orange.png","square_orange_1.png"],["square_red.png","square_red_1.png"],["square_grey.png","square_grey_1.png"],["square_black.png","square_black_1.png"],["square_white.png","square_white_1.png"]];

//Variable to allow random selection of dictionary images.
var cardLength = cardChoices.length;
console.log(cardLength);

//Variables to select random cards from dictionary images.
var cardOption1 = (Math.floor(Math.random() * cardLength));
console.log(cardOption1);
var cardSelected1a = cardChoices[cardOption1][0];
console.log(cardSelected1a);
var cardSelected1b = cardChoices[cardOption1][languageSetting];
console.log(cardSelected1b);

var cardOption2 = (Math.floor(Math.random() * cardLength));
console.log(cardOption2);
while (cardOption2 === cardOption1) {
cardOption2 = (Math.floor(Math.random() * cardLength));}
var cardSelected2a = cardChoices[cardOption2][0];
console.log(cardSelected2a);
var cardSelected2b = cardChoices[cardOption2][languageSetting];
console.log(cardSelected2b);

var cardOption3 = (Math.floor(Math.random() * cardLength));
console.log(cardOption3);
while (cardOption3 === cardOption1 || cardOption3 === cardOption2) {
cardOption3 = (Math.floor(Math.random() * cardLength));}
var cardSelected3a = cardChoices[cardOption3][0];
console.log(cardSelected3a);
var cardSelected3b = cardChoices[cardOption3][languageSetting];
console.log(cardSelected3b);

var cardOption4 = (Math.floor(Math.random() * cardLength));
console.log(cardOption4);
while (cardOption4 === cardOption1 || cardOption4 === cardOption2 || cardOption4 === cardOption3) {
cardOption4 = (Math.floor(Math.random() * cardLength));}
var cardSelected4a = cardChoices[cardOption4][0];
console.log(cardSelected4a);
var cardSelected4b = cardChoices[cardOption4][languageSetting];
console.log(cardSelected4b);

var cardOption5 = (Math.floor(Math.random() * cardLength));
console.log(cardOption5);
while (cardOption5 === cardOption1 || cardOption5 === cardOption2 || cardOption5 === cardOption3 || cardOption5 === cardOption4) {
cardOption5 = (Math.floor(Math.random() * cardLength));}
var cardSelected5a = cardChoices[cardOption5][0];
console.log(cardSelected5a);
var cardSelected5b = cardChoices[cardOption5][languageSetting];
console.log(cardSelected5b);

var cardOption6 = (Math.floor(Math.random() * cardLength));
console.log(cardOption6);
while (cardOption6 === cardOption1 || cardOption6 === cardOption2 || cardOption6 === cardOption3 || cardOption6 === cardOption4 || cardOption6 === cardOption5) {
cardOption6 = (Math.floor(Math.random() * cardLength));
}
var cardSelected6a = cardChoices[cardOption6][0];
console.log(cardSelected6a);
var cardSelected6b = cardChoices[cardOption6][languageSetting];
console.log(cardSelected6b);

var cardOption7 = (Math.floor(Math.random() * cardLength));
console.log(cardOption7);
while (cardOption7 === cardOption1 || cardOption7 === cardOption2 || cardOption7 === cardOption3 || cardOption7 === cardOption4 || cardOption7 === cardOption5 || cardOption7 === cardOption6) {
cardOption7 = (Math.floor(Math.random() * cardLength));
}
var cardSelected7a = cardChoices[cardOption7][0];
console.log(cardSelected7a);
var cardSelected7b = cardChoices[cardOption7][languageSetting];
console.log(cardSelected7b);

var cardOption8 = (Math.floor(Math.random() * cardLength));
console.log(cardOption8);
while (cardOption8 === cardOption1 || cardOption8 === cardOption2 || cardOption8 === cardOption3 || cardOption8 === cardOption4 || cardOption8 === cardOption5 || cardOption8 === cardOption6 || cardOption8 === cardOption7) {
cardOption8 = (Math.floor(Math.random() * cardLength));
}
var cardSelected8a = cardChoices[cardOption8][0];
console.log(cardSelected8a);
var cardSelected8b = cardChoices[cardOption8][languageSetting];
console.log(cardSelected8b);

var cardOption9 = (Math.floor(Math.random() * cardLength));
console.log(cardOption9);
while (cardOption9 === cardOption1 || cardOption9 === cardOption2 || cardOption9 === cardOption3 || cardOption9 === cardOption4 || cardOption9 === cardOption5 || cardOption9 === cardOption6 || cardOption9 === cardOption7 || cardOption9 === cardOption8) {
cardOption9 = (Math.floor(Math.random() * cardLength));
}
var cardSelected9a = cardChoices[cardOption9][0];
console.log(cardSelected9a);
var cardSelected9b = cardChoices[cardOption9][languageSetting];
console.log(cardSelected9b);

var cardOption10 = (Math.floor(Math.random() * cardLength));
console.log(cardOption10);
while (cardOption10 === cardOption1 || cardOption10 === cardOption2 || cardOption10 === cardOption3 || cardOption10 === cardOption4 || cardOption10 === cardOption5 || cardOption10 === cardOption6 || cardOption10 === cardOption7 || cardOption10 === cardOption8 || cardOption10 === cardOption9) {
cardOption10 = (Math.floor(Math.random() * cardLength));
}
var cardSelected10a = cardChoices[cardOption10][0];
console.log(cardSelected10a);
var cardSelected10b = cardChoices[cardOption10][languageSetting];
console.log(cardSelected10b);

//Array to take selected cards for shuffling.
var shuffleArray = [cardSelected1a, cardSelected1b, cardSelected2a, cardSelected2b, cardSelected3a, cardSelected3b, cardSelected4a, cardSelected4b, cardSelected5a, cardSelected5b, cardSelected6a, cardSelected6b, cardSelected7a, cardSelected7b, cardSelected8a, cardSelected8b, cardSelected9a, cardSelected9b, cardSelected10a, cardSelected10b];
var shuffleLength = shuffleArray.length;
console.log(shuffleLength);

//Variables to shuffle cards on the game board.
var shuffles = []
var cardShuffles = []
for (var i = 0; i < 20; i++) {
	var shuffle = Math.floor(Math.random() * shuffleLength);	
	while (shuffles.includes(shuffle)){
		shuffle = Math.floor(Math.random() * shuffleLength);
	}
	shuffles.push(shuffle);
}
console.log(shuffles)

for (var i = 0; i < shuffleArray.length; i++) {
	cardShuffles[i] = shuffleArray[shuffles[i]]
}
console.log(cardShuffles)

//Variables to activate card onclick functions.

var clicks = [];
for (var i = 0; i < 20; i++) {
	clicks[i] = 1
}

//Variables to handle card swapping and comparing.
var puzzle = "plain_card.png";
var solved = "correct_card.png";
var firstCard = "unclicked";
var firstCardPosition = "unknown";
var secondCard = "unclicked";
var secondCardPosition = "unknown";
var thirdCard = "unclicked";
var thirdCardPosition = "unknown";

function resetFirst(){
	firstCard = "unclicked";
	firstCardPosition = "unknown";
}

function resetSecond(){
	secondCard = "unclicked";
	secondCardPosition = "unknown";
}

function resetThird(){
	firstCard = thirdCard;
	firstCardPosition = thirdCardPosition;
	thirdCard = "unclicked";
	thirdCardPosition = "unknown";
	firstCardPosition.src = firstCard;
}

function noMatch(){//Resetting click values from previous incorrect guess.

	for (var i = 0; i < 20; i++) {
		if (clicks[i] === 2) {
			clicks[i] = 1;
			console.log("Card " + (i+1) + "now equals " + clicks[i])			
		}
	}
}

function theyMatch(){
	console.log("theyMatch runs");
	for (var i = 0; i < clicks.length; i++) {
		if (clicks[i] === 2) {
			clicks[i] = 3;
			console.log('Card ' + (i+1) + ' now equals ' + clicks[i]);
		}
	}
	//Replace puzzle card with solved image.
	firstCardPosition.src = solved;
	secondCardPosition.src = solved;
	resetFirst();
	resetSecond();
	winningMemory();
}

function checkEqual(elem){
	return elem === 3
}

function winningMemory(){
	console.log("Winning function runs.");
	if (clicks.every(checkEqual)){
		alert("You win!");
	}
}

function checkMatch(){
	console.log("checkMatch runs");
	if(firstCard === cardSelected1a || firstCard === cardSelected1b){
		if(secondCard === cardSelected1a || secondCard === cardSelected1b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected2a || firstCard === cardSelected2b){
		if(secondCard === cardSelected2a || secondCard === cardSelected2b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected3a || firstCard === cardSelected3b){
		if(secondCard === cardSelected3a || secondCard === cardSelected3b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected4a || firstCard === cardSelected4b){
		if(secondCard === cardSelected4a || secondCard === cardSelected4b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected5a || firstCard === cardSelected5b){
		if(secondCard === cardSelected5a || secondCard === cardSelected5b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected6a || firstCard === cardSelected6b){
		if(secondCard === cardSelected6a || secondCard === cardSelected6b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected7a || firstCard === cardSelected7b){
		if(secondCard === cardSelected7a || secondCard === cardSelected7b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected8a || firstCard === cardSelected8b){
		if(secondCard === cardSelected8a || secondCard === cardSelected8b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected9a || firstCard === cardSelected9b){
		if(secondCard === cardSelected9a || secondCard === cardSelected9b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
	if(firstCard === cardSelected10a || firstCard === cardSelected10b){
		if(secondCard === cardSelected10a || secondCard === cardSelected10b){
			theyMatch();
		}
		else {
			noMatch();
		}
	}
}

function checkPair (){ //Function to check if the cards are pairs or not.
	console.log("checkPair function loads.");
	//If thirdCard is clicked then a new attempt has begun. This is listed before the second card check so that the card values remain correct.
	if (thirdCard !== "unclicked"){
		console.log("Third card check successful.");
		//Replace cards from previous guess with puzzle image.
		firstCardPosition.src = puzzle;
		secondCardPosition.src = puzzle;
		//Reset other cards in checker.
		resetSecond();
		resetThird();
	}
	//If secondCard remains clicked after thirdCard check has finished then the checkMatch function will run to compare the two revealed cards.
	if (secondCard !== "unclicked"){
		console.log("Second card check successful.");
		checkMatch();
	}
}

//Onclick functions from HTML file.
function clickCard1() {
	console.log("Card 1 clicked");
	//Variable to link to the correct HTML elements.
	var position1 = document.getElementById("card1");
	//If the card has not been selected then it will be set to 1. If the card has been clicked on then it will be set to 2. If the card has been solved then it will be set to 3. The if statement prevents players from removing cards from the board by double clicking on them.
	if (clicks[0] === 1){
		console.log("Card 1 equals 1");
		//Displays the image for this card.
		position1.src = cardShuffles[0];
		//Updates the card value to show that the image is visible.
		clicks[0] = 2;
		//Else if statement to update the matching variables.
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[0];
			firstCardPosition = position1;
			console.log("first card updated");}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[0];
			secondCardPosition = position1;
			console.log("second card updated");
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[0];
			thirdCardPosition = position1;
			console.log("third card updated");
		}
		//Run the matching functions.
		checkPair();}
	//Else statement for debugging purposes.
	else {
	console.log("else statement active.");}
  }

function clickCard2() {
	console.log("Card 2 clicked");
	var position2 = document.getElementById("card2");
	if (clicks[1] === 1){
		console.log("Card 2 equals 1");
		position2.src = cardShuffles[1];
		clicks[1] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[1];
			firstCardPosition = position2;}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[1];
			secondCardPosition = position2;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[1];
			thirdCardPosition = position2;
		}
		checkPair();}
}

function clickCard3() {
	console.log("Card 3 clicked");
	var position3 = document.getElementById("card3");
	if (clicks[2] === 1){
		console.log("Card 3 equals 1");
		position3.src = cardShuffles[2];
		clicks[2] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[2];
			firstCardPosition = position3;}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[2];
			secondCardPosition = position3;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[2];
			thirdCardPosition = position3;
		}
		checkPair();}
}

function clickCard4() {
	console.log("Card 4 clicked");
	var position4 = document.getElementById("card4");
	if (clicks[3] === 1){
		console.log("Card 4 equals 1");
		position4.src = cardShuffles[3];
		clicks[3] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[3];
			firstCardPosition = position4;}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[3];
			secondCardPosition = position4;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[3];
			thirdCardPosition = position4;
		}
		checkPair();}
}

function clickCard5() {
	console.log("Card 5 clicked");
	var position5 = document.getElementById("card5");
	if (clicks[4] === 1){
		console.log("Card 5 equals 1");
		position5.src = cardShuffles[4];
		clicks[4] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[4];
			firstCardPosition = position5;
			console.log(firstCardPosition);}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[4];
			secondCardPosition = position5;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[4];
			thirdCardPosition = position5;
		}
		checkPair();}
}

function clickCard6() {
	console.log("Card 6 clicked");
	var position6 = document.getElementById("card6");
	if (clicks[5] === 1){
		console.log("Card 6 equals 1");
		position6.src = cardShuffles[5];
		clicks[5] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[5];
			firstCardPosition = position6;
			console.log(firstCardPosition);}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[5];
			secondCardPosition = position6;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[5];
			thirdCardPosition = position6;
		}
		checkPair();}
}

function clickCard7() {
	console.log("Card 7 clicked");
	var position7 = document.getElementById("card7");
	if (clicks[6] === 1){
		console.log("Card 7 equals 1");
		position7.src = cardShuffles[6];
		clicks[6] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[6];
			firstCardPosition = position7;
			console.log(firstCardPosition);}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[6];
			secondCardPosition = position7;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[6];
			thirdCardPosition = position7;
		}
		checkPair();}
}

function clickCard8() {
	console.log("Card 8 clicked");
	var position8 = document.getElementById("card8");
	if (clicks[7] === 1){
		console.log("Card 8 equals 1");
		position8.src = cardShuffles[7];
		clicks[7] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[7];
			firstCardPosition = position8;
			console.log(firstCardPosition);}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[7];
			secondCardPosition = position8;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[7];
			thirdCardPosition = position8;
		}
		checkPair();}
}

function clickCard9() {
	console.log("Card 9 clicked");
	var position9 = document.getElementById("card9");
	if (clicks[8] === 1){
		console.log("Card 9 equals 1");
		position9.src = cardShuffles[8];
		clicks[8] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[8];
			firstCardPosition = position9;
			console.log(firstCardPosition);}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[8];
			secondCardPosition = position9;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[8];
			thirdCardPosition = position9;
		}
		checkPair();}
}

function clickCard10() {
	console.log("Card 10 clicked");
	var position10 = document.getElementById("card10");
	if (clicks[9] === 1){
		console.log("Card 10 equals 1");
		position10.src = cardShuffles[9];
		clicks[9] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[9];
			firstCardPosition = position10;}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[9];
			secondCardPosition = position10;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[9];
			thirdCardPosition = position10;
		}
		checkPair();}
}

function clickCard11() {
	var position11 = document.getElementById("card11");
	if (clicks[10] === 1){
		position11.src = cardShuffles[10];
		clicks[10] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[10];
			firstCardPosition = position11;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[10];
			secondCardPosition = position11;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[10];
			thirdCardPosition = position11;
		}
		checkPair();
	}
}

function clickCard12() {
	var position12 = document.getElementById("card12");
	if (clicks[11] === 1){
		position12.src = cardShuffles[11];
		clicks[11] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[11];
			firstCardPosition = position12;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[11];
			secondCardPosition = position12;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[11];
			thirdCardPosition = position12;
		}
		checkPair();
	}
}

function clickCard13() {
	var position13 = document.getElementById("card13");
	if (clicks[12] === 1){
		position13.src = cardShuffles[12];
		clicks[12] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[12];
			firstCardPosition = position13;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[12];
			secondCardPosition = position13;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[12];
			thirdCardPosition = position13;
		}
		checkPair();
	}
}

function clickCard14() {
	var position14 = document.getElementById("card14");
	if (clicks[13] === 1){
		position14.src = cardShuffles[13];
		clicks[13] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[13];
			firstCardPosition = position14;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[13];
			secondCardPosition = position14;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[13];
			thirdCardPosition = position14;
		}
		checkPair();
	}
}

function clickCard15() {
	var position15 = document.getElementById("card15");
	if (clicks[14] === 1){
		position15.src = cardShuffles[14];
		clicks[14] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[14];
			firstCardPosition = position15;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[14];
			secondCardPosition = position15;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[14];
			thirdCardPosition = position15;
		}
		checkPair();
	}
}

function clickCard16() {
	var position16 = document.getElementById("card16");
	if (clicks[15] === 1){
		position16.src = cardShuffles[15];
		clicks[15] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[15];
			firstCardPosition = position16;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[15];
			secondCardPosition = position16;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[15];
			thirdCardPosition = position16;
		}
		checkPair();
	}
}

function clickCard17() {
	var position17 = document.getElementById("card17");
	if (clicks[16] === 1){
		position17.src = cardShuffles[16];
		clicks[16] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[16];
			firstCardPosition = position17;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[16];
			secondCardPosition = position17;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[16];
			thirdCardPosition = position17;
		}
		checkPair();
	}
}

function clickCard18() {
	var position18 = document.getElementById("card18");
	if (clicks[17] === 1){
		position18.src = cardShuffles[17];
		clicks[17] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[17];
			firstCardPosition = position18;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[17];
			secondCardPosition = position18;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[17];
			thirdCardPosition = position18;
		}
		checkPair();
	}
}

function clickCard19() {
	var position19 = document.getElementById("card19");
	if (clicks[18] === 1){
		position19.src = cardShuffles[18];
		clicks[18] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[18];
			firstCardPosition = position19;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[18];
			secondCardPosition = position19;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[18];
			thirdCardPosition = position19;
		}
		checkPair();
	}
}

function clickCard20() {
	var position20 = document.getElementById("card20");
	if (clicks[19] === 1){
		position20.src = cardShuffles[19];
		clicks[19] = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffles[19];
			firstCardPosition = position20;
		}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffles[19];
			secondCardPosition = position20;
		}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffles[19];
			thirdCardPosition = position20;
		}
		checkPair();
	}
}
