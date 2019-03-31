function showupSlider() {

	let showupSliders = document.querySelectorAll('.showup__content-slider a'),
		boxContent = document.querySelector('.showup__content-slider'),
		btnRight = document.querySelector('.right'),
		btnLeft = document.querySelector('.left');


	boxContent.style.display = '-webkit-inline-box';
	boxContent.style.overflow = 'hidden';
	let slideIndex = 1;

	btnRight.addEventListener('click', () => {
		let active = document.querySelector('.showup__content-slider a.card-active');
		boxContent.appendChild(active);
		plusSlides(1);
	});
	btnLeft.addEventListener('click', () => {
		let active = boxContent.children[showupSliders.length-1];
		boxContent.insertBefore(active, boxContent.children[0]);
		plusSlides(-1);
	});
	
	function moveSlides(n){

		if(n > showupSliders.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = showupSliders.length;
		}
		for (let i = 0; i < showupSliders.length; i++) {
			showupSliders[i].classList.remove('card-active');
			showupSliders[i].children[1].style.opacity = '0.4';
			showupSliders[i].children[0].children[1].style.opacity = '0';
			
		}
		showupSliders[slideIndex-1].classList.add('card-active');
		showupSliders[slideIndex-1].children[1].style.opacity = '1';
		showupSliders[slideIndex-1].children[0].children[1].style.opacity = '1';
	}


	function plusSlides(n){

		moveSlides(slideIndex += n);
	
	}
	moveSlides(slideIndex);
}

module.exports = showupSlider;