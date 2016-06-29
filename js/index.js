var backrounds = [
	"url('../assets/wat.gif')", 
	"url('../assets/banana.gif')", 
	"url('../assets/veg.gif')", 
	"url('../assets/keyboardcat.gif')",
	"url('../assets/cookie.gif')",
	"url('../assets/nyan.gif')",
	"url('../assets/lel.gif')",
	"url('../assets/mickey.gif')",
	"url('../assets/type.gif')",
	"url('../assets/dtrump.gif')",
	"url('../assets/dravenyay.gif')",
	"url('../assets/freddy.gif')",
	"url('../assets/MURO.gif')"
	];
 
var count = 0;

var cycle = function(array) {
	// console.log(colors[count]);
	if (count == array.length-1) {
		count = 0;
	} else {
		count++;
	};

};

var display = function() {
	document.body.style.backgroundImage = backrounds[count];
	cycle(backrounds);
};
