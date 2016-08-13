$(function() {
	var hidePromoted = function(){
		$('.js-promoted-badge').closest('.tweet').hide();
		console.log('hiding promoted tweets!');
	}
	
	setInterval(hidePromoted, 3000);
	
	console.log('promote my ass!');
});