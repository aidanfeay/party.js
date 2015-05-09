var secretCode = function(code, action, time){
	var strokes = "";
	var timer;

	$(document).keyup(function(e) {
	   strokes += e.which;
	   clearTimeout(timer);
	   timer = setTimeout(function() {
	   	keyStrokes();
	   	strokes = "";
	  }, time);
	});

	function keyStrokes() {
    if(strokes == code) {
    	action();           
    }
	};
};

$(document).ready( function(){
	var keyParty = function() {
		console.log("Party.js");
	};
	//secretCode requires a set of key codes, an action, and a reset period
	secretCode("8065828489",keyParty,1000);
});