//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () 
{
//make request to counter end point

//capture the response and save it in a variable

//render the variable in a correct span

counter = counter+1;
var span = document.getElementById('counter');
span.innerHTML = counter.toString();
};
