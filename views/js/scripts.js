// Script to make the data persistent


// Check for storage
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}


// Dummy Script to test eventlisteners
function savePop() {
	var message = document.getElementById("save")
	message.addEventListener("click",
		function(){
			var total = document.getElementById("total").value;
			localStorage.setItem("amount", total);
		});

}
savePop();










/*

// Here is an example to get you started on eventlisterners
<a id="testing" href="#" onclick="alert('did stuff inline');">Click me</a>

var element = document.getElementById('testing');
element.onclick = function () { alert('did stuff #1'); };
element.onclick = function () { alert('did stuff #2'); };


<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>


// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);

*/