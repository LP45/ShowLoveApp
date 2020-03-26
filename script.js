let user = prompt("What is your name?");
let color = prompt("What is your favorite color?");

function lover(color)
{

    if(color == "blue")
{
    alert("Thats my favorite color");
}
if (color == "gold") 
{
    alert("You have rich tendencies, like me.");
    // break;
}
 
else
{
    alert("thats a trash ass color and it aint compatible!");
}



document.getElementById("love").innerHTML=color;
}

lover(color)
