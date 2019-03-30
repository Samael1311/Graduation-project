window.addEventListener('DOMContentLoaded', ()=>{
	'use strict';

	let indexSlider = require('./parts/slider_index'),
			play = require('./parts/play_index'),
			showupSlider = require('./parts/showup_slider'),
			goToModules = require('./parts/go_to_modules.js');


	indexSlider();
	play();
	showupSlider();
	goToModules();



	

});