function difference(){

	let btnPlus = document.querySelector('.card__click .plus'),
		officerold = document.querySelector('.officerold'),
		officernew = document.querySelector('.officernew');

	console.log(btnPlus);
let count = 0, copy;
	btnPlus.addEventListener('click', ()=>{
		count++;
		if(count<=3){
			copy = officerold.children[count].cloneNode(true); 
			 officernew.insertBefore(copy, officernew.children[count]);
			 console.log(copy);
		} 
		 if(count == 3){
			officernew.children[count+1].remove();
		}
	
	});

}

module.exports = difference;