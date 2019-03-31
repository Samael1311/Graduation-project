function page3() {

	let sliders = document.querySelectorAll('.modules__content-slider .card'),
		boxContent = document.querySelector('.modules__content-slider'),
		btnPrev = document.querySelector('.modules__info-btns .slick-prev'),
		btnNext = document.querySelector('.modules__info-btns .slick-next');


	boxContent.style.display = '-webkit-inline-box';
	boxContent.style.overflow = 'hidden';
	let slideIndex = 1;

		function next() {
			let active = document.querySelector('.modules__content-slider a.card-active');
			boxContent.appendChild(active);
			plusSlides(1);
		}

		btnNext.addEventListener('click', () => {
			next();
		});

		btnPrev.addEventListener('click', () => {
			let active = boxContent.children[sliders.length - 1];
			boxContent.insertBefore(active, boxContent.children[0]);
			plusSlides(-1);
		});


		function moveSlides(n) {

			if (n > sliders.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = sliders.length;
			}
			for (let i = 0; i < sliders.length; i++) {
				sliders[i].classList.remove('card-active');
				sliders[i].children[1].style.opacity = '0.4';
				sliders[i].children[0].children[1].style.opacity = '0';

			}
			sliders[slideIndex - 1].classList.add('card-active');
			sliders[slideIndex - 1].children[1].style.opacity = '1';
			sliders[slideIndex - 1].children[0].children[1].style.opacity = '1';
		}


		function plusSlides(n) {

			moveSlides(slideIndex += n);

		}
		moveSlides(slideIndex);
	
		setInterval(()=>{
			next();
		},4000);




}



module.exports = page3;