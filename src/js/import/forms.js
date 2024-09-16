isdef = function (variable) {
	return typeof variable !== 'undefined';
};

function debounce(func, timeout = 400) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

//Авторизация, регистрация, валидация форм вынесены в additional.js
