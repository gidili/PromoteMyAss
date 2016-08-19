$(function() {
	var hidePromoted = function(){
		$('.js-promoted-badge').closest('.tweet').hide();
		$('li.promoted-trend').hide();
		console.log('hiding promoted tweets!');
	}
	
	var initialDelay = 1000;
	var loopDelay = 3000; 
	
	// run once with a delay then run 
	setTimeout(function(){ 
		hidePromoted();
		setInterval(hidePromoted, loopDelay);
	}, initialDelay);
	
	console.log('promote my ass!');
});