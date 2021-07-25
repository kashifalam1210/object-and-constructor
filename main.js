  
//object-and-constructor
//Q.No1:
//Suppose You have an array of object 
//var itemsArray = [
//{name:”juice”,price:”50”, quantity:”3”},
//{name:”cookie”,price:”30”, quantity:”9”},
//{name:”shirt”,price:”880”, quantity:”1”},
//{name:”pen”,price:”100”, quantity:”2”}];
//Calculate total price of each item and all items;
//Code
var itemsArray = [
{name:'juice',price:'50', quantity:'3'},
{name:'cookie',price:'30', quantity:'9'},
{name:'shirt',price:'880', quantity:'1'},
{name:'pen',price:'100', quantity:'2'}];

var a= itemsArray[0].price *itemsArray[0].quantity

var b= itemsArray[1].price *itemsArray[1].quantity

var c= itemsArray[2].price *itemsArray[2].quantity

var d= itemsArray[3].price *itemsArray[3].quantity

var sum = a + b + c + d; 
console.log(sum)

//Qno2:
//Create an object with properties name, email, password, age, 
//gender, city, country.
//Check if age and country properties exist in object or not.
//Also check firstName and lastName properties in object.
//code
var identification = {
name= 'kashif',
email= 'hhhh@123.com',
password= '12345',
age= '23',
gender= 'male',
city= 'karachi',
country= 'pakistan',
};

let fName = identification.hasOwnProperty("firstName");
 console.log(fName);
let lName = identification.hasOwnProperty("lastName");
console.log(lName);
let age = identification.hasOwnProperty("age");
console.log(age);
let country = identification.hasOwnProperty("country");
console.log(country);



//Qno3: 
//Create a constructor function with some properties. Now 
//create multiple records using the constructor.


function Data (name, age){
  this.name= name; 
  this.age= age; 
}

const person1 =  new Data('kashif','25')

const person2 =  new Data('alam','22')


console.log(person1, person2);

//Q.No4:
//Suppose you want to check population of your area, their
//educations and professions.
//Create a constructor function which holds following 
//properties:
//Name, gender, address, education, profession, 
//Enter all records one by one. 
//Hint: 
// use select box for education and profession, 
// use radio box for gender
//Bonus : use can use localStorage to save records.
//code
//javascript

function Area(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
 }

const Landhi = new Area(
  "kashif Alam",
  "Male",
  "landhi 22",
 "BE Electrical",
  "Electrical design"
 );
//console.log(Landhi);

//save vales of education
function educationData() {
  var select = document.getElementById("education");
  if (localStorage === "") {
    select[localStorage.getItem("save")].selected = true;
  } else if (select.value === "cs") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "BE Electrical") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "BE Mechnical") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "BE industrial") {
    localStorage.setItem("save", select.value);
  }
}

//save values for profession
function professionPeoples() {
  var profession = document.getElementById("profession");
  if (localStorage === "") {
    profession[localStorage.getItem("save")];
  } else if (profession.value === "Solar Designer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "power plant") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Designer ") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "mechnical pro") {
    localStorage.setItem("profession", profession.value);
  }
}

//save values of radio buttons

var radio = document.getElementsByName("gender");
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    localStorage.getItem("gender");
  }
}


