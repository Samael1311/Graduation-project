function difference(){

	let btnPlus = document.querySelector('.officernew .plus'),
		officerold = document.querySelector('.officerold'),
		officernew = document.querySelector('.officernew');

	console.log(btnPlus);
let copies = {}, count = 1, count2 = 1;

for (let i = 1; i <= 3; i++) {
	copies[i] = officerold.children[i].cloneNode(true); 
}

let plusOld = officernew.children[1].cloneNode(true);
	officerold.appendChild(plusOld);
	
	for (let i = 0; i < 3; i++) {
		officerold.children[1].remove();
	}
	
	console.log(copies);

	btnPlus.addEventListener('click', ()=>{
		
		if(count<=3){ 
			let copy = copies[count].cloneNode(true);
			 officernew.insertBefore(copy, officernew.children[count]);
		} 
		 if(count == 3){
			officernew.children[++count].remove();
		}
		count++;
	});

	document.querySelector('.officerold .plus').addEventListener('click', ()=>{
		
		if(count2<=3){ 
			let copy = copies[count2].cloneNode(true);
			 officerold.insertBefore(copy, officerold.children[count2]);
		} 
		 if(count2 == 3){
			officerold.children[++count2].remove();
		}
		count2++;
	});


}

module.exports = difference;