// string = "hellow world"//string:for textual data.


let message =("hellow");
console.log(message);//syntax

//explicit
let variableb = 'another string';
console.log(variableb);
let number = 1;//number:for numerical values(integers and floating -point numbers)

console.log(number);
var  string = "any string";
console.log(string);

let isStudent:boolean= false;//booleans:for true/false values.
console.log(isStudent);

//Any:for variables that can hold any type of data.

let randomValue: any = "https://github.com/SanoberShahid/Sanober2ndassignment.git";
console.log(randomValue);

//implicit
let variableB = "some string";
console.log(variableB);
let variable = "sanober";
console.log(variable);
variable = "2";//variable name can contain digit
console.log(variable);

variable = "2sanober";

//json objects:
let details = {
    "name" : "sanober",
    "age" : 20
}
console.log("my name is:" + details.name);
console.log("my age is:" + details.age);

let currentBalance = 100;//this value can change
const accountNumber = "23456678910";//this value remain constant
console.log(currentBalance);
console.log(accountNumber);

//concatenation
console.log('hellow world ' + 'i am sanober');
console.log('2'+2);//concatenation
console.log(2+2);//not concatenation this is arithmetical operation.

let sum1 = 10;
let sum2 = 30;
let sum = sum1 + sum2;
console.log('the sum of '+ sum1 + ' and '+ sum2 + ' will be ' + sum);

//template literals (backticks `) 
console.log(`the sum of ${sum1} and ${sum2} wil be ${sum}`);//${sum}-->place holders
//example template literals (backticks ` )
let personName = 'sanober';
console.log(`Ms ${personName} 
is a school teachers`);

//Variable type of annotations
let a : string = 'shahid';
const fatherName : string = 'muhammad shahid';
var age : number = 45;
let isThisRight : boolean = true;

//variables naming convention:
let myCompanyName = 'sheikhs';//camel case
let my_company_name = 'sheikhs';//snake case
let  MyCompanyName = 'sheikhs';//pascal case

//updation var  //globale scope
var myfruits = 'orange';//declaration
myfruits = 'peach';//update
myfruits = 'plums';//last one update.
console.log(myfruits);             // -----block k ander bh kam krey ga bahir bh.
var myfruits = 'guava';//again var declaration.

//updation let  //block scope
let mysalery = 2000;  //declare
mysalery = 5000;  //update
console.log(mysalery);             //  ----block k ander kam kerta h bahir nhi.
//let mysalery = 5000;//let is not redeclaration.

//updation const  //block scope
const computer = 'files';//declare
console.log(computer);              //  ---block k ander kam kerta h bahir nhi.
//computer = 'files';//const not update
//const computer = 'files';//const not redeclaration.

let bootPrice = '100';
console.log(`boot price : ${bootPrice}`);
console.log(100);
let shoesPrice = '100';
console.log(`shoes price : ${shoesPrice}`);

//npx nodemon index.js  (example)
var bootprice = '100';
console.log("boot price : ".concat(bootprice));
console.log(100);

var shoesprice = '100';            //example
console.log("shoes price : ".concat(shoesprice));
console.log(100);

//operstoras:
//addition(+)
let Sum1 = 4;
sum2 = 5;
sum = Sum1 + sum2;
console.log(sum);
let Sum = 5+6;//sum is 9
console.log(sum);

//substraction(-)
let Num1 = 50;
let Num2 = 30;
number = Num1 - Num2;
console.log(number);

//division(/)
let div1 = 5;
let div2 = 3;
number = div1 / div2;
console.log(number);

//multiplication(*)
let parcel1 = 5;
let parcel2 = 7;
let Parcel = parcel1 * parcel2;
console.log(Parcel);

//mudulus(%)
let remainder = 5 % 3;
console.log(remainder);

//increment(++)
let initial=10;initial++;
console.log(initial++);

//decrement(--)
let Initial = 20;Initial--;
console.log(Initial--);
// = (simple asignment) let a = 6;now a is 6 .

//+=(addition asignment)
 let x1 = 5;  x1+=3;
 console.log(x1);

 //-=(sabstraction asignment)
 let x2 = 7; x2-=5;
 console.log(x2);

 //*=(multiplication asignment)
 let x3 = 9; x3*=9;
 console.log(x3);

 //  (/= division asignment)
 let x4 = 2; x4 /=10;
 console.log(x4);

 //strongly types syntax
 let    A : string = 'pakistan';
 let    B : number = 10;
 let    C : boolean = true;
 console.log(A);
 console.log(B);
 console.log(C);

 //type inference
 let e = 'UK';
 let f = 10.9;
 let g = false;
 console.log(e);
 console.log(f);
 console.log(g);

 //combining operators
 let Result = 3 + 4 * 5;
 console.log(Result);//answer is 23

 let result = 3 + 4 * 5;
 result++;
 console.log(result);//now answer is 24.

 //BMI CALCULATOR
 let weightInKg = 70;//70kg
 let heightInMeters = 1.75;//1.75m
 let bmi = weightInKg / (heightInMeters * heightInMeters);
 console.log(`Your bmi is : ${bmi}`);

 //COMPARISON OPERATORS
 let a1 = 5;
 let b1 = 2;
 let isEqual = (a1 == b1);//false
 let isNotEqual = (a1 != b1);//true
 let isGreaterThan = (a1 > b1);//true
 let isLessThan = (a1 < b1);//false
console.log(isEqual);
console.log(isNotEqual);
console.log(isGreaterThan);
console.log(isLessThan);

//logical opertors
let a2 = 6;
let b2 = 4;
let logicalAnd = (a2 > 0) && (b2 > 0);//true
let logicalOr = (a2 < 0) || (b2 > 0);//true
let logicalNot = !(a1 >0); //false
console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNot);

//logic statements
//if AND if -else(statement)
let myteacher = true;
if (myteacher){
    console.log('where is my class.');
}else{
    console.log('where is children.');
}

let Myteacher = false;
if (Myteacher){
    console.log('where is my class.');
}else{
    console.log('where is children.');
}

//else if statements
let weather = 'rainy';
if (weather === 'rainning'){
    console.log('weather is cloudy');
}else if(weather === 'rainy'){
    console.log('where is  my ubrealla.');
}else{
    console.log('where is my jacket');
}

//one more example if (else if) else
let guess: number = 7;
let target: number = 5;
if (guess < target){
    console.log('your guess is too low.');
}else if (guess > target){
    console.log('your guess is too high.');
}else {
    console.log('your guessed correctly!');
}

//condition ternary operator
let isHungry = true;
let snack = isHungry ? 'apple': 'water';
console.log(`You should have some ${snack}.`);

let IsHungry = false;
let Snack = IsHungry ? 'apple': 'water';
console.log(`You should have some ${Snack}.`);

//switch case statement
let thedayoff = 'tuesday';
switch(thedayoff){
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
        console.log('default all case.') ;   
}
