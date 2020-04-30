let user = prompt("What is your name?");
let color = prompt("What is your favorite color?");

function lover(color){


    if(color === "blue"){

    alert("Thats my favorite color");
    
    }
    

    else if (color === "gold"){

    alert("You have rich tendencies, like me.");
    
    }

    else if(color === "green"){
       alert("I see why you chose that color, you like capital. #Mr.Krabs Tendencies")
    }

    else{

    alert("thats a trash color and it is not compatible!");
    }
} 

lover(color)

document.getElementById("love").innerHTML=color;



