 //function playVideo(){
	let player;

	let btnPlay = document.querySelectorAll('.module__video-item .play'),
	overlay = document.querySelector('.overlay'),
	blockVideo = document.querySelector('.overlay .video'),
	btnClose = document.querySelectorAll('.overlay .close');
	framePlay = document.querySelector('.video iframe');

	blockVideo.style.top = "30%";
	blockVideo.style.left = "30%";
	blockVideo.classList.add('animated');
	let tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	
	let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	for (let i = 0; i < btnPlay.length; i++) {
		
		btnPlay[i].addEventListener('click', (ev) => {
			if(btnPlay[i].children[0].classList.value != 'play__circle closed'){
				let path = btnPlay[i].getAttribute('data-url');
				//framePlay.setAttribute('src', path);
			//videoPlay(path);
			//onYouTubeIframeAPIReady(path);
			let id = path.match(/[^\/]+$/)[0];
			
			
			onYouTubeIframeAPIReady(id);
			overlay.style.display = 'block';
			blockVideo.classList.add('fadeInDown');
			ev.preventDefault();


			

			function onYouTubeIframeAPIReady(id) {
				console.log(id);
				console.log('iframe ready');
				player = new YT.Player('vid', {
					videoId: id,
							events : {
								'onReady': onPlayerReady,
								'onStateChange': onPlayerStateChange
							}
						});
						
			}
		
		function onPlayerReady(e) {
			
					console.log("ready");
					//e.target.playVideo();
			}
		
			function onPlayerStateChange(e) {
				// if (event.data == YT.PlayerState.PLAYING && !done) {
				// 	setTimeout(stopVideo, 6000);
				// 	done = true;
				// }
				console.log('state changed');
			}
		






			}
			
	
		});
	
	}
	
	for (let i = 0; i < btnClose.length; i++) {
		btnClose[i].addEventListener('click', () => {
			overlay.style.display = 'none';
			//videoPlay('');
		});
		
	}



	// function videoPlay(path) {

	// 	framePlay.setAttribute('src', path);
	// }

	



