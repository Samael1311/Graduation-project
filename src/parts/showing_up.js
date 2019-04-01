
function showingUp(){

	let sliders = document.querySelectorAll('.feed__slider .feed__item'),
	boxContent = document.querySelector('.feed__slider'),
	btnPrev = document.querySelector('.feed__slider .slick-prev'),
	btnNext = document.querySelector('.feed__slider .slick-next'); 

	console.log(sliders);

	boxContent.style.display = '-webkit-inline-box';
	boxContent.style.overflow = 'hidden';
	let slideIndex = 1;

	btnNext.addEventListener('click', () => {
		let active = document.querySelector('.feed__item-active');
		//boxContent.appendChild(active);
		boxContent.insertBefore(active, boxContent.children[6]);
		plusSlides(1);
		console.log(boxContent);
	});
	 
	btnPrev.addEventListener('click', () => {
		let active = boxContent.children[sliders.length-1];
		boxContent.insertBefore(active, boxContent.children[0]);
		plusSlides(-1);
	});
	
	function moveSlides(n){

		if(n > sliders.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = sliders.length;
		}
		for (let i = 0; i < sliders.length; i++) {
			sliders[i].classList.remove('feed__item-active');
		//	sliders[i].children[1].style.opacity = '0.4';
		//	sliders[i].children[0].children[1].style.opacity = '0';
			
		}
		sliders[slideIndex-1].classList.add('feed__item-active');
		//sliders[slideIndex-1].children[1].style.opacity = '1';
		//sliders[slideIndex-1].children[0].children[1].style.opacity = '1';
	}


	function plusSlides(n){

		moveSlides(slideIndex += n);
	
	}
	moveSlides(slideIndex);




}

module.exports = showingUp;