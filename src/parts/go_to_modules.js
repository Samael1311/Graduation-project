function goToModules(){

	let links = document.querySelectorAll('.showup__content-slider a'),
	btnPlus = document.querySelector('.showup__content-explore .plus');



	btnPlus.addEventListener('click', ()=>{
		window.location.href = 'modules.html#1';
	});

		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener('click', ()=>{
				
				//window.location.href = `modules.html# ${++i}`;
				window.location.href = 'modules.html#' + ++i;
			});
			
		}

}

module.exports = goToModules;