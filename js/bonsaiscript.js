

function addTask() {
	var listItem = prompt("What would like you do?");
	// //console.log(listItem);
	// finds my pre-existing list in html to add items to
	var list = document.querySelector("#toDos");
	// creates a new checkbox element and a variable for it
	var checkbox = document.createElement("INPUT");
	checkbox.setAttribute("type", "checkbox");
	//creates a new list item and a variable for it
	var task = document.createElement("LI");
	//turns the list item text into a textnode
	var textnode = document.createTextNode("	" + listItem);
	//creates a delete button and a variable for it
	var deleteButton = document.createElement("BUTTON");
	//adds a class to the delete button
	deleteButton.className = "btn btn-primary";
	//creates text for the button
	var buttonText = document.createTextNode("Delete Task");
	//adds the button text to the delete button created above
	deleteButton.appendChild(buttonText);
	//adds the check box, item text, and delete button to the list item
	task.appendChild(checkbox);
	task.appendChild(textnode);
	task.appendChild(deleteButton);
	//adds the new list item to the prexisting list I had in html
	document.getElementById("toDos").appendChild(task);
	
}




// function deleteTask(){
// 	var list = document.getElementById("toDos");
// 	list.removeChild(list.childNodes[0]);
// 	console.log(this)

// }
	
	function deleteTask() {
		// $(".button").click(function(){
		//     $(this).parent().remove();
		// });
				// var temp = $(this);
		//.closest('.li').remove();
		// console.log(temp);
		// $(this).parent().remove();
		// var itemToDelete = document.querySelector();
		// task.parentNode.removeChild(itemToDelete);
		// return false;
		// console.log(this);
	}
	
	

// $(document).ready(function() {
//Using jquery to run the "on" function on the document
//which takes click as the event listener (i.e., what action is being done)
//.deletebutton as the class of item that click is being done on
//and the function deleteTask() as what action should then be performed
    $(document).on('click', '.btn-primary', function deleteTask() {
    	//this is the item that's being clicked on (i.e., the given deletebutton)
    	//and it's removing the parent of the item/delete button
        $(this).parent().remove();
    });

    
 

