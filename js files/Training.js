$(document).ready(function(){
	$.getJSON("products.json", function(data){
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#Stock_Details").append(
				"<tr>" +
				"<td>" + value.NAME + "<br>" + "</td>" +
				"<td>" + value.STOCK + "<br>" + "</td>" +
				"<td>" + value.Quantity + "<br>" + "</td>" +
				"<td>" + value.Size + "<br><br>" + "</td>" + 
				"<td>" + value.Colour + "<br>" + "</td>" +"</tr>"
				);
			});
		});
	});
});