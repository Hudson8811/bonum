//код написан не лучшим образом,. без соблюдения наших рекомендаций. Задачи на рефакторинг нет, поэтому оставляю как есть. Но при разработке следующих рекомендую делать код более качественным, размещать его в main.js
//этот же будет точечно подключаться на той странице, где он нужен
$(function () {
	if ($('.calculator').length > 0) {
		$("#slider").slider({
			value: 25000,
			min: 1000,
			max: 100000,
			step: 0.1,
			change: function (event, ui) {
				var input = $(event.target).parent().find('.calculator-input');

				$(input).val(ui.value);
				calculate();
				//$(input).trigger('change');
			}
		});



		$("#slider2").slider({
			value: 50,
			min: 1,
			max: 100,
			step: 0.1,
			change: function (event, ui) {
				var input = $(event.target).parent().find('.calculator-input');

				$(input).val(ui.value);
				calculate();
				//$(input).trigger('change');
			}
		});


		$(".calculator-input__minus").on("click", function (event) {
			var input = $(event.target).parent().parent().find('.calculator-input');

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
		$(".calculator-input__plus").on("click", function (event) {
			var input = $(event.target).parent().parent().find('.calculator-input');

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


		$(".js-slider-input").on("change", function (event) {

			var slider = $(event.target).parent().find('.calculator-slider');
			var value = $(event.target).val();
			slider.slider("value", value);

		});

		$(".calculator input").on("change", function (event) {

			var percentVal = $(".calculator input[name=left_5]").val();
			if (percentVal < 1) {
				$(".calculator input[name=left_5]").val(1)
			}

			calculate();
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


		function calculate() {
			var input1 = $(".calculator input[name=left_1]").val(); //Общая посевная площадь
			var input2 = $(".calculator input[name=left_2]").val(); //Количество комбайнов
			var input3 = $(".calculator input[name=left_3]").val(); //Урожайность
			var input4 = $(".calculator input[name=left_4]").val(); //Убранная площадь на 1 комбайн за рабочий день
			var input5 = $(".calculator input[name=left_5]").val(); //Средний показатель самоосыпаемости
			var input6 = $(".calculator input[name=left_6]").val(); //Стоимость 1 Ц урожая


			var calc1 = input1 * input3; //Общая посевная площадь (га)* Урожайность (ц/га)
			var calc1Show = Math.ceil(calc1);

			$(".calculator input[name=right_1]").val(calc1Show); //Потенциальный урожай, без потерь на осыпаемости


			var calc2 = input1 / (input2 * input4); //Общая посевная площадь (Га) / (Количество комбайнов (шт) *  Убранная площадь на 1 комбайн за рабочий день (Га))
			var calc2Show = Math.ceil(calc2);

			$(".calculator input[name=right_2]").val(calc2Show); //Количество дней уборки


			var calc3 = calc1 * (calc2 * input5 / 100); //Урожай потенциальный, без потерь на осыпаемости (ц)*(Дни уборки * Средний показатель самоосыпаемости (% в день))/100)
			var calc3Show = Math.ceil(calc3);

			$(".calculator input[name=right_3]").val(calc3Show); //Потери на самоосыпаемости без бункера-перегрузчика


			var calc4 = calc1 - calc3; //Урожай потенциальный, без потерь на осыпаемости (Ц) - Потери на самоосыпаемости без БП (ц)
			var calc4Show = Math.ceil(calc4);

			$(".calculator input[name=right_4]").val(calc4Show); //Урожай после потерь на самоосыпаемости без бункера-перегрузчика (ц)


			var calc5 = calc1 - (calc3 * 0.7); //Потенциальный урожай без потерь на осыпаемости - (Потери на самоосыпаемости без БП (ц) * 0,7)
			var calc5Show = Math.ceil(calc5);

			$(".calculator input[name=right_5]").val(calc5Show); //Урожай после потерь на самоосыпаемости c бункером-перегрузчиком (ц)



			//Потери урожая без применения бункера-перегрузчика (ц)
			var calc6 = calc5 - calc4; //Потери на самоосыпаемости без БП (ц) - Потери на самоосыпаемости с БП (ц)

			//Потери дохода без применения бункера перегрузчика (руб.)
			var calc7 = calc6 * input6; //Разница на потерях в урожае (ц) * Цена за 1 ц. урожая (руб)

			$(".calculator .calculator-sum__result").text(number_format(calc7, 0, ' ', ' ') + ' ₽');
		}

		calculate();

	}


});