// try{
//     console.log("Execution started");
//     let arr = [1,2,3];
//     Saaef;
//     console.log("Execution ended.")
// }

// catch(err){
//     console.log("error is there " +err);
// }
// finally{
//     console.log("this is finally");
// }

// console.log("out of try catch");





// let json = '{"name":"dinesh","age":23}';
// try{
//     let user = JSON.parse(json);
//     if(!user.name){
//         throw new SyntaxError("Incomplete data: name missing");
//     }
//     console.log(user.name);
// }
// catch(err){
//     console.log("JSON error " + err);
// }

// finally{
//     console.log("this is finally");
// }
// console.log("out of try catch");


//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Try to create a copy
const x = person;

// This will change age in person:
x.age = 10;

//delete person.age;

console.log(person);

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car2);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  //using function
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },

  //using ->arrow  fuction
  fullName1:()=>{
    return this.firstName + " " + this.lastName;
  }

};

let name = person1.fullName();
console.log(name);

// console.log("arrow function : "+person1.fullName1);

document.getElementById("demo").innerHTML=name;

const person2 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Properties
document.getElementById("demo1").innerHTML = person2.name + ", " + person2.age + ", " + person2.city;

//using loop

let text = "";
for(let i in person2){
    text+=person2[i]+" ";
}

document.getElementById("demo3").innerHTML = person2.name + ", " + person2.age + ", " + person2.city;


// Create an Array
const myArray = Object.values(person2);

// Display the Array
document.getElementById("demo4").innerHTML = myArray;



// Stringify Object
let myString = JSON.stringify(person2);

// Display String
document.getElementById("demo5").innerHTML = myString;


//Number objects
let x1 = 123;
let y = new Number(123);



// dates

// const d = new Date()
// console.log(d);

// const d1 = new Date("2022-03-25");
// console.log(d1);



const date1 = new Date(2020, 0, 15); 
const date2 = new Date(2025, 6, 18);

if (date1 > date2) {
    [date1, date2] = [date2, date1]; 
  }

  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth();
  let days = date2.getDate() - date1.getDate();

  if (days < 0) {
    months--; 
    const daysInPrevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
    days += daysInPrevMonth;
  }

  if (months < 0) {
    years--; 
    months += 12;
  }




console.log("years "+ years +" months "+months + " days " + days);

function fun(id){
    id.innerHTML="dinesh";
}


const button = document.getElementById("mybtn");
        const display = document.getElementById("print");
        let count = 0;

        button.addEventListener("click", counter);

        function counter() {
            count++;
            display.innerText = count;
        }

        
window.addEventListener("keydown", function(e){
    console.log(e);
});

console.log(navigator.cookieEnabled);




document.cookie = "username=Dinesh; expires=Thu, 18 Jun 2025 12:30:00 UTC; path=/";
console.log(document.cookie);



const inp = document.getElementById("in");
const head = document.getElementById("head");
inp.addEventListener("input", function(e){
    head.innerText="hello "+e.target.value +" how are you";
});




