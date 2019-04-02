window.addEventListener('DOMContentLoaded', () => {

	let modules = document.querySelectorAll('.module'),
		moduleApp = document.querySelector('.moduleapp'),
		btnModulePrev = document.querySelectorAll('.module__info-controls .prev'),
		btnModuleNext = document.querySelectorAll('.module__info-controls .next'),
		btnChangeSlide = document.querySelectorAll('.sidecontrol a '),
		url = parseInt(document.URL.match(/[^#]*$/)),
		btnPlus = document.querySelectorAll('.plus');



	let slideIndex = 1;
	if (url != '' && url != null) {
		showModules(slideIndex += url - 1)
	}


	for (let i = 0; i < btnModulePrev.length; i++) {
		btnModulePrev[i].addEventListener('click', () => {
			plusModules(-1);
		});

	}
	for (let i = 0; i < btnModuleNext.length; i++) {
		btnModuleNext[i].addEventListener('click', () => {
			plusModules(1);
		});

	}


	for (let i = 0; i < btnChangeSlide.length; i++) {
		btnChangeSlide[i].addEventListener('click', () => {
			if (i > 1 && i % 2 == 0) {
				showModules(modules.length + 1);
			} else if (i % 2 != 0) {
				clearAccordeon();
				plusModules(1);
			}

		});

	}

	function showModules(n) {
		if (n > modules.length || isNaN(n)) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = modules.length;
		}
		for (let i = 0; i < modules.length; i++) {
			modules[i].style.display = 'none';
		}
		modules[slideIndex - 1].style.display = 'block';
	}

	function plusModules(n) {
		showModules(slideIndex += n);

	}

	function currentModule(n) {
		showModules(slideIndex = n);
	}


	showModules(slideIndex);


	let md = document.querySelectorAll('.module__info'),
		message,
		download = document.querySelectorAll('.module__info-book .download');


	for (let i = 0; i < download.length; i++) {
		download[i].addEventListener('click', () => {
			let path = '../public/img/showup6.jpg';
			down(path);
		});

	}

	let down = function download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,');
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}



	for (let i = 0; i < md.length; i++) {
		message = document.createElement('div');
		message.classList.add('msg');
		message.classList.add('animated');
		//message.classList.add('slideInUp');
		message.style.display = 'none';
		message.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
		md[i].insertBefore(message, md[i].children[5]);
	}


	for (let i = 0; i < btnPlus.length; i++) {

		btnPlus[i].addEventListener('click', () => {

			if (md[i].getElementsByClassName('msg')[0].style.display == 'none') {
				md[i].getElementsByClassName('msg')[0].style.display = 'block';
				md[i].getElementsByClassName('msg')[0].classList.add('slideInUp');
			} else if (md[i].getElementsByClassName('msg')[0].style.display == 'block') {
				md[i].getElementsByClassName('msg')[0].style.display = 'none';
			}



		});

	}

	function clearAccordeon() {
		for (let i = 0; i < md.length; i++) {
			md[i].getElementsByClassName('msg')[0].style.display = 'none';
		}
	}


	// for (let i = 1; i <= 8; i++) {
	// 	let copy;
	// 	if(i != 3 && i!=6) {
	// 		if(i==1 || i%2 !=0){
	// 			copy = modules[0].cloneNode(true); 
	// 			copy.id = i;
	// 			moduleApp.insertBefore(copy, document.getElementById('6'));
	// 		} else if(i%2 == 0){	
	// 			copy = modules[1].cloneNode(true); 
	// 			copy.id = i;
	// 			moduleApp.insertBefore(copy, document.getElementById('6'));
	// 		}

	// 	} else if(i==3 || i==6){continue;}

	// }


})