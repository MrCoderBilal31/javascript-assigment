
// CHAPTER NO:1

// Question no:1
// Answer no:1
alert("welcome to my website")

// Question no:2
// Answer no:2
alert("error! please enter a valid password")

// Question no:3
// Answer no:3
alert("welcome to JS land...\nHappy Coding!")

// Question no:4
// Answer no:4

// option no:1
alert("welcome to JS land...")

// option no:2
alert("Happy Coding!")

// Question no:5
// Answer no:5
console.log("Hello... I run JS through my web browser's console")

// chapter no:1 compelet


// CHAPTER NO:2

// Question no:1
// Answer no:1
var uesrName;

// Question no:2
// Answer no:2
var myName = "BILAL ABDUL GHANI"

// Question no:3
// Answer no:3
// var massage; 
var massage = "hello world";
alert(massage)


// Question no:4
// Answer no:4
var studentbio = "Name: Bilal\nFatherNmae: A.Ghani\nAge: 19\nGender: Male"
alert(studentbio)

// Question no:5
// Answer no:5
var Pizza = "Pizza\npizz\npiz\npi\np"
alert(Pizza)

// Question no:6
// Answer no:6
var email = "bilalghani@gmail.com"
alert("My email address is " + email)

// Question no:7
// Answer no:7
var book = "A smarter way to learn JavaScript"
alert(book)


// Question no:7
// Answer no:7
document.write("Yah! I can write HTML content through JavaScript");

// Question no:8
// Answer no:8
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design)
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// chapter no:2 compelet

// CHAPTER NO:3

// Question no:1
// Answer no:1
var age = "19"
alert("I am" + age + " years old")

// Question no:2
// Answer no:2
var visits = "14"
alert("You have visited this site " + visits + " times")

// Question no:3
// Answer no:3
var birthYear = "2007"
document.write("My birth year is " + birthYear)

// Question no:4
// Answer no:4
var visitorName = "Bilal"
var productTitle = "T-shirt"
var quantity = "5"
document.write(visitorName + " ordered " + quantity + "  " + productTitle + " on XYZ Clothing store")


// chapter no:3 compelet

// chapter no:4


// Question no:1
// Answer no:1
var name, age, city;

// Question no:2
// Answer no:2

// 5 Legal Variable Names
var myName;
var $Price;
var age123;
var _User;
var user_first_name;

// 5 Illegal Variable Names
// var 123age;
// var my-name;
// var my name;
// var var;
// var user@name;

// Question no:3
// Answer no:3

// a
document.write("<h1>Rules for naming JS variables</h1>")

// b
document.write("<p>Variable names can only contain numbers, letters, $ and _. For example: $my_1stVariable</p>")

// c
document.write("<p>Variables must begin with a letter, $ or _. For example: $name, _name or name</p>")

// d
document.write("<p>Variable names are case sensitive</p>")

// e
document.write("<p>Variable names should not be JS keywords</p>")

// chapter no:4 compelet


// chapter no:5


// Question no:1
// Answer no:1
var num1 = 3
var num2 = 5
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>")



// Question no:2
// Answer no:2


// Subtraction
var num3 = 10;
var num4 = 5;
var sub = num3 - num4;
document.write("Subtraction of" + " " + num3 + " " + "and" + " " + num4 + " " + "is" + " " + sub + "<br>")

// Multiplication
var num3 = 10;
var num4 = 5;
var mul = num3 * num4;
document.write("Multiplication of" + " " + num3 + " " + "and" + " " + num4 + " " + "is" + " " + mul + "<br>")

// Division
var num3 = 10;
var num4 = 5;
var divi = num3 / num4;
document.write("Division of" + " " + num3 + " " + "and" + " " + num4 + " " + "is" + " " + divi + "<br>")

// Modulus
var num3 = 10;
var num4 = 5;
var mod = num3 % num4;
document.write("Modulus of" + " " + num3 + " " + "and" + " " + num4 + " " + "is" + " " + mod + "<br>")

// Question no:3
// Answer no:3
// a
var num;
// b
document.write("Value after variable declaration is: " + num + "<br>");
// c
num = 5;
// d
document.write("Initial value: " + num + "<br>");
// e
num++;
// f
document.write("Value after increment is: " + num + "<br>");
// g
num = num + 7;
// h
document.write("Value after addition is: " + num + "<br>");
// i
num--;
// j
document.write("Value after decrement is: " + num + "<br>");
// k
let remainder = num % 3;
// l
document.write("The remainder is : " + remainder + "<br>");


// Question no:4
// Answer no:4
var ticket = 600;
var multi = 5;
var resuit = ticket * multi;
document.write("Total cost to buy" + " " + multi + " " + "tickets to a movie  is" + " " + resuit + + " " + "PKR" + "<br>");

// Question no:5
// Answer no:5
var num = 4;

document.write("<h2>Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(num + "x" + i + "=" + (num * i) + "<br>")
};

// Question no:6
// Answer no:6  
var celsiusTemp = 25;

var fahrenheit = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheit + "°F<br>");

var fahrenheitTemp = 70;

var celsius = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsius + "°C");


// Question no:7
// Answer no:7
var priceItem1 = 650;

// b
var priceItem2 = 100;

// c
var quantityItem1 = 3;

// d
var quantityItem2 = 7;

// e
var shippingCharges = 150;

// Calculations
var totalItem1 = priceItem1 * quantityItem1;
var totalItem2 = priceItem2 * quantityItem2;
var totalCost = totalItem1 + totalItem2 + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);

// Question no:8
// Answer no:8

var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");

// Question no:9
// Answer no:9

var totalPkr = (10 * 104.80) + (25 * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPkr);

// Question no:10
// Answer no:10

var initialNum = 10;

var result = ((initialNum + 5) * 10) / 2;

// document.write("Result of single expression calculation: " + result);

// Question no:11
// Answer no:11

var currentYear = 2026;

var birthYear = 1998;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");

// Question no:12
// Answer no:12

var radius = 20;

var pi = 3.142;

var circumference = 2 * pi * radius;

var area = pi * (radius * radius);

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);

// Question no:13
// Answer no:13

var favoriteSnack = "chocolate chip cookies";

// b
var currentAge = 15;

// c
var maxAge = 65;

// d
var amountPerDay = 3;

// e
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365; // or yearsRemaining * 365.25 for leap years
var totalNeeded = daysRemaining * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated maximum age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");




