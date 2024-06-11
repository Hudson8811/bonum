

function num_word(value, words) {
	value = Math.abs(value) % 100;
	var num = value % 10;
	if (value > 10 && value < 20) return words[2];
	if (num > 1 && num < 5) return words[1];
	if (num == 1) return words[0];
	return words[2];
}


$(function () {
	var simpleNumberFormat = wNumb({
		mark: '.',
		thousand: ' ',
		prefix: '',
		suffix: ''
	});
	var moneyFormat = wNumb({
		mark: '.',
		thousand: ' ',
		prefix: '',
		suffix: ' ₽'
	});

	var monthFormat = wNumb({
		mark: '.',
		thousand: ' ',
		prefix: '',
		//suffix: ' мес'
		edit: function (value) {
			return value + ' ' + num_word(value, ['месяц', 'месяца', 'месяцев']);
		}
	});


	function number_format(number, decimals, dec_point, thousands_sep) {
		// Strip all characters but numerical ones.
		number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
		var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			s = '',
			toFixedFix = function (n, prec) {
				var k = Math.pow(10, prec);
				return '' + Math.round(n * k) / k;
			};
		// Fix for IE parseFloat(0.55).toFixed(0) = 0;
		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}

	function getRadixCount(number) {
		return (number + '').length;
	}
	function changeSliderMax(slider, newMax, min, step, postfixForPoints) {
		//lider.slider( "option", "max", newMax);
		var middeVal, middlePoint, maxPoint;
		if (min === step) {
			newMax.length
			middeVal = Math.round((newMax / 2 * 10) / 10);
			/*console.log('middeVal');
			console.log(middeVal);*/


			var maxPoint = parseInt(simpleNumberFormat.to(newMax).replace(/(\d*).*/g, '$1'));
			//console.log('maxPoint');
			//console.log(maxPoint);

			//var maxRadix = getRadixCount(maxPoint);
			var middlePoint = maxPoint / 2;

			//не идеально, можно сделать универсальней. ПОка так
			/*
			if(Math.floor(newMax / Math.pow(10, maxRadix - 2) % 10)!==0){
				console.log('2222');

				middlePoint = Math.floor(middeVal / Math.pow(10, maxRadix - 2) % 100) + Math.floor(middeVal / Math.pow(10, maxRadix - 3) % 10) / 10;
				maxPoint = Math.floor(newMax / Math.pow(10, maxRadix - 2)  % 100) + Math.floor(newMax / Math.pow(10, maxRadix - 3) % 10) / 10;
			}
			else{
				middlePoint = Math.floor(middeVal / Math.pow(10, maxRadix - 1) % 10) + Math.floor(middeVal / Math.pow(10, maxRadix - 2) % 10) / 10;
				maxPoint = Math.floor(newMax / Math.pow(10, maxRadix - 1) % 10) + Math.floor(newMax / Math.pow(10, maxRadix - 2) % 10) / 10;
			}*/

		} else {//эту логику реализовать если будет востребована. Сейчас на это время решено не тратить

		}

		middlePoint += postfixForPoints;
		maxPoint += postfixForPoints;

		slider.slider("option", "max", newMax);
		slider.find('.range-point[x="50%"]').html(middlePoint);
		slider.find('.range-point[x="100%"]').html(maxPoint);
		setTimeout(function () {
			var input = slider.closest('.js-rs-block').find('.js-rs-input');
			input.val(slider.slider("value")).trigger('change');
		}, 100);
		/*console.log('middlePoint');
		console.log(middlePoint);
		console.log('maxPoint');
		console.log(maxPoint);*/
	}
	//changeSliderMax(null, 25000000, 1000, 1000, ' млн');



	if ($('.js-range-slider').length > 0) {

		$('.js-prevent-submit').on('submit', function (evt) {
			evt.preventDefault();
		});

		$(".js-range-slider").each(function () {
			var slider = $(this);
			var inp = slider.closest('.js-rs-block').find('.js-rs-input');
			var inpTriggerable = true;

			var currentFormat;
			switch ($(this).attr('data-format')) {
				case 'money':
					currentFormat = moneyFormat;
					break;
				case 'month':
					currentFormat = monthFormat;
					break;
				default:
					currentFormat = simpleNumberFormat;
					break;
			}

			$(this).slider({
				value: parseInt($(this).attr('data-val')),
				min: parseInt($(this).attr('data-min')),
				max: parseInt($(this).attr('data-max')),
				step: parseInt($(this).attr('data-step')),

				//animate: "fast",
			}).on("change slide", function (event, ui) {
				var input = $(event.target).closest('.js-rs-block').find('.js-rs-input');
				$(input).val(currentFormat.to(ui.value));
				//calculate();
				inpTriggerable = false;
				$(input).trigger('change');
			});

			inp.on("change", function (event) {
				//console.log('inpTriggerable' + inpTriggerable);
				if (inpTriggerable) {
					var slider = $(this).closest('.js-rs-block').find('.js-range-slider');
					var value = currentFormat.from($(this).val());
					$(this).val(currentFormat.to(slider.slider("value")));
					slider.slider("value", value);
				}
				else {
					inpTriggerable = true;
				}
			})
			setTimeout(function () {
				inp.val(slider.slider('value')).trigger('change');
			}, 200);
		});

		/*
				$(".js-rs-inp-minus").on("click", function (event) {
					var input = $(event.target).closest('.js-rs-block').find('.js-rs-input');
					if (input.hasClass("js_float")) {
						var value = parseFloat($(input).val()) - 0.01;
						if (!Number.isInteger(value))
							value = value.toFixed(2);
					}
					else {
						var value = parseFloat($(input).val()) - 1;
					}
					if (value > 0) {
						$(input).val(value);
						$(input).trigger('change');
					}
				});
				$(".js-rs-inp-plus").on("click", function (event) {
					var input = $(event.target).closest('.js-rs-block').find('.js-rs-input');
					if (input.hasClass("js_float")) {
						var value = parseFloat($(input).val()) + 0.01;
						if (!Number.isInteger(value))
							value = value.toFixed(2);
					}
					else {
						var value = parseFloat($(input).val()) + 1;
					}
					$(input).val(value);
					$(input).trigger('change');
				});
		*/

	}

	if ($('.js-calc-leasing').length > 0) {
		$('.js-calc-leasing__price').on('change slide', function (event, ui) {
			var cl_price_rs = $('.js-calc-leasing__price');

			var min = parseInt(cl_price_rs.attr('data-min'));
			var step = parseInt(cl_price_rs.attr('data-step'));

			var targetRS = $('.js-calc-leasing__first-payment');
			changeSliderMax(targetRS, ui.value, min, step, ' млн');
			//setTimeout(function(){targetRS.vladivostok},100);
		})

		var cl_price_rs = $('.js-calc-leasing__price');
		var min = parseInt(cl_price_rs.attr('data-min'));
		var step = parseInt(cl_price_rs.attr('data-step'));
		changeSliderMax($('.js-calc-leasing__first-payment'), cl_price_rs.slider('value'), min, step, ' млн');

		var timeout;//мини debounce
		$('.js-calc-leasing .js-range-slider, .js-calc-leasing input, .js-calc-leasing').on('slide change blur  submit', function () {
			if (typeof (timeout) !== 'undefined') {
				window.clearTimeout(timeout);
			}
			window.setTimeout(function () {
				calculateLeasingCalc();
			}, 250);
		});

		$('.js-calc-leasing-minus').on('click', function () {
			var inp = $('.js-calc-leasing__month-inp');
			var slider = inp.closest('.js-rs-block').find(".js-range-slider");
			var val = parseInt(slider.slider("value")) - 1;
			slider.slider("value", val);
			inp.val(monthFormat.to(slider.slider("value")));
			calculateLeasingCalc();
		});
		$('.js-calc-leasing-plus').on('click', function () {
			var inp = $('.js-calc-leasing__month-inp');
			var slider = inp.closest('.js-rs-block').find(".js-range-slider");
			var val = parseInt(slider.slider("value")) + 1;
			slider.slider("value", val);
			inp.val(monthFormat.to(slider.slider("value")));
			calculateLeasingCalc();
		});

		function calculateLeasingCalc() {
			/*
			Еж. платёж = (а - б + с)/ д
			а - полная стоимость техники
			б - аванс
			с - а*0.12
			д - срок(мес)
			*/

			var price_inp = $('.js-calc-leasing__price-inp');
			var first_payment_inp = $('.js-calc-leasing__first-payment-inp');
			var duration_inp = $('.js-calc-leasing__month-inp');

			var price = simpleNumberFormat.from(price_inp.val());
			var first_payment = simpleNumberFormat.from(first_payment_inp.val());
			var duration = simpleNumberFormat.from(duration_inp.val());
			/*console.log('price');
			console.log(price);
			console.log('first_payment');
			console.log(first_payment);
			console.log('duration');
			console.log(duration);*/
			var result = (price - first_payment + price * 0.12) / duration;
			$('.js-calc-leasing-result').html(moneyFormat.to(Math.round(result)));
		}
	};
});