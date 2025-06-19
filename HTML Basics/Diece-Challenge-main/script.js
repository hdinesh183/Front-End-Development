// var person1 = Math.floor(Math.random()*6+1);
// var person2 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").setAttribute("src","./images/dice6.png");

document.querySelector(".img2").setAttribute("src","./images/dice6.png");

function fun(){
    var person1 = document.querySelector("#rand1").value;

    var person2 = document.querySelector("#rand2").value;

    if(person1>0 && person1<7 && person2>0 && person2<7){

        var image1 = "./images/dice"+person1+".png";
        var image2 = "./images/dice"+person2+".png";

        if(person1 > person2){
            document.querySelector("h1").innerHTML = "player 1 won 🚩";
        }
        else if(person1< person2){
            document.querySelector("h1").innerHTML = "🚩 player 2 won";
        }
        else{
            document.querySelector("h1").innerHTML = "Draw";
        }

        document.querySelector(".img1").setAttribute("src",image1);

        document.querySelector(".img2").setAttribute("src",image2);
    }
    else{
        document.querySelector("h1").innerHTML = "enter valid input";
    }
    document.querySelector("#rand1").value="";
    document.querySelector("#rand2").value="";

}