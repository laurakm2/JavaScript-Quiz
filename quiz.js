/* 	This quiz was created by Kelly Laura. 
	Project for Treehouse track - Full-stack Javascript Development.
	*/
	
// This is to keep track of correct answers
var correct = 0;

//quiz questions and adding 1 for each correct answers
var answer1 = prompt("1. Which US state that is shaped like a mitten?");

	if(answer1.toUpperCase() === "MICHIGAN"){
		alert("You are correct!");
		correct += 1
	} else {
		alert("Wrong answer. Sorry!");
	}
	console.log(correct);

	
var answer2 = prompt("2. Is the United States in North America? Y or N ");

	if(answer2.toUpperCase() === "YES" || answer2.toUpperCase() === "Y"){
		alert("You are correct!");
		correct += 1
	} else {
		alert("Wrong answer. Sorry!");
	}
	console.log(correct);
	
var answer3 = prompt("3. How many inches are in a foot?");

	if(answer3.toUpperCase() === "TWELVE" || answer3 === "12"){
		alert("You are correct!");
		correct += 1
	} else {
		alert("Wrong answer. Sorry!");
	}
	console.log(correct);
	
var answer4 = prompt("4. Is Argentina in the Southern Hemisphere? Y or N");

	if(answer4.toUpperCase() === "YES" || answer4.toUpperCase() === "Y"){
		alert("You are correct!");
		correct += 1
	} else {
		alert("Wrong answer. Sorry!");
	}
	console.log(correct);
	
var answer5 = prompt("5. Has anyone ever landed on the Moon? Y or N");

	if(answer5.toUpperCase() === "YES" || answer5.toUpperCase() === "Y"){
		alert("You are correct!");
		correct += 1
	} else {
		alert("Wrong answer. Sorry!");
	}
	console.log(correct);
	
//finishing up the quiz and alerting the results

alert("You finished my quiz, and you got " + correct + " out of 5 correct!");

if (correct === 5){
	alert("You did an amazing job. You get a Gold Crown!");
	
} else if (correct >= 3){
	alert("Great job. You get a Silver crown!");
} else if (correct < 3 && correct >= 1) {
	alert("Good job. You get a bronze star");
} else {
	alert("Sorry, you didn't get a crown this time. Keep trying!")
}
alert("Thanks for playing.");

 //the end