var div;
var box=document.getElementById("box");

for (let i = 0; i < 10; i++) {
    div=document.createElement("div");
    div.onclick=function()
{
    alert("this is box #"+(i+1));
}   
box.append(div);
}