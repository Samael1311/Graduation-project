
'use strict';

const page = document.querySelector('.page'),
	slides = page.children,
	btnChaneSlide = document.querySelectorAll('.sidecontrol a ');
let	slideIndex = 1;

	for (let i = 0; i < btnChaneSlide.length; i++) {
		btnChaneSlide[i].addEventListener('click', ()=>{
			if(i>1 && i%2 == 0){
				showSlides(slides.length+1);
			} else if(i%2 != 0){
				plusSlides(1);
			}
			
		});
		
	}

function showSlides(n){
	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';	
	}
		slides[slideIndex-1].style.display = 'block';
}

function plusSlides(n){
	showSlides(slideIndex += n);

}

function currentSlide(n){
	showSlides(slideIndex = n);
}


showSlides(slideIndex);
