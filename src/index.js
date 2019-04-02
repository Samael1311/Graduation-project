
window.addEventListener('DOMContentLoaded', ()=>{
	'use strict';

	let indexSlider = require('./parts/slider_index'),
			play = require('./parts/play_index'),
			showupSlider = require('./parts/showup_slider'),
			goToModules = require('./parts/go_to_modules.js'),
			difference = require('./parts/difference'),
			page3 = require('./parts/page3'),
			helpForm = require('./parts/help_form'),
			showingUp = require('./parts/showing_up');




	indexSlider();
	play();
	showupSlider();
	goToModules();
	difference();
	page3();
	helpForm();
	showingUp();


	

});