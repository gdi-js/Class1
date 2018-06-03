 /*
    #######################################################
    FILENAME: mycode.js
    OVERVIEW: GDI JS Class 1
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

/*
	Let’s Develop It 1.1 
	Open index.html.
	Add a comment to the code.
	Try different ways of printing a message.
	Create a new file called mycode.js.
	Move your code to this file and link it to your page.
*/


function secretMessage(){
  console.log('Secret message');
}
secretMessage();

/*
	Let’s Develop It 1.2	
	Open index.html.
	Add a comment to the code.
	Try different ways of printing a message.
	Create a new file called mycode.js.
	Move your code to this file and link it to your page.
*/
function consoleExample(){
	alert('Hello World!');
	console.log('Secret message');
	console.log('Hello World!');
	console.log('I am glad to meet you');
	console.log('I am fuzzy');
}

/*
	Let’s Develop It 1.3
	In your JavaScript file, create a variable and give it a valid name and 
	value. Then, display the value.
*/
function createVariable(){
	var kitty = 5;
	console.log(kitty);
	document.getElementById("p1").innerHTML=(kitty);
}

/*
	Let’s Develop It 1.4 
	Create two variables and try some arithmetic operators. 
	Don't forget to display your results!
*/
function arithmetic(){	
	var numberOfKittens = 5;
	var numberOfPuppies = 5;
	var totalAnimals = numberOfKittens + numberOfPuppies;
    console.log(totalAnimals);
}
/*
	Let’s Develop It 1.5 
	Create two variables, a first name and a last name, and then put them together 
	to make a full name. Don't forget to display your results!
	You can use concatenation to mix strings and numbers. When you do this, JavaScript 
	will treat the number like a string. 
	You can run it in mycode.js.
*/
function nameFunction(){
    var firstName = 'Denise';
    var lastName = 'Nguyen';
    var fullName = firstName + ' ' + lastName;    // value is 'Erik Krieg'
	console.log(fullName);
}

// USING CONCAT JS FUNCTION
function myFunction() {
    var str1 = "Hello ";
    var str2 = "world!";
    var res = str1.concat(str2);
    document.getElementById("demo").innerHTML = res;
}

// COMBINES STRING AND INT 
function stringFunction(){
    var numberOfFruit = 6;
    var typeOfFruit = 'bananas';
    var allTheFruit = 'I have ' + numberOfFruit + ' ' + typeOfFruit + '!';
    console.log(allTheFruit);
}
/*
	Let’s Develop It 1.6
	Create a program to calculate the tip at a
	restaurant. It should:
	Have variables for the bill pre-tip and the tip percentage.
	Calculate the total bill.
	Output a sentence like "Your total bill, with tip, is $14.75".
	Bonus: Use toFixed() to round the bill total to 2 decimals.
*/
function restaurant(){
	var billPreTip = 13.60;
	var tipPercent = 0.05; // Can be changed
	var billTip  = billPreTip.toFixed(2) * tipPercent.toFixed(2);
	var receipt  = 'Meal: $' + billPreTip + '\n' + 
				   'Tip: $' + billTip +  '\n' + 
				   'Total: $' + (billPreTip + billTip).toFixed(2) ;
	console.log(receipt);
}



