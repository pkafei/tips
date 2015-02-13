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



