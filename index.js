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
