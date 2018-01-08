var cardChoices = [["pink.png","pink_1.png"],["brown.png","brown_1.png"],
["purple.png","purple_1.png"],["blue.png","blue_1.png"],
["green.png","green_1.png"],["yellow.png","yellow_1.png"],
["orange.png","orange_1.png"],["red.png","red_1.png"],
["grey.png","grey_1.png"],["black.png","black_1.png"],["white.png","white_1.png"],
["rectangle_pink.png","rectangle_pink_1.png"],
["rectangle_brown.png","rectangle_brown_1.png"],["rectangle_purple.png","rectangle_purple_1.png"],
["rectangle_blue.png","rectangle_blue_1.png"],["rectangle_green.png","rectangle_green_1.png"],
["rectangle_yellow.png","rectangle_yellow_1.png"],["rectangle_orange.png","rectangle_orange_1.png"],
["rectangle_red.png","rectangle_red_1.png"],["rectangle_grey.png","rectangle_grey_1.png"]
,["rectangle_black.png","rectangle_black_1.png"],["rectangle_white.png","rectangle_white_1.png"],
["arrow_pink.png","arrow_pink_1.png"],["arrow_brown.png","arrow_brown_1.png"],
["arrow_purple.png","arrow_purple_1.png"],["arrow_blue.png","arrow_blue_1.png"],
["arrow_green.png","arrow_green_1.png"],["arrow_yellow.png","arrow_yellow_1.png"],
["arrow_orange.png","arrow_orange_1.png"],["arrow_red.png","arrow_red_1.png"],
["arrow_grey.png","arrow_grey_1.png"],["arrow_black.png","arrow_black_1.png"],
["arrow_white.png","arrow_white_1.png"],["star_pink.png","star_pink_1.png"],
["star_brown.png","star_brown_1.png"],["star_purple.png","star_purple_1.png"],
["star_blue.png","star_blue_1.png"],["star_green.png","star_green_1.png"],
["star_yellow.png","star_yellow_1.png"],["star_orange.png","star_orange_1.png"],
["star_red.png","star_red_1.png"],["star_grey.png","star_grey_1.png"],
["star_black.png","star_black_1.png"],["star_white.png","star_white_1.png"],
["triangle_pink.png","triangle_pink_1.png"],["triangle_brown.png","triangle_brown_1.png"],
["triangle_purple.png","triangle_purple_1.png"],["triangle_blue.png","triangle_blue_1.png"],
["triangle_green.png","triangle_green_1.png"],["triangle_yellow.png","triangle_yellow_1.png"],
["triangle_orange.png","triangle_orange_1.png"],["triangle_red.png","triangle_red_1.png"],
["triangle_grey.png","triangle_grey_1.png"],["triangle_black.png","triangle_black_1.png"],
["triangle_white.png","triangle_white_1.png"],["circle_pink.png","circle_pink_1.png"],
["circle_brown.png","circle_brown_1.png"],["circle_purple.png","circle_purple_1.png"],
["circle_blue.png","circle_blue_1.png"],["circle_green.png","circle_green_1.png"],
["circle_yellow.png","circle_yellow_1.png"],["circle_orange.png","circle_orange_1.png"],
["circle_red.png","circle_red_1.png"],["circle_grey.png","circle_grey_1.png"],
["circle_black.png","circle_black_1.png"],["circle_white.png","circle_white_1.png"],
["square_pink.png","square_pink_1.png"],["square_brown.png","square_brown_1.png"],
["square_purple.png","square_purple_1.png"],["square_blue.png","square_blue_1.png"],
["square_green.png","square_green_1.png"],["square_yellow.png","square_yellow_1.png"],
["square_orange.png","square_orange_1.png"],["square_red.png","square_red_1.png"],
["square_grey.png","square_grey_1.png"],["square_black.png","square_black_1.png"],
["square_white.png","square_white_1.png"]]

function shuffle(a) {
		console.log(a)
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}


shuffle(cardChoices) //shuffle all pairs
tenPairToPlay = cardChoices.slice(0,10)//take out only first 10 pair of the shuffled array

//select single cards out,
var cardSelectedA = []
var cardSelectedB = []
for (var i = 0; i < tenPairToPlay.length; i++){
	cardSelectedA[i] = tenPairToPlay[i][0]
	cardSelectedB[i] = tenPairToPlay[i][1]
}
var singCard = cardSelectedA.concat(cardSelectedB)

//shuffle 20 single cards
shuffle(singCard)

//by default every card position equals to 1
var cardStats = []
for (var i = 0 ; i < tenPairToPlay.length*2 ; i++){
	cardStats[i] = 1
} 

//Variables to handle card swapping and comparing.
var firstCard = "unclicked";
var firstCardImg = "unknown";
var secondCard = "unclicked";
var secondCardImg = "unknown";
var thirdCard = "unclicked";
var thirdCardImg = "unknown";

function resetFirst(){
	firstCard = "unclicked";
	firstCardImg = "unknown";}

function resetSecond(){
	secondCard = "unclicked";
	secondCardImg = "unknown";}

function resetThird(){
	firstCard = thirdCard
	firstCardImg = thirdCardImg
	thirdCard = "unclicked"
	thirdCardImg = "unknown"
	firstCardImg.src = firstCard //WTF
}

function noMatch(){//Resetting click values from previous incorrect guess.
	for (var i = 0 ; i < tenPairToPlay.length*2 ; i++){
		if (cardStats[i] === 2){
			cardStats[i] = 1
		}
	}
}

function theyMatch(){
	for (var i = 0 ; i < tenPairToPlay.length*2 ; i++){
		if (cardStats[i] === 2){
			cardStats[i] = 3
		}
	}
		
	//Replace puzzle card with solved image.
	firstCardImg.src = "correct_card.png"
	secondCardImg.src = "correct_card.png"
	resetFirst()
	resetSecond()
	winningMemory()
}

function winningMemory(){
	var win = true
	for (var i = 0 ; i < tenPairToPlay.length*2; i++){
		if(cardStats[i] !== 3) {
			var win = false
		}
	}

	if(win){
		alert("You win!")
	}
}


function checkMatch(){
	for (var i = 0; i < tenPairToPlay.length*2 ; i++){
		if ((firstCard === cardSelectedA[i] && secondCard === cardSelectedB[i]) || 
			(secondCard === cardSelectedA[i] && firstCard === cardSelectedB[i])){
			theyMatch()
		} else {
			noMatch()
		}
	}
}


function checkPair (){ //Function to check if the cards are pairs or not.
	//If thirdCard is clicked then a new attempt has begun. 
	//This is listed before the second card check so that the card values remain correct.
	if (thirdCard !== "unclicked"){
		//Replace cards from previous guess with puzzle image.
		firstCardImg.src = "plain_card.png"
		secondCardImg.src = "plain_card.png"
		//Reset other cards in checker.
		resetSecond();
		resetThird();
	}
	//If secondCard remains clicked after thirdCard check has finished then the checkMatch function will run to compare the two revealed cards.
	if (secondCard !== "unclicked"){
		checkMatch();
	}
}

//Onclick functions from HTML file.
var	CardImg = document.querySelectorAll("#memoryCards > img")
	for(var i = 0; i < tenPairToPlay.length*2; i++){
		CardImg[i] = addEventListener("click",clickCard)
	}



function clickCard() {

	var clickedCard = event.target
	var idx = Number(clickedCard.dataset.card)

	var cardIdToGet = "card" + (idx + 1)

	var cardImg = document.getElementById(cardIdToGet)

	if (cardStats[idx] === 1) {
		cardImg.src = singCard[idx]
		cardStats[idx] = 2
		
		if (firstCard === "unclicked") {
			firstCard = singCard[idx]
			firstCardImg = cardImg
		}
		
		else if (secondCard === "unclicked") {
			secondCard = singCard[idx]
			secondCardImg = cardImg
		}
		
		else if (thirdCard === "unclicked") {
			thirdCard = singCard[idx]
			thirdCardImg = cardImg
		}

		checkPair()
	}
}

	
