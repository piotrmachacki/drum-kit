window.addEventListener('keydown', function(e) {
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(!key) return;
	if(sound) {
		sound.currentTime = 0;
		sound.play();
	}
	key.classList.add('play');
});

window.addEventListener('keyup', function(e) {
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(key) key.classList.remove('play');
});