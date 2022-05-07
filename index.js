var result = $("#textFild");

function insertNumbers(number) {
	var existingNumber = $("#textFild").val();
	$("#textFild").val(existingNumber + number);
}

function cleanResult() {
	$("#textFild").val("");
}

function finalResult() {
	var calculatedResult = eval($("#textFild").val());
	$("#textFild").val(calculatedResult);
}


function deleteNumber(){
	var present = result.val()
    if(present!=''){
		result.val(present.slice(0, -1))
	}
    
}





// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number);
// var result = number.slice(0, -1);
// console.log(result);

