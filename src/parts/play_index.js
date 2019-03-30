
function play(){
	
	let btnPlay = document.querySelector('.showup__video .play'),
	overlay = document.querySelector('.overlay'),
	blockVideo = document.querySelector('.video');
	framePlay = document.querySelector('#iframe');

	

	btnPlay.addEventListener('click', (ev)=>{
	overlay.style.display = 'block';
	let path = btnPlay.getAttribute('data-url');
	//videoPlayReady(path);

	console.log(path);
	ev.preventDefault();

});
 

function videoPlayReady(path){

	framePlay.setAttribute('src', path);
	framePlay.style.top = '250px';
let player = new YouTubePlayer.Player('player', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});

}

 

}

module.exports = play;
