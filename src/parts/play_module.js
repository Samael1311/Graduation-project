 //function playVideo(){
	window.addEventListener('DOMContentLoaded', ()=>{

 let btnPlay = document.querySelectorAll('.module__video-item .play'),
 	overlay = document.querySelector('.overlay'),
 	blockVideo = document.querySelector('.overlay .video'),
	 btnClose = document.querySelector('.overlay .close'),
	 frames = document.querySelectorAll('.frame');
 //framePlay = document.querySelector('.video iframe');

 blockVideo.style.top = "30%";
 blockVideo.style.left = "30%";
 blockVideo.classList.add('animated');
 let id;
//  let tag = document.createElement('script');
//  tag.src = "https://www.youtube.com/iframe_api";
//  let firstScriptTag = document.getElementsByTagName('script')[0];
//  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let players = [];


setTimeout(()=>{

	for (let i=0; i<frames.length; i++) {
		let path = btnPlay[i].getAttribute('data-url');
			 id = path.match(/[^\/]+$/)[0];
		
		players[i] = new YT.Player('vid'+i, { 
			height: '360',
			width: '640',
		 videoId: id,
		 playerVars: { 'showinfo': 0,'enablejsapi':1,'origin':'http://localhost:8000'},
		 allowfullscreen: 'true',
		 events: {
			 //'onReady': onPlayerReady,
			 'onStateChange': onPlayerStateChange
		 }
	 });
	 document.querySelector('iframe#vid'+i).style.display = 'none';

}


}, 1000);


 for (let i = 0; i < btnPlay.length; i++) {

 	btnPlay[i].addEventListener('click', (ev) => {

 		if (btnPlay[i].children[0].classList.value != 'play__circle closed') {

			players[i].playVideo();
 			overlay.style.display = 'block';
 			blockVideo.classList.add('fadeInDown');
			ev.preventDefault();
			document.querySelector('iframe#vid'+i).style.display = 'block';
					
		}

			players[i].addEventListener("onStateChange", function(state){ 
				if (state.data === 0) {
				//	console.log('finished');
					if (btnPlay[i + 1].children[0].classList.value == 'play__circle closed') {
						btnPlay[i + 1].children[0].classList.remove('closed');
						btnPlay[i + 1].querySelector('svg').remove();
					//	btnPlay[i + 1].insertBefore(btnPlay[i].querySelector('svg').cloneNode(true), document.querySelector('.play__circle')[i + 1].children[0]);
						document.querySelectorAll('div .module__video-item')[i+1].style.opacity = 1;
						console.log(btnPlay[i].querySelector('svg'));
					}
				}
			}); 
	 });

	

 }

 btnClose.addEventListener('click', () => {
	
	for (let i = 0; i < players.length; i++) {
		if(document.querySelector('iframe#vid'+i).style.display == 'block'){
			overlay.style.display = 'none';
			
			players[i].stopVideo();
			document.querySelector('iframe#vid'+i).style.display = 'none';
		}
		
		
	}
	
});


// function onPlayerReady(e) {
// 	console.log(e);

// 	e.target.playVideo();
		

// }

function stop() {
	
		players.stopVideo();
	
}

function onPlayerStateChange(event) {
	// if (event.data == YT.PlayerState.PLAYING && !done) {
	// 	setTimeout(stopVideo, 6000);
	// 	done = true;
	// }

	if (event.data === 0) {
		console.log(event.data);
		// if (btnPlay[i + 1].children[0].classList.value == 'play__circle closed') {
		// 	btnPlay[i + 1].children[0].classList.remove('closed');
		// }
	}
	console.log('state changed');

}

// player.addEventListener("onStateChange", function(state){ 
// 	if(state === YT.PlayerState.ENDED){ 
// 			// the video is end, do something here. 
// 			player.loadVideoById(videoIdOfNextVideo); 
// 	} 
// }); 




//  for (let i = 0; i < btnClose.length; i++) {
//  	btnClose[i].addEventListener('click', () => {
//  		overlay.style.display = 'none';
//  		stop();
//  	});

//  }



});