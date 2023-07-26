var bgName=document.getElementById("input-colorchange");
console.log(colourName);
function IncolorChange() {
    var colour=bgName.value;
    console.log(colour);
    bgName.style.backgroundColor=colour;
}

var colourName=document.getElementById("textcolorchange");
console.log(colourName);
function colorChange() {
    var color=colourName.value;
    console.log(color);
    colourName.style.color=color;
}



var para=document.getElementsByClassName("para");
console.log(para);
var button=document.getElementById("btn");
console.log(para);
function bodycolor(){


var a=["red","green","blue","aqua","yellow","brown","purple","white"];

var number=(Math.floor(Math.random()*a.length));
console.log(number);
para[0].style.backgroundColor=a[number];
}


var arr=["red","green","blue","aqua","yellow","brown","purple","limegreen"];
var bgbody=(Math.floor(Math.random()*arr.length));
console.log(bgbody);
document.body.style.backgroundColor=arr[bgbody];
