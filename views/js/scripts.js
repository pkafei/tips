// Script to make the data persistent

// Check for storage
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}

// Save cost of meal
function saveMealCost() {
	var message = document.getElementById("save")
	message.addEventListener("click",
		function(){
			var total = document.getElementById("total").value;
			localStorage.setItem("amount", total);
		});
}
saveMealCost();

// Retrieve cost of meal
function retreiveWeeklyMealCost() {
	var message = document.getElementById("save")
	message.addEventListener("click",
		function(){
			var weekly_total = document.getElementById("weekly_total").value;
			var get_weekly_totallocalStorage.getItem("amount", weekly total);
}
retreiveWeeklyMealCost();


/* Sources

http://stackoverflow.com/questions/12661293/save-and-load-date-localstorage

// Get Item
 var x = document.getElementById("myForm").elements.item(0).value;

*/
