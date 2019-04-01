function helpForm() {

	let message = {
			loading: '<img src="img/ajax-loader.gif" alt="Загрузка...">',
			succes: '<img src="img/tenor.gif" alt="Спасибо! Скоро мы с вами свяжемся!">',
			failure: '<img src="img/warning.png" alt="Что-то пошло не так...">'
		},
		form = document.querySelector('.join__evolution form'),
		inputs = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),
		phone = document.querySelector('.join__evolution #phone'),

		scheduleForm = document.querySelector('.schedule__form form'),
		scheduleInputs = scheduleForm.getElementsByTagName('input'),
		btnNext = document.querySelector('.join .next');


		btnNext.addEventListener('click', ()=>{
			statusMessage.remove();
		});

	form.addEventListener('submit', (event) =>{
		event.preventDefault();
		sendMessage(form)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => statusMessage.innerHTML = message.succes)
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInputs);
	});

	scheduleForm.addEventListener('submit', (event)=>{
		event.preventDefault();
		sendMessage(scheduleForm)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => statusMessage.innerHTML = message.succes)
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInputs);

	});

	let sendMessage = (form) => {

		form.appendChild(statusMessage);
		let formData = new FormData(form);
		return new Promise(function (resolve, reject) {

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			let obj = {};
			formData.forEach(function (value, key) {
				if (value != '') {
					obj[key] = value;
				}
				console.log(value);
			});
			let json = JSON.stringify(obj);

			request.addEventListener('readystatechange', function () {
				if (request.readyState < 4) {
					resolve();
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 3) {
						resolve();
					} else {
						reject();
					}

				}
			});
			request.send(json);
		});

	};

	function clearInputs() {
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
		}
		for (let i = 0; i < scheduleInputs.length; i++) {
			scheduleInputs[i].value = '';
			
		}

	}

	inputs[2].addEventListener('keyup', function (e) {
		onlyEmailChars(e);

	});

	scheduleInputs[1].addEventListener('keyup', function (e) {
		onlyEmailChars(e);

	});
	scheduleInputs[2].addEventListener('keyup', function (e) {

		e.target.value = e.target.value.replace(/[^\d\.\/]/g, '');

	});


	function onlyEmailChars(e){
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ]/g, '');
	}

	phone.addEventListener('keyup', (event) => {

		console.log(+event.target.value.slice(-1));
		if (Number.isInteger(+event.target.value.slice(-1))) {
			let char = event.target.value;

				if (phone.value.length == 1) {
					event.target.value = '+1(' + char;
				}
				if (char.match(/^\+\d{1}\(\d{3}$/) !== null) {
					event.target.value = char + ')';
				} else if (char.match(/^\+\d{1}\(\d{3}\)\d{3}$/) !== null) {
					event.target.value = char + '-';
				}
			
		} else { event.target.value = '';}



	});

	

}

module.exports = helpForm;