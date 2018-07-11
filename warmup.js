// ex1
var apples = 14
console.log(apples)

console.log("I have " + apples + " apples.")

// ex2
var materialsArray = ['wood', 'metal', 'stone']

var wordsObject = {
  elephant: "The world's largest land mammal.",
  school: 'A place of learning.',
  iceCream: 'A delicious milk-based dessert.',
}

// ex3
var num = 9

if (num >= 11) {
    console.log(num + " is greater than 10.");
  } else if (num < 10) {
    console.log(num + " must be less than 10.")
  } else {
    console.log(num + " is exactly 10.");
}

// ex4
var times = 10;
for(var i=0; i < times; i++){
    console.log("Doing the same thing over and over.");
}

// ex5
var base = 20;
var num = 5
for(var i=0; i < base; i++){
    console.log(num += base);
}

// ex6
var times = 100;
var total = 0
for(var i=0; i < times; i++){
    console.log(total += 1);
}

// ex7

for (var i = 3; i <= 15; i++){
  if (i > 9) {
    console.log("you can ride this rollercoaster");
  } else {
    console.log("you are too short to ride this rollercoaster");
  }
}

// ex8
var i=0, item, containers = ['purse','wallet','backpack'];
while(item = containers[i++]){
    console.log(item);
}

//ex9
var helloWorld = console.log("Hello World!")
helloWorld

// ex10

function add(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  console.log(sum)
}

add(5,7)
