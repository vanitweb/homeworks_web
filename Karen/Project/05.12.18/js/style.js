let i = document.getElementById('forst');
i.onblur = function() {
	let tar = document.getElementById('forst').value;
	document.getElementById('forst').style.cssText = tar;
}