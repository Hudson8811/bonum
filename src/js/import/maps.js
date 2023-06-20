
function getYaMap() {

	$(function () {
		if ($('#centers-map').length > 0) {

			function showPointOnMapInfo(){
				$('.cmb-info').addClass('cmb-info--active');
				$('#cmb-info__item').addClass('cmb-info__item--active');

			}

			function fillPointOnMapInfo(obj){
				console.log(obj);
				var item=$('#cmb-info__item');
				item.find('.js-title').html('');
				item.find('.js-type').html('');
				item.find('.js-contacts-main a').remove();
				item.find('.js-contacts-other').remove();

				item.find('.js-title').html(obj.title);
				item.find('.js-type').html(obj.titleSW);
				item.find('.js-address').html(obj.address);

				var phones=obj.phone.split(/[\/,]+/);
				var mainLinks='';

				if(obj.phone.trim().length>0){
					phones.forEach(function(el){
						el=el.trim();
						//var elClean=el.replace(/\(.*?\)/,'');
						//уберём доб номера в скобках
						//нельзя. часть номеров содержит скобки
						var elClean=el.replace(/\D/g,'');
						//уберём всё кроме цифр
						mainLinks+='<a href="tel:'+elClean+'">'+el+'</a>';
					});
				}
				if(obj.phone.trim().length>0){
					phones.forEach(function(el){
						el=el.trim();
						//var elClean=el.replace(/\(.*?\)/,'');
						//уберём доб номера в скобках
						//нельзя. часть номеров содержит скобки
						var elClean=el.replace(/\D/g,'');
						//уберём всё кроме цифр
						mainLinks+='<a href="tel:'+elClean+'">'+el+'</a>';
					});
				}

				var sites=obj.site.split(/[|,]+/);

				if(obj.site.trim().length>0){
					sites.forEach(function(el){
						el=el.trim();
						if(el.indexOf("@") >= 0){
							mainLinks+='<a href="mailto:'+el.trim()+'">'+el.trim()+'</a>';
						}
						else{
							mainLinks+='<a target="_blank" href="'+el.trim()+'">'+el.trim()+'</a>';
						}
					});
				}
				/*
				if(obj.site.trim().length>0){

					if(obj.site.indexOf("@") >= 0){
						mainLinks+='<a href="mailto:'+obj.site.trim()+'">'+obj.site.trim()+'</a>';
					}
					else{
						mainLinks+='<a target="_blank" href="'+obj.site.trim()+'">'+obj.site.trim()+'</a>';
					}
				}*/
				item.find('.js-contacts-main').append(mainLinks);





			}

			function hidePointOnMapInfo(){
				$('.cmb-info').removeClass('cmb-info--active');
				$('#cmb-info__item').removeClass('cmb-info__item--active');

			}




			ymaps.ready(function () {
				var firstPrintCenters=true;
				console.log(1);
				var myMap1;
				var myPlacemark1;

				$.ajax({
					url: '/jsons/map.json?v=2',
					type: 'get',
					success: function (response) {
						//var yyy = JSON.parse(response).main;
						console.log(response);
						//var yyy = $.parseJSON(response);;
						//var yyy = response;
						window.centersArray = response;

						myMap1 = new ymaps.Map("centers-map", {
							center: [60.12833253, 82.72110322],
							zoom: 3,
							controls: ['zoomControl'/*, 'typeSelector', 'fullscreenControl'*/]



						}, {
							searchControlProvider: 'yandex#search'
						}
							, clusterer = new ymaps.Clusterer({

								hasBalloon: false,

								//gridSize: -1000,

								clusterIcons: [
									{
										href: '/img/icons_map/cluster.svg',
										size: [48, 48],
										offset: [-24, -24]
									}],


								clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
									'<span style="color: #FFFFFF;  font-weight: 400;	font-size: 16px; line-height: 150%;     font-family: "ZonaPro", sans-serif; display:inline-block;margin-bottom:-2px;">$[properties.geoObjects.length]</span>'),

								groupByCoordinates: false,

								clusterDisableClickZoom: true,
								clusterHideIconOnBalloonOpen: false,

								geoObjectHideIconOnBalloonOpen: false,


							}));




						/*,objectManager = new ymaps.ObjectManager({
							// Чтобы метки начали кластеризоваться, выставляем опцию.
							clusterize: true,
							// ObjectManager принимает те же опции, что и кластеризатор.
							gridSize: 64,
							// Макет метки кластера pieChart.
							clusterIconLayout: "default#pieChart"
						})*/

						//myMap1.geoObjects.add(objectManager);


						window.clusterer = clusterer;


						myMap1.events.add('click', function (e) {
							/*var activeGeoObject = e.get('target');
							console.log(activeGeoObject);*/
							hidePointOnMapInfo();
						});
						clusterer.events.add('click', function (e) {

							// placemark на который кликнули

							var activeGeoObject = e.get('target');
							//console.log('2'+activeGeoObject);




							// Выставляем ему опции типа "active"

							activeGeoObject.options.set(activeGeoObject.properties.get('activeOptions'));
							/*console.log(activeGeoObject);
							window.active=activeGeoObject;*/
							var active_item_id = parseInt(activeGeoObject.properties.get('id'));
							var activeItemIdxInArray = parseInt(activeGeoObject.properties.get('idxInArray'));

							// остальным выставляем опции типа default


							fillPointOnMapInfo(window.centersArray[activeItemIdxInArray]);



							showPointOnMapInfo();

							clusterer.getGeoObjects().forEach(function (geoObject) {

								if (geoObject !== activeGeoObject) {

									geoObject.options.set(geoObject.properties.get('defaultOptions'));

								}

								//objectManager.add(myPlacemark1);
							});
							/*
							clusterer._objects.forEach(function (geoObject){

								if (geoObject !== activeGeoObject) {

									geoObject.options.set(geoObject.properties.get('defaultOptions'));

								}

								//objectManager.add(myPlacemark1);
							});*/
						});



						function printChosenCity(myMap1, clusterer, chosenCity, chosenCenterType) {
							$('#maps-list').html('');
							$.each(window.centersArray, function (key, value) {
								if ((chosenCity === false || chosenCity === value.city) && (chosenCenterType === false || chosenCenterType === value.type)) {

									var typeSW, titleSW, typeSWActive;
									if (value.type == 43) {
										typeSW = 'other.svg';
										typeSWActive = 'other_act.svg';
										titleSW = 'Гарантийные сервисные центры BPW';
									} else
										if (value.type == 47) {
											typeSW = 'other.svg';
											typeSWActive = 'other_act.svg';
											titleSW = 'Собственный сервисный центр';
										} else
											if (value.type == 51) {
												typeSW = 'wabco.svg';
												typeSWActive = 'wabco_act.svg';
												titleSW = 'Авторизированные Магазины Wabco';
											} else
												if (value.type == 52) {
													typeSW = 'wabco.svg';
													typeSWActive = 'wabco_act.svg';
													titleSW = 'Сервисные центры Wabco с поддержкой гарантии';
												} else
													if (value.type == 53) {
														typeSW = 'wabco.svg';
														typeSWActive = 'wabco_act.svg';
														titleSW = 'Сервисные центры Wabco без поддержки  гарантии';
													} else
														if (value.type == 54) {
															typeSW = 'bpw.svg';
															typeSWActive = 'bpw_act.svg';
															titleSW = 'Сервисные центры BPW';
														} else
															if (value.type == 55) {
																typeSW = 'saf.svg';
																typeSWActive = 'saf_act.svg';
																titleSW = 'Сервисные станции SAF';
															} else
																if (value.type == 56) {
																	typeSW = 'bonum.svg';
																	typeSWActive = 'bonum_act.svg';
																	titleSW = 'Сервисный центр рекомендованный BONUM';
																} else {

																	typeSW = 'other.svg';
																	typeSWActive = 'other_act.svg';
																	titleSW = 'Иное';
																}


									if(firstPrintCenters){
										window.centersArray[key].idxInArray=key;
										window.centersArray[key].titleSW=titleSW;
									}


									var a = value.coords;
									var xy = a.split(',');
									var x = parseFloat(xy[0]);
									var y = parseFloat(xy[1]);

									myPlacemark1 = new ymaps.Placemark([x, y], {
										content: value.title,
										id: value.id,
										idxInArray: value.idxInArray,
										/*balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/' + typeSW + '" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>' + value.title + '</b><br>' + titleSW + '<br></td></tr></table>'*/


										defaultOptions: {
											iconLayout: 'default#image',
											iconImageHref: '/img/icons_map/' + typeSW,
											"iconImageSize": [48, 48],
											"iconImageOffset": [-24, -24],
											"openBalloonOnClick": false

										},

										activeOptions: {
											iconLayout: 'default#image',
											iconImageHref: '/img/icons_map/' + typeSWActive,
											"iconImageSize": [48, 48],
											"iconImageOffset": [-24, -24],
											"openBalloonOnClick": false

										}
									}, {
										iconLayout: 'default#image',
										iconImageHref: '/img/icons_map/' + typeSW,
										"iconImageSize": [48, 48],
										"iconImageOffset": [-24, -24],
										"openBalloonOnClick": false

									});
									//myMap1.geoObjects.add(myPlacemark1);
									clusterer.add(myPlacemark1);



									if(chosenCity !== false){


										var phones=value.phone.split(/[\/,]+/);
										var mainLinks='';

										if(value.phone.trim().length>0){
											phones.forEach(function(el){
												el=el.trim();
												//var elClean=el.replace(/\(.*?\)/,'');
												//уберём доб номера в скобках
												//нельзя. часть номеров содержит скобки
												var elClean=el.replace(/\D/g,'');
												//уберём всё кроме цифр
												mainLinks+='<a href="tel:'+elClean+'">'+el+'</a>';
											});
										}

										if(value.site.trim().length>0){
											if(value.site.indexOf("@") >= 0){
												mainLinks+='<a href="mailto:'+value.site.trim()+'">'+value.site.trim()+'</a>';
											}
											else{
												mainLinks+='<a target="_blank" href="'+value.site.trim()+'">'+value.site.trim()+'</a>';
											}
										}



										var item_in_list='<div class="localities-centers__item">'+
										'<div class="localities-centers__item-body">'+
										'<div class="localities-centers__item-title js-title">'+value.title+'</div>'+
										'<div class="localities-centers__item-subtitle js-type">'+value.titleSW+'</div>'+
										'<div class="localities-centers__item-loc"><span>адрес:</span>'+
										'<p class="js-address">'+value.address+'</p>'+
										'</div>'+
										'<div class="localities-centers__item-contact js-contacts-main"><span>контакты:</span>'+mainLinks+'</div>'+
										'</div>'+
										'<div class="localities-centers__item-map">'+
										'<div class="simple-map-container js-place-map-here"  data-coords="'+value.coords+'" data-icon="'+'/img/icons_map/' + typeSWActive+'"></div>'+
										'<!--img(src="img/centers/map1.jpg", alt="alt")-->'+
										'</div>'+
										'</div>';

										$('#maps-list').append(item_in_list);


									}



								}



								//objectManager.add(myPlacemark1);
							});

							firstPrintCenters=false;

							/*clusterer.options.set({
								gridSize: 80,
								clusterDisableClickZoom: true
							});*/

							myMap1.geoObjects.add(clusterer);


							$('#maps-list .js-place-map-here').each(function(){
								var coor=$(this).attr('data-coords');
								var icon=$(this).attr('data-icon');


								var a = coor;
								var xy = a.split(',');
								var x = parseFloat(xy[0]);
								var y = parseFloat(xy[1]);


									var myTempMap = new ymaps.Map($(this)[0], {
											center: [x, y],
											zoom: 10
										}),

										myPlacemark2 = new ymaps.Placemark([x, y], {
										}, {
											iconLayout: 'default#image',
											iconImageHref: icon,
											iconImageSize: [48, 48],
											iconImageOffset: [-24, -24]
										});

									// Добавляем все метки на карту.
									myTempMap.geoObjects
										.add(myPlacemark2);

							});
						}
						function filterCenters(map, clusterer, chosenCity, chosenCenterType) {
							if (chosenCity === 'false') {
								chosenCity = false;
							}
							if (chosenCenterType === 'false') {
								chosenCenterType = false;
							}
							clusterer.removeAll();
							myMap1.geoObjects.removeAll();
							printChosenCity(myMap1, clusterer, chosenCity, chosenCenterType)
						}
						filterCenters(myMap1, clusterer, $('#localities-centers__select').val(), $('.localities-centers__button-active.js-map-filter-brand').attr('data-filter'));

						$('.js-map-filter-brand').on('click',function(){
							$(this).addClass('localities-centers__button-active').siblings().removeClass('localities-centers__button-active');
							filterCenters(myMap1, clusterer, $('#localities-centers__select').val(), $('.localities-centers__button-active.js-map-filter-brand').attr('data-filter'));
						});

						$('#localities-centers__select').on('change',function(){
							filterCenters(myMap1, clusterer, $('#localities-centers__select').val(), $('.localities-centers__button-active.js-map-filter-brand').attr('data-filter'));
						});

					}


				}).fail(function (jqXHR, textStatus, errorThrown) {
					console.log("error");
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
				});



				/*
					function getFullData() {
						var resFD = {};
						$.ajax({
							url: '/jsons/mapFullData.json',
							type: 'get',
							async: false,
							dataType:'json',
							success: function(response) {
								resFD = response;
							}
						});

						return resFD;
					}

					const centres = getFullData();
				*/

			});
		}


		if ($('#predstva-map').length > 0) {

			function showPointOnMapInfo(){
				$('.cmb-info').addClass('cmb-info--active');
				$('#cmb-info__item').addClass('cmb-info__item--active');

			}

			function fillPointOnMapInfo(obj){
				var item=$('#cmb-info__item');
				item.find('.js-title').html('');
				item.find('.js-type').html('');
				item.find('.js-contacts-main a').remove();
				item.find('.js-contacts-other').remove();

				item.find('.js-title').html(obj.type_title);
				item.find('.js-type').html(obj.city_desc);
				item.find('.js-address').html(obj.address);

				if(typeof(obj.additional_contacts!=='undefined')){
					item.find('.js-contacts-main').after(obj.additional_contacts);

				}





				var phones=obj.phone.split(/[\/,]+/);
				var mainLinks='';

				if(obj.phone.trim().length>0){
					phones.forEach(function(el){
						el=el.trim();
						//var elClean=el.replace(/\(.*?\)/,'');
						//уберём доб номера в скобках
						//нельзя. часть номеров содержит скобки
						var elClean=el.replace(/\D/g,'');
						//уберём всё кроме цифр
						mainLinks+='<a href="tel:'+elClean+'">'+el+'</a>';
					});
				}

				var sites=obj.site.split(/[|,]+/);

				if(obj.site.trim().length>0){
					sites.forEach(function(el){
						el=el.trim();
						if(el.indexOf("@") >= 0){
							mainLinks+='<a href="mailto:'+el.trim()+'">'+el.trim()+'</a>';
						}
						else{
							mainLinks+='<a target="_blank" href="'+el.trim()+'">'+el.trim()+'</a>';
						}
					});
				}
				/*
				if(obj.site.trim().length>0){

					if(obj.site.indexOf("@") >= 0){
						mainLinks+='<a href="mailto:'+obj.site.trim()+'">'+obj.site.trim()+'</a>';
					}
					else{
						mainLinks+='<a target="_blank" href="'+obj.site.trim()+'">'+obj.site.trim()+'</a>';
					}
				}*/
				item.find('.js-contacts-main').append(mainLinks);





			}

			function hidePointOnMapInfo(){
				$('.cmb-info').removeClass('cmb-info--active');
				$('#cmb-info__item').removeClass('cmb-info__item--active');

			}




			ymaps.ready(function () {
				var firstPrintCenters=true;
				console.log(1);
				var myMap1;
				var myPlacemark1;

				/*$.ajax({
					url: '/jsons/predstva_map.json?v=2',
					type: 'get',
					success: function (response) {*/
						response=window.predstva_map_array;
						//var yyy = JSON.parse(response).main;
						console.log(response);
						//var yyy = $.parseJSON(response);;
						//var yyy = response;
						window.centersArray = response;

						myMap1 = new ymaps.Map("predstva-map", {
							center: [60.12833253, 82.72110322],
							zoom: 3,
							controls: ['zoomControl'/*, 'typeSelector', 'fullscreenControl'*/]



						}, {
							searchControlProvider: 'yandex#search'
						}
							, clusterer = new ymaps.Clusterer({

								hasBalloon: false,

								//gridSize: -1000,

								clusterIcons: [
									{
										href: '/img/icons_map/cluster.svg',
										size: [48, 48],
										offset: [-24, -24]
									}],


								clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
									'<span style="color: #FFFFFF;  font-weight: 400;	font-size: 16px; line-height: 150%;     font-family: "ZonaPro", sans-serif; display:inline-block;margin-bottom:-2px;">$[properties.geoObjects.length]</span>'),

								groupByCoordinates: false,

								clusterDisableClickZoom: true,
								clusterHideIconOnBalloonOpen: false,

								geoObjectHideIconOnBalloonOpen: false,


							}));




						/*,objectManager = new ymaps.ObjectManager({
							// Чтобы метки начали кластеризоваться, выставляем опцию.
							clusterize: true,
							// ObjectManager принимает те же опции, что и кластеризатор.
							gridSize: 64,
							// Макет метки кластера pieChart.
							clusterIconLayout: "default#pieChart"
						})*/

						//myMap1.geoObjects.add(objectManager);


						window.clusterer = clusterer;


						myMap1.events.add('click', function (e) {
							/*var activeGeoObject = e.get('target');
							console.log(activeGeoObject);*/
							hidePointOnMapInfo();
						});
						clusterer.events.add('click', function (e) {

							// placemark на который кликнули

							var activeGeoObject = e.get('target');
							//console.log('2'+activeGeoObject);




							// Выставляем ему опции типа "active"

							activeGeoObject.options.set(activeGeoObject.properties.get('activeOptions'));
							/*console.log(activeGeoObject);
							window.active=activeGeoObject;*/
							var active_item_id = parseInt(activeGeoObject.properties.get('id'));
							var activeItemIdxInArray = parseInt(activeGeoObject.properties.get('idxInArray'));

							// остальным выставляем опции типа default


							fillPointOnMapInfo(window.centersArray[activeItemIdxInArray]);



							showPointOnMapInfo();

							clusterer.getGeoObjects().forEach(function (geoObject) {

								if (geoObject !== activeGeoObject) {

									geoObject.options.set(geoObject.properties.get('defaultOptions'));

								}

								//objectManager.add(myPlacemark1);
							});
							/*
							clusterer._objects.forEach(function (geoObject){

								if (geoObject !== activeGeoObject) {

									geoObject.options.set(geoObject.properties.get('defaultOptions'));

								}

								//objectManager.add(myPlacemark1);
							});*/
						});



						function printChosenCity(myMap1, clusterer) {
							$.each(window.centersArray, function (key, value) {

									var typeSW, typeSWActive;

									typeSW = 'predstvo.svg';
									typeSWActive = 'predstvo_act.svg';


									if(firstPrintCenters){
										window.centersArray[key].idxInArray=key;
									}


									var a = value.coords;
									var xy = a.split(',');
									var x = parseFloat(xy[0]);
									var y = parseFloat(xy[1]);

									myPlacemark1 = new ymaps.Placemark([x, y], {
										content: value.title,
										id: value.id,
										idxInArray: value.idxInArray,

										defaultOptions: {
											iconLayout: 'default#image',
											iconImageHref: '/img/icons_map/' + typeSW,
											"iconImageSize": [48, 48],
											"iconImageOffset": [-24, -24],
											"openBalloonOnClick": false

										},

										activeOptions: {
											iconLayout: 'default#image',
											iconImageHref: '/img/icons_map/' + typeSWActive,
											"iconImageSize": [48, 48],
											"iconImageOffset": [-24, -24],
											"openBalloonOnClick": false

										}
									}, {
										iconLayout: 'default#image',
										iconImageHref: '/img/icons_map/' + typeSW,
										"iconImageSize": [48, 48],
										"iconImageOffset": [-24, -24],
										"openBalloonOnClick": false

									});
									//myMap1.geoObjects.add(myPlacemark1);
									clusterer.add(myPlacemark1);




								//objectManager.add(myPlacemark1);
							});

							firstPrintCenters=false;

							/*clusterer.options.set({
								gridSize: 80,
								clusterDisableClickZoom: true
							});*/

							myMap1.geoObjects.add(clusterer);


						}
						function filterCenters(map, clusterer) {

							clusterer.removeAll();
							myMap1.geoObjects.removeAll();
							printChosenCity(myMap1, clusterer)
						}
						filterCenters(myMap1, clusterer);

						$('.js-map-filter-brand').on('click',function(){
							$(this).addClass('localities-centers__button-active').siblings().removeClass('localities-centers__button-active');
							filterCenters(myMap1, clusterer, $('#localities-centers__select').val(), $('.localities-centers__button-active.js-map-filter-brand').attr('data-filter'));
						});

						$('#localities-centers__select').on('change',function(){
							filterCenters(myMap1, clusterer, $('#localities-centers__select').val(), $('.localities-centers__button-active.js-map-filter-brand').attr('data-filter'));
						});






					/*}


				}).fail(function (jqXHR, textStatus, errorThrown) {
					console.log("error");
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
				});
*/


				/*
					function getFullData() {
						var resFD = {};
						$.ajax({
							url: '/jsons/mapFullData.json',
							type: 'get',
							async: false,
							dataType:'json',
							success: function(response) {
								resFD = response;
							}
						});

						return resFD;
					}

					const centres = getFullData();
				*/

			});
		}

		if ($('.js-simple-point-map').length > 0) {

			$('.js-simple-point-map').each(function(){
				var coor=$(this).attr('data-coords');


				var a = coor;
				var xy = a.split(',');
				var x = parseFloat(xy[0]);
				var y = parseFloat(xy[1]);


					var myTempMap = new ymaps.Map($(this)[0], {
							center: [x, y],
							zoom: 10
						}),

						myPlacemark2 = new ymaps.Placemark([x, y], {
						}, {
							iconLayout: 'default#image',
							iconImageHref: '/img/icons_map/predstvo_act.svg',
							iconImageSize: [48, 48],
							iconImageOffset: [-24, -24]
						});

					// Добавляем все метки на карту.
					myTempMap.geoObjects
						.add(myPlacemark2);

			});
		}

	});
};

$(function () {
	$('.js-centers-tabs-switcher').on('click', function () {
		$(this).addClass('js-active').siblings().removeClass('js-active');
		$('.centers-tabs__tab').eq($(this).index()).slideDown(400).siblings().slideUp(400);
		var anchor=$(this).attr('data-anchor');
		if(anchor && anchor.length>0){
			history.pushState({}, "", window.location.href.replace(/#.*/g, '')+'#'+anchor);
		}
		else{
			history.pushState({}, "", window.location.href.replace(/#.*/g, ''));
		}
	});
	var hash = $(location).attr('hash');
	if(hash && hash.length>1){
		$('.js-centers-tabs-switcher[data-anchor="'+hash.replace('#', '')+'"]').trigger('click');
	}

	/*
	$(document).on('click', 'a.js-smooth-scroll[href^="#"]', function (event) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $($.attr(this, 'href')).offset().top-10
		}, 500);
	});*/
});
