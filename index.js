//INTRODUCE YOURSELF
//Variables to store name,age, and nationality.
let name = "Theo Daniel";
let age = 30;
let nationality = "Nigerian";

//Combine varables into a sentence

let introduction =`Hello, my name is ${name}, I'm ${age} years old, and I'm ${nationality}.`;
console.log(introduction);

//QUESTION 2

//Variable to store your favourite quote
let quote = "Its the man with the wheel that can turn the wheel"


//change text to uppercase
let uppercaseQuote = quote.toUpperCase();
console.log(uppercaseQuote)

//change text to lowercase
let lowercaseQuote = quote.toLowerCase();
console.log(lowercaseQuote)

//Question 3 - Reverse Word
let word = "Vibration";
//Reverse word
let reverseWord = word.split("").reverse().join("");
console.log(reverseWord);

//Question 4 : Calculate Tool
let price1 = 11.54;
let price2 = 10.25;
let price3 = 5.50;
//calculate Total
let total = price1 + price2 + price3;
console.log(`The total is: ${total.toFixed(2)}`);

//Queestion 5
//Variables to score test score
let score1 = 80
let score2 = 50
let score3 = 75
let score4 = 200
let score5 = 25
//calculate average
let average = (score1 + score2 + score3 + score4 + score5) / 5;
console.log(`The average score is: ${average.toFixed(2)}`);

//QUESTION 6
//ARRAY TO STORE FAVOURITE FOOD
let foods = ["Coconut Rice", "whitesoup", "spaghetti", "moi-moi", "yam porridge"];

//Display first and last items
console.log(`First food: ${foods[0]}`)
console.log(`Last food: ${foods[4]}`)

//Question 7 Add Foods
// Add food to Begining of Array
foods.unshift("Fried potatoes");
console.log(foods);
// Add food to the end of Array
foods.push("water yam");
console.log(foods);

//Arrays to store student names
let jssOne = ["peter", "james", "jogn","Andrew","Samuel","Sanni","Saviour","Fanti","Goodness", "Gracious"];
    let jssTwo = ["Salmon", "Steve", "Chalton" , "Chalice", "Ebuka" , "Ebenezer", "Eben", "Emma", "Nuel", "Ella"];
    let jssThree = ["paul" , "Pascal", "Paulina", "Porcia", "Prince", "Pricilia", "Patricia" ,"pitt", "Princess", "Prudence"];

    console.log(jssOne)
    console.log(jssTwo)
    console.log(jssThree)
