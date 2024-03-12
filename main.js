// string = "hellow world"//string:for textual data.
var message = ("hellow");
console.log(message); //syntax
//explicit
var variableb = 'another string';
console.log(variableb);
var number = 1; //number:for numerical values(integers and floating -point numbers)
console.log(number);
var string = "any string";
console.log(string);
var isStudent = false; //booleans:for true/false values.
console.log(isStudent);
//Any:for variables that can hold any type of data.
var randomValue = "https://github.com/SanoberShahid/Sanober2ndassignment.git";
console.log(randomValue);
//implicit
var variableB = "some string";
console.log(variableB);
var variable = "sanober";
console.log(variable);
variable = "2"; //variable name can contain digit
console.log(variable);
variable = "2sanober";
//json objects:
var details = {
    "name": "sanober",
    "age": 20
};
console.log("my name is:" + details.name);
console.log("my age is:" + details.age);
var currentBalance = 100; //this value can change
var accountNumber = "23456678910"; //this value remain constant
console.log(currentBalance);
console.log(accountNumber);
//concatenation
console.log('hellow world ' + 'i am sanober');
console.log('2' + 2); //concatenation
console.log(2 + 2); //not concatenation this is arithmetical operation.
var sum1 = 10;
var sum2 = 30;
var sum = sum1 + sum2;
console.log('the sum of ' + sum1 + ' and ' + sum2 + ' will be ' + sum);
//template literals (backticks `) 
console.log("the sum of ".concat(sum1, " and ").concat(sum2, " wil be ").concat(sum)); //${sum}-->place holders
//example template literals (backticks ` )
var personName = 'sanober';
console.log("Ms ".concat(personName, " \nis a school teachers"));
//Variable type of annotations
var a = 'shahid';
var fatherName = 'muhammad shahid';
var age = 45;
var isThisRight = true;
//variables naming convention:
var myCompanyName = 'sheikhs'; //camel case
var my_company_name = 'sheikhs'; //snake case
var MyCompanyName = 'sheikhs'; //pascal case
//updation var  //globale scope
var myfruits = 'orange'; //declaration
myfruits = 'peach'; //update
myfruits = 'plums'; //last one update.
console.log(myfruits); // -----block k ander bh kam krey ga bahir bh.
var myfruits = 'guava'; //again var declaration.
//updation let  //block scope
var mysalery = 2000; //declare
mysalery = 5000; //update
console.log(mysalery); //  ----block k ander kam kerta h bahir nhi.
//let mysalery = 5000;//let is not redeclaration.
//updation const  //block scope
var computer = 'files'; //declare
console.log(computer); //  ---block k ander kam kerta h bahir nhi.
//computer = 'files';//const not update
//const computer = 'files';//const not redeclaration.
var bootPrice = '100';
console.log("boot price : ".concat(bootPrice));
console.log(100);
var shoesPrice = '100';
console.log("shoes price : ".concat(shoesPrice));
//npx nodemon index.js  (example)
var bootprice = '100';
console.log("boot price : ".concat(bootprice));
console.log(100);
var shoesprice = '100'; //example
console.log("shoes price : ".concat(shoesprice));
console.log(100);
//operstoras:
//addition(+)
var Sum1 = 4;
sum2 = 5;
sum = Sum1 + sum2;
console.log(sum);
var Sum = 5 + 6; //sum is 9
console.log(sum);
//substraction(-)
var Num1 = 50;
var Num2 = 30;
number = Num1 - Num2;
console.log(number);
//division(/)
var div1 = 5;
var div2 = 3;
number = div1 / div2;
console.log(number);
//multiplication(*)
var parcel1 = 5;
var parcel2 = 7;
var Parcel = parcel1 * parcel2;
console.log(Parcel);
//mudulus(%)
var remainder = 5 % 3;
console.log(remainder);
//increment(++)
var initial = 10;
initial++;
console.log(initial++);
//decrement(--)
var Initial = 20;
Initial--;
console.log(Initial--);
// = (simple asignment) let a = 6;now a is 6 .
//+=(addition asignment)
var x1 = 5;
x1 += 3;
console.log(x1);
//-=(sabstraction asignment)
var x2 = 7;
x2 -= 5;
console.log(x2);
//*=(multiplication asignment)
var x3 = 9;
x3 *= 9;
console.log(x3);
//  (/= division asignment)
var x4 = 2;
x4 /= 10;
console.log(x4);
//strongly types syntax
var A = 'pakistan';
var B = 10;
var C = true;
console.log(A);
console.log(B);
console.log(C);
//type inference
var e = 'UK';
var f = 10.9;
var g = false;
console.log(e);
console.log(f);
console.log(g);
//combining operators
var Result = 3 + 4 * 5;
console.log(Result); //answer is 23
var result = 3 + 4 * 5;
result++;
console.log(result); //now answer is 24.
//BMI CALCULATOR
var weightInKg = 70; //70kg
var heightInMeters = 1.75; //1.75m
var bmi = weightInKg / (heightInMeters * heightInMeters);
console.log("Your bmi is : ".concat(bmi));
//COMPARISON OPERATORS
var a1 = 5;
var b1 = 2;
var isEqual = (a1 == b1); //false
var isNotEqual = (a1 != b1); //true
var isGreaterThan = (a1 > b1); //true
var isLessThan = (a1 < b1); //false
console.log(isEqual);
console.log(isNotEqual);
console.log(isGreaterThan);
console.log(isLessThan);
//logical opertors
var a2 = 6;
var b2 = 4;
var logicalAnd = (a2 > 0) && (b2 > 0); //true
var logicalOr = (a2 < 0) || (b2 > 0); //true
var logicalNot = !(a1 > 0); //false
console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNot);
//logic statements
//if AND if -else(statement)
var myteacher = true;
if (myteacher) {
    console.log('where is my class.');
}
else {
    console.log('where is children.');
}
var Myteacher = false;
if (Myteacher) {
    console.log('where is my class.');
}
else {
    console.log('where is children.');
}
//else if statements
var weather = 'rainy';
if (weather === 'rainning') {
    console.log('weather is cloudy');
}
else if (weather === 'rainy') {
    console.log('where is  my ubrealla.');
}
else {
    console.log('where is my jacket');
}
//one more example if (else if) else
var guess = 7;
var target = 5;
if (guess < target) {
    console.log('your guess is too low.');
}
else if (guess > target) {
    console.log('your guess is too high.');
}
else {
    console.log('your guessed correctly!');
}
//condition ternary operator
var isHungry = true;
var snack = isHungry ? 'apple' : 'water';
console.log("You should have some ".concat(snack, "."));
var IsHungry = false;
var Snack = IsHungry ? 'apple' : 'water';
console.log("You should have some ".concat(Snack, "."));
//switch case statement
var thedayoff = 'tuesday';
switch (thedayoff) {
    case 'sunday':
        console.log('7 pm (it) class students.');
        break;
    case 'monday':
        console.log('3 pm (it) class students.');
        break;
    case 'tuesday':
        console.log('9pm (it) class of students.');
        break;
    default:
        console.log('default all case.');
}
