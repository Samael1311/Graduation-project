function sliderIndex() {

	const page = document.querySelector('.page'),
		slides = page.children,
		btnChangeSlide = document.querySelectorAll('.sidecontrol a '),
		hanson = document.querySelector('.hanson');

	let slideIndex = 1;
	hanson.style.display = 'none';

	for (let i = 0; i < btnChangeSlide.length; i++) {
		btnChangeSlide[i].addEventListener('click', () => {
			if (i > 1 && i % 2 == 0) {
				showSlides(slides.length + 1);

			} else if (i % 2 != 0) {
				plusSlides(1);
			}

		});

	}

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		if(n==3){
			setTimeout(() => {
				hanson.style.display = 'block';
			}, 3000);
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		slides[slideIndex - 1].style.display = 'block';
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);

	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}


	showSlides(slideIndex);
}

module.exports = sliderIndex;