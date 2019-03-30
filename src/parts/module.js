window.addEventListener('DOMContentLoaded', ()=>{
let btnChangeModule = document.querySelectorAll('.sidecontrol a '),
modules = document.querySelectorAll('.module'),
moduleApp = document.querySelector('.moduleapp'),
btnModulePrev = document.querySelectorAll('.module__info-controls .prev'), 
btnModuleNext = document.querySelectorAll('.module__info-controls .next'),
btnChangeSlide = document.querySelectorAll('.sidecontrol a '),
url =parseInt(document.URL.match(/[^#]*$/));
let	slideIndex = 1;
console.log(url);
if(url!='' && url!=null ){
	console.log(url);
	showModules(slideIndex += url-1)
}


for (let i = 0; i < btnModulePrev.length; i++) {
	btnModulePrev[i].addEventListener('click', ()=>{
		plusModules(-1);
	});
	
}
for (let i = 0; i < btnModuleNext.length; i++) {
	btnModuleNext[i].addEventListener('click', ()=>{
		plusModules(1);
	});
	
}


for (let i = 0; i < btnChangeSlide.length; i++) {
	btnChangeSlide[i].addEventListener('click', ()=>{
		if(i>1 && i%2 == 0){
			showModules(modules.length+1);
		} else if(i%2 != 0){
			plusModules(1);
		}
		
	});
	
}

function showModules(n){
if(n > modules.length){
	slideIndex = 1;
}
if(n < 1){
	slideIndex = modules.length;
}
for (let i = 0; i < modules.length; i++) {
	modules[i].style.display = 'none';	
}
	modules[slideIndex-1].style.display = 'block';
}

function plusModules(n){
showModules(slideIndex += n);

}

function currentModule(n){
showModules(slideIndex = n);
}


showModules(slideIndex);


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