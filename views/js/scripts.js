//Add meal amount and tip
//Store and add tip and total in weekly section
//Store and add tip in monthly section
//Store and add tip in yearly section
//Have values update dynamically

//var theForm = document.forms["meal_tip"];

function mealCost() {
	//
	 //Declare variable meal and tips
	 var meal_cost = document.getElementsbyName('number');
	 var total_cost = 0;

	 // Add meal and tips
	 for(var i=0, i<meal_cost.length; i++) {
	 		total_cost += meal_cost[i].value;
	 }
	 // Log variable meals and tips
	 document.getElementById('week').value = total_cost;
	 // Return variable meals and tips
	 
}

//Notes
//http://stackoverflow.com/questions/5338716/get-multiple-elements-by-id
