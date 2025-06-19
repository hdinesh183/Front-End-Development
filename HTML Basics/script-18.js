// form validation

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}


document.querySelector("h1").classList.add("huge");

document.querySelector("#item a").getAttribute("href");

document.querySelector("#item a").setAttribute("href","https://www.facebook.com/");


function add(num1){
  return num1+num1;
}

function sub(num1, num2){
  return num1-num2;
}

function mul(num1){
  return num1*num1;
}

function div(num1, num2){
  return num1/num2;
}

function cal(value,op){
  return op(value);
}


// create a function named pipeline() that takes value and array of functions and pipes the value throw them
var array = [add, mul];


function pipeline(array, value){
  for(let op of array){
    value = op(value);
  }
  console.log(value);
}




var one = {
  name : "puru",
  age : "22",
  stream : "CSE"
};



function Student(name, age, stream){
  this.name = name;
  this.age = age;
  this.stream = stream;
} 

var student1 = new Student("dinesh", 20, "CSE");

var student2 = new Student("harsha", 20, "CSE");