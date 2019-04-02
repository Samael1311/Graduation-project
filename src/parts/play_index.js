function play() {

	let btnPlay = document.querySelector('.showup__video .play'),
		overlay = document.querySelector('.overlay'),
		blockVideo = document.querySelector('.overlay .video'),
		btnClose = document.querySelector('.overlay .close');
	framePlay = document.querySelector('.video iframe');




	blockVideo.style.top = "30%";
	blockVideo.style.left = "30%";
	blockVideo.classList.add('animated');

	btnPlay.addEventListener('click', (ev) => {

		let path = btnPlay.getAttribute('data-url');
		videoPlayReady(path);
		overlay.style.display = 'block';
		blockVideo.classList.add('fadeInDown');



		ev.preventDefault();

	});


	btnClose.addEventListener('click', () => {
		overlay.style.display = 'none';
		videoPlayReady('');
	});


	function videoPlayReady(path) {

		framePlay.setAttribute('src', path);
		framePlay.style.top = '250px';


	}



}

module.exports = play;