
/* Colorizes the sendername
 *
 * @param  sender {DOM Element} - the message
 *
 * @return void
 */
var colorizeSender = function(message) {
	// colors for the colornumber property
	let senderColors = {
		0: "#1abc9c",
		1: "#2ecc71",
		2: "#3498db",
		3: "#9b59b6",
		4: "#e74c3c",
		5: "#e67e22",
		6: "#f1c40f",
		7: "#953163"
	}
	// get the color number
	let sender = $(message).find('.sender');
	let colorNumber = parseInt(sender.attr('colornumber'));
	// sometimes negative colornumbers may appear
	if(colorNumber < 0){
		colorNumber *= -1;
	}
	// return the color HEX
	sender.css({
		 color: senderColors[colorNumber % 8]
	});
}