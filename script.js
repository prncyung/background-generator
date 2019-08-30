//This is for Todo List--ZTM DOM EVENTS
/*var insertButton = document.getElementById('enter');
var input = document.getElementById('user-input');
var ul = document.querySelector(".me");

//get the length
function inputLength() {
	return input.value.length;
}*/


///Create list
/*function createListElement(){
	var li = document.createElement("li");
	var delButton = document.createElement("button");

	li.appendChild(document.createTextNode(input.value));
	delButton.appendChild(document.createTextNode("Delete"));

	ul.appendChild(li) + " " + li.appendChild(delButton);
	input.value= "";

	//delete
	delButton.addEventListener("click", function(){
		li.remove();
	})

}*/

//toggles the list items and add the done class in css
/*ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function addListAfterClick(){
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
	createListElement();
}
}
//listen to the events
insertButton.addEventListener("click", addListAfterClick);

//listen to the enter key on d keyboard
input.addEventListener("keypress", addListAfterKeyPress);

//End of the Todo List--ZTM DOM EVENTS

//Background Generator

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var stage = document.getElementById("stage");

//
function setGradients(){
	stage.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	//get text contents
	css.textContent = stage.style.background + ";";
}

color1.addEventListener("input", setGradients)
color2.addEventListener("input", setGradients)

//destructuring

const array = [1,2,10,16];
const mapArray = array.map((num) =>{
	return num * 2;
});
console.log('map', mapArray);
//objects
let num1 = 1;
let num2 = 2;

let obj1 = {value:10};
let obj2 = obj1;

let obj3 = {value:20};
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj2.value + obj3.value);

//instantiation

class Students {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greetings(){
		console.log(`Hi I am ${this.name}, i'm ${this.age} old`);
	}
}
//extending a class
class Wizard extends Player{
	constructor(name, age){
		super(name,age)
	}
}
//working with Object.values
let obi = {
	username0: "santa",
	username1: "john",
	username2: "peter"
}
Object.values(obi).forEach(value =>{
	console.log(value);
})

Object.entries(obi).map(value=>{
	return value[1] + value[0].replace('username', '');
})

let oby = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

Object.entries(oby).map(value=>{
	return "my "+ value[0] + " is " + value[1] + " the " + value[2];
})
//loops
*/
const basket = ['apples', 'oranges', 'mango', 'pineapple'];
const detailBasket = {
	apples: 5,
	grapes: 10,
	mango: 1000
}
const add = {
	me: "benson"
};

for (item of add ){
	add.push("age": 23);
	console.log(add);
}


/*for( let i = 0; i < basket.length; i++){
console.log(basket[i]);
}*/

//for of loop
/*
for (item of basket) {
	console.log(item);
}

//for in
for (item in detailBasket) {
	console.log(item);
}*/