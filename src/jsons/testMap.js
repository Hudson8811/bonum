ymaps.ready(() => {
    // myMap1.geoObjects.removeAll();
    // Массив со всеми городами, сортированный по алфавиту
    const cities = [{
            "CityID": "2",
            "Name": "Ростов-на-Дону",
            "Name_EN": "Rostov-on-Don"
        },
        {
            "CityID": "3",
            "Name": "Москва",
            "Name_EN": "Moscow"
        },
        {
            "CityID": "4",
            "Name": "Краснодар",
            "Name_EN": "Krasnodar"
        },
        {
            "CityID": "21",
            "Name": "Санкт-Петербург",
            "Name_EN": "St. Petersburg"
        },
        {
            "CityID": "28",
            "Name": "Гамбург (Германия)",
            "Name_EN": "Hamburg"
        },
        {
            "CityID": "38",
            "Name": "Тюмень",
            "Name_EN": "Tyumen"
        },
        {
            "CityID": "39",
            "Name": "Казань",
            "Name_EN": "Kazan"
        },
        {
            "CityID": "40",
            "Name": "Великий Новгород",
            "Name_EN": "Veliky Novgorod"
        },
        {
            "CityID": "41",
            "Name": "Петрозаводск",
            "Name_EN": "Petrozavodsk"
        },
        {
            "CityID": "42",
            "Name": "Выборг",
            "Name_EN": "Vyborg"
        },
        {
            "CityID": "43",
            "Name": "Екатеринбург",
            "Name_EN": "Yekaterinburg"
        },
        {
            "CityID": "44",
            "Name": "Аксай",
            "Name_EN": "Aksay"
        },
        {
            "CityID": "45",
            "Name": "Вологда",
            "Name_EN": "Vologda"
        },
        {
            "CityID": "46",
            "Name": "Солнечногорск",
            "Name_EN": "Solnechnogorsk"
        },
        {
            "CityID": "47",
            "Name": "Набережные Челны",
            "Name_EN": "Naberezhnye Chelny"
        },
        {
            "CityID": "48",
            "Name": "Волгоград",
            "Name_EN": "Volgograd"
        },
        {
            "CityID": "49",
            "Name": "Минеральные воды",
            "Name_EN": "Mineralnye Vody"
        },
        {
            "CityID": "50",
            "Name": "Ярославль",
            "Name_EN": "Yaroslavl"
        },
        {
            "CityID": "51",
            "Name": "Дзержинск",
            "Name_EN": "Dzerzhinsk"
        },
        {
            "CityID": "52",
            "Name": "Рязань",
            "Name_EN": "Ryazan"
        },
        {
            "CityID": "53",
            "Name": "Самара",
            "Name_EN": "Samara"
        },
        {
            "CityID": "54",
            "Name": "Новосибирск",
            "Name_EN": "Novosibirsk"
        },
        {
            "CityID": "55",
            "Name": "Омск",
            "Name_EN": "Omsk"
        },
        {
            "CityID": "56",
            "Name": "Голицино",
            "Name_EN": "Golitsyno"
        },
        {
            "CityID": "57",
            "Name": "Сочи",
            "Name_EN": "Sochi"
        },
        {
            "CityID": "58",
            "Name": "Домодедово",
            "Name_EN": "Domodedovo"
        },
        {
            "CityID": "59",
            "Name": "Люберцы",
            "Name_EN": "Lyubertsy"
        },
        {
            "CityID": "61",
            "Name": "Красноярск",
            "Name_EN": "Krasnoyarsk"
        },
        {
            "CityID": "62",
            "Name": "Нижний Новгород",
            "Name_EN": "Nizhny Novgorod"
        },
        {
            "CityID": "63",
            "Name": "Хабаровск",
            "Name_EN": "Khabarovsk"
        },
        {
            "CityID": "64",
            "Name": "Уфа",
            "Name_EN": "Ufa"
        },
        {
            "CityID": "65",
            "Name": "Белово",
            "Name_EN": "Belovo"
        },
        {
            "CityID": "66",
            "Name": "Братск",
            "Name_EN": "Bratsk"
        },
        {
            "CityID": "68",
            "Name": "Липецк",
            "Name_EN": "Lipetsk"
        },
        {
            "CityID": "69",
            "Name": "Губкин",
            "Name_EN": "Gubkin"
        },
        {
            "CityID": "70",
            "Name": "Чувашия",
            "Name_EN": "Chuvashia"
        },
        {
            "CityID": "71",
            "Name": "Калининград",
            "Name_EN": "Kaliningrad"
        },
        {
            "CityID": "72",
            "Name": "Химки",
            "Name_EN": "Khimki"
        },
        {
            "CityID": "73",
            "Name": "Тверь",
            "Name_EN": "Tver"
        },
        {
            "CityID": "74",
            "Name": "Киров",
            "Name_EN": "Kirov"
        },
        {
            "CityID": "75",
            "Name": "Павловский Посад",
            "Name_EN": "Pavlovsky Posad"
        },
        {
            "CityID": "76",
            "Name": "Сургут",
            "Name_EN": "Surgut"
        },
        {
            "CityID": "77",
            "Name": "Барнаул",
            "Name_EN": "Barnaul"
        },
        {
            "CityID": "78",
            "Name": "Челябинск",
            "Name_EN": "Chelyabinsk"
        },
        {
            "CityID": "79",
            "Name": "Архангельск",
            "Name_EN": "Arkhangelsk"
        },
        {
            "CityID": "80",
            "Name": "Пермь",
            "Name_EN": "Perm"
        },
        {
            "CityID": "81",
            "Name": "Великие Луки",
            "Name_EN": "Velikiye Luki"
        },
        {
            "CityID": "82",
            "Name": "Боровичи",
            "Name_EN": "Borovichi"
        },
        {
            "CityID": "83",
            "Name": "Владивосток",
            "Name_EN": "Vladivostok"
        },
        {
            "CityID": "84",
            "Name": "Оренбург",
            "Name_EN": "Orenburg"
        },
        {
            "CityID": "85",
            "Name": "Орел",
            "Name_EN": "Orel"
        },
        {
            "CityID": "86",
            "Name": "Зеленоград",
            "Name_EN": "Zelenograd"
        },
        {
            "CityID": "88",
            "Name": "Котельники",
            "Name_EN": "Kotelniki"
        },
        {
            "CityID": "89",
            "Name": "Мытищи",
            "Name_EN": "Mytishchi"
        },
        {
            "CityID": "90",
            "Name": "Иркутск",
            "Name_EN": "Irkutsk"
        },
        {
            "CityID": "91",
            "Name": "Артем",
            "Name_EN": "Artyom"
        },
        {
            "CityID": "92",
            "Name": "Киев",
            "Name_EN": "Kiev"
        },
        {
            "CityID": "93",
            "Name": "Одесса",
            "Name_EN": "Odessa"
        },
        {
            "CityID": "94",
            "Name": "Харьков",
            "Name_EN": "Kharkiv"
        },
        {
            "CityID": "95",
            "Name": "Минск",
            "Name_EN": "Minsk"
        },
        {
            "CityID": "96",
            "Name": "Алматы",
            "Name_EN": "Almaty"
        },
        {
            "CityID": "97",
            "Name": "Кишинев",
            "Name_EN": "Chisinau"
        },
        {
            "CityID": "98",
            "Name": "Балашиха",
            "Name_EN": "Balashikha"
        },
        {
            "CityID": "99",
            "Name": "Голицино",
            "Name_EN": "Golitsyno"
        },
        {
            "CityID": "101",
            "Name": "Белгород",
            "Name_EN": "Belgorod"
        },
        {
            "CityID": "102",
            "Name": "Брянск",
            "Name_EN": "Bryansk"
        },
        {
            "CityID": "103",
            "Name": "Кострома",
            "Name_EN": "Kostroma"
        },
        {
            "CityID": "104",
            "Name": "Курск",
            "Name_EN": "Kursk"
        },
        {
            "CityID": "105",
            "Name": "Тула",
            "Name_EN": "Tula"
        },
        {
            "CityID": "106",
            "Name": "Ясногорск",
            "Name_EN": "Yasnogorsk"
        },
        {
            "CityID": "107",
            "Name": "Сыктывкар",
            "Name_EN": "Syktyvkar"
        },
        {
            "CityID": "108",
            "Name": "Черняховск",
            "Name_EN": "Chernyakhovsk"
        },
        {
            "CityID": "109",
            "Name": "Каменск-Шахтинск",
            "Name_EN": "Kamensk-Shakhtinsk"
        },
        {
            "CityID": "110",
            "Name": "Белореченск",
            "Name_EN": "Belorechensk"
        },
        {
            "CityID": "111",
            "Name": "Черкеск",
            "Name_EN": "Cherkessk"
        },
        {
            "CityID": "112",
            "Name": "Волжский",
            "Name_EN": "Volzhsky"
        },
        {
            "CityID": "113",
            "Name": "Саратов",
            "Name_EN": "Saratov"
        },
        {
            "CityID": "114",
            "Name": "Тольятти",
            "Name_EN": "Tolyatti"
        },
        {
            "CityID": "115",
            "Name": "Волжск",
            "Name_EN": "Volzhsk"
        },
        {
            "CityID": "116",
            "Name": "Юрюзань",
            "Name_EN": "Yuryuzan"
        },
        {
            "CityID": "117",
            "Name": "Абакан",
            "Name_EN": "Abakan"
        },
        {
            "CityID": "118",
            "Name": "Бийск",
            "Name_EN": "Biysk"
        },
        {
            "CityID": "119",
            "Name": "Новокузнецк",
            "Name_EN": "Novokuznetsk"
        },
        {
            "CityID": "120",
            "Name": "Комсомольск-на-Амуре",
            "Name_EN": "Komsomolsk-on-Amur"
        },
        {
            "CityID": "121",
            "Name": "Симферополь",
            "Name_EN": "Simferopol"
        },
        {
            "CityID": "122",
            "Name": "Днепропетровск",
            "Name_EN": "Dnipropetrovsk"
        },
        {
            "CityID": "123",
            "Name": "Георгиевск",
            "Name_EN": "Georgiyevsk"
        },
        {
            "CityID": "124",
            "Name": "Чебоксары",
            "Name_EN": "Cheboksary"
        },
        {
            "CityID": "125",
            "Name": "Готсомель",
            "Name_EN": "Gotsomel"
        },
        {
            "CityID": "126",
            "Name": "Николаев",
            "Name_EN": "Nikolaev"
        },
        {
            "CityID": "127",
            "Name": "Лиски",
            "Name_EN": "Liski"
        },
        {
            "CityID": "128",
            "Name": "Пушкин",
            "Name_EN": "Pushkin"
        },
        {
            "CityID": "129",
            "Name": "Сертолово",
            "Name_EN": "Sertolovo"
        },
        {
            "CityID": "130",
            "Name": "Смоленск",
            "Name_EN": "Smolensk"
        },
        {
            "CityID": "131",
            "Name": "Кемерово",
            "Name_EN": "Kemerovo"
        },
        {
            "CityID": "132",
            "Name": "Псков",
            "Name_EN": "Pskov"
        },
        {
            "CityID": "133",
            "Name": "Старый Оскол",
            "Name_EN": "Stariy Oskol"
        },
        {
            "CityID": "134",
            "Name": "Ставрополь",
            "Name_EN": "Stavropol"
        },
        {
            "CityID": "135",
            "Name": "Шушары",
            "Name_EN": "Shushary"
        },
        {
            "CityID": "136",
            "Name": "Березовский",
            "Name_EN": "Berezovsky"
        },
        {
            "CityID": "137",
            "Name": "Горячий Ключ",
            "Name_EN": "Goryachiy Klyuch"
        },
        {
            "CityID": "138",
            "Name": "Воронеж",
            "Name_EN": "Voronezh"
        },
        {
            "CityID": "139",
            "Name": "Ульяновск",
            "Name_EN": "Ulyanovsk"
        },
        {
            "CityID": "140",
            "Name": "Долгопрудный",
            "Name_EN": "Dolgoprudny"
        },
        {
            "CityID": "141",
            "Name": "Кола",
            "Name_EN": "Kola"
        },
        {
            "CityID": "142",
            "Name": "Орехово-Зуево",
            "Name_EN": "Orekhovo-Zuyevo"
        },
        {
            "CityID": "143",
            "Name": "Истра",
            "Name_EN": "Istra"
        },
        {
            "CityID": "144",
            "Name": "Благовещенск",
            "Name_EN": "Blagoveshchensk"
        },
        {
            "CityID": "145",
            "Name": "Пенза",
            "Name_EN": "Penza"
        },
        {
            "CityID": "146",
            "Name": "Улан-Удэ",
            "Name_EN": "Ulan-Ude"
        },
        {
            "CityID": "147",
            "Name": "Курган",
            "Name_EN": "Kurgan"
        },
        {
            "CityID": "148",
            "Name": "Ижевск",
            "Name_EN": "Izhevsk"
        },
        {
            "CityID": "149",
            "Name": "Котлас",
            "Name_EN": "Kotlas"
        },
        {
            "CityID": "150",
            "Name": "Наро-Фоминск",
            "Name_EN": "Naro-Fominsk"
        },
        {
            "CityID": "151",
            "Name": "Кипарисово",
            "Name_EN": "Kiparisovo"
        },
        {
            "CityID": "152",
            "Name": "Елабуга",
            "Name_EN": "Elabuga"
        },
        {
            "CityID": "153",
            "Name": "Волжский",
            "Name_EN": "Volzhsky"
        },
        {
            "CityID": "154",
            "Name": "Новый Уренгой",
            "Name_EN": "New Urengoy"
        },
        {
            "CityID": "155",
            "Name": "Владимир",
            "Name_EN": "Vladimir"
        },
        {
            "CityID": "156",
            "Name": "Магадан",
            "Name_EN": "Magadan"
        },
        {
            "CityID": "157",
            "Name": "Батайск",
            "Name_EN": "Bataysk"
        },
        {
            "CityID": "158",
            "Name": "Калуга",
            "Name_EN": "kaluga"
        },
        {
            "CityID": "159",
            "Name": "Чита",
            "Name_EN": "Chita"
        }
        ,
        {
            "CityID": "160",
            "Name": "Чулково",
            "Name_EN": "Chulkovo"
        },
        {
            "CityID": "161",
            "Name": "Красногорск",
            "Name_EN": "Krasnogorsk"
        },
        {
            "CityID": "162",
            "Name": "Мурманск",
            "Name_EN": "Murmansk"
        },
        {
            "CityID": "163",
            "Name": "Нефтекамск",
            "Name_EN": "Neftekamsk"
        },
        {
            "CityID": "164",
            "Name": "Бурятия",
            "Name_EN": "Buryatia"
        },
        {
            "CityID": "165",
            "Name": "Томск",
            "Name_EN": "Tomsk"
        },
        {
            "CityID": "166",
            "Name": "Южно-Сахалинск",
            "Name_EN": "Yzhno-Sahalinsk"
        },
        {
            "CityID": "167",
            "Name": "Якутск",
            "Name_EN": "Yakutsk"
        },
        {
            "CityID": "168",
            "Name": "Адлер",
            "Name_EN": "Adler"
        },
        {
            "CityID": "169",
            "Name": "Черноморский",
            "Name_EN": "Chernomorskiy"
        },
        {
            "CityID": "170",
            "Name": "Алексеевка",
            "Name_EN": "Alekseevka"
        },
        {
            "CityID": "171",
            "Name": "Федоровское",
            "Name_EN": "Fedorovskoe"
        },
        {
            "CityID": "172",
            "Name": "Кстово",
            "Name_EN": "Kstovo"
        },
        {
            "CityID": "173",
            "Name": "Подольск",
            "Name_EN": "Podolsk"
        },
        {
            "CityID": "174",
            "Name": "Дружнино",
            "Name_EN": "Druzhnino"
        },
        {
            "CityID": "175",
            "Name": "Чигири",
            "Name_EN": "Chigiri"
        },
        {
            "CityID": "176",
            "Name": "Верхнеблаговещенское",
            "Name_EN": "Verhblag"
        },
        {
            "CityID": "177",
            "Name": "Новониколаевка",
            "Name_EN": "Novonikolaevka"
        },
        {
            "CityID": "178",
            "Name": "Ногинск",
            "Name_EN": "Noginsk"
        },
        {
            "CityID": "179",
            "Name": "Ленсоветский",
            "Name_EN": "Lensovetskiy"
        },
        {
            "CityID": "180",
            "Name": "Парнас",
            "Name_EN": "Parnas"
        },
        {
            "CityID": "181",
            "Name": "Песочный",
            "Name_EN": "Pesochniy"
        },
        {
            "CityID": "182",
            "Name": "Свердловск",
            "Name_EN": "Sverdlovsk"
        },
        {
            "CityID": "183",
            "Name": "Башкортостан",
            "Name_EN": "Bashkortostan"
        },
        {
            "CityID": "184",
            "Name": "Угловое",
            "Name_EN": "Uglovoe"
        }
    ].sort(function (a, b) {
        if (a["Name"] < b["Name"]) {
            return -1;
        }
        if (a["Name"] > b["Name"]) {
            return 1;
        }
        return 0;
    })

    // Все типы сервисных центров
    const centerTypes = [
        {
            "TypeID": "56",
            "Name": "Сервисные центры рекомендованные BONUM",
            "Name_EN": "Service center recommended by BONUM",
            "Icon": "bc4fd2810c06ef240dad070869da429a.png"
        },
        /*{
            "TypeID": "43",
            "Name": "Сервисные центры BPW",
            "Name_EN": "BPW guarantee service centers",
            "Icon": "4d63bb77b81728b3224be2cffa6b618e.png"
        },*/
        /*{
            "TypeID": "47",
            "Name": "Собственный сервисный центр",
            "Name_EN": "",
            "Icon": "ab9b15095314b90a55ecd6a0400b287f.png"
        },*/
        /*{
            "TypeID": "51",
            "Name": "Авторизированные Магазины WABCO",
            "Name_EN": "The authorized Wabco Stores",
            "Icon": "0a4bf8c937c88c46ca90033a8cb6fe87.png"
        },*/
        {
            "TypeID": "52",
            "Name": "Сервисные центры WABCO с поддержкой гарантии",
            "Name_EN": "Wabco service centers  with the guarantee support",
            "Icon": "0eb6716e7a07eb91257948d25107a042.png"
        },
        /*{
            "TypeID": "53",
            "Name": "Сервисные центры Wabco без поддержки  гарантии",
            "Name_EN": "Wabco service centers  without guarantee support",
            "Icon": "74309954a9ccade8880818270461e5aa.png"
        },*/
        {
            "TypeID": "54",
            "Name": "Сервисные центры BPW",
            "Name_EN": "BPW service stations",
            "Icon": "e0dde53eef9073c42cdc5d368fb67df0.png"
        },
        {
            "TypeID": "55",
            "Name": "Сервисные центры SAF",
            "Name_EN": "SAF service stations",
            "Icon": "9ee0d78f931537400d37384a015b2e52.png"
        }
    ]
    function getFullData() {
        var resFD = {};
        $.ajax({
            url: '/mapFullData.php',
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
    //console.log(centres);
    // Массив со всеми сервисами в РФ

    const btn = document.getElementById('findService');
    const citySelectEl = document.getElementById('citySelect');
    const typeOfStationSelect = document.getElementById('stationSelect');
    const contactsDiv = document.querySelector('.map-wrapper__services-list');

    fillServiceSelects(cities, centerTypes)

    btn.onclick = () => {
        myMap1.geoObjects.removeAll();

        if (citySelectEl.value !== 'false' || typeOfStationSelect.value !== 'false') {
            const chosenCity = citySelectEl.value
            const chosenCenterType = typeOfStationSelect.value
            printChosenCity(chosenCity, chosenCenterType)
        } else {
            init()
        }
    }

    function formatTelforHref(tel) {
        return tel
            .replaceAll('-', '')
            .replaceAll(' ', '')
            .replace('(', '')
            .replace(')', '')
            .replace('8', '7')
    }

    function fillServiceSelects(citiesArray, centerTypesArray) {

        citiesArray.forEach(city => {
            citySelectEl.insertAdjacentHTML('beforeend', `
            <option value="${city.CityID}">${city.Name}</option>
        `)
        });

        centerTypesArray.forEach(center => {
            typeOfStationSelect.insertAdjacentHTML('beforeend', `
            <option value="${center.TypeID}">${center.Name}</option>
        `)
        });
    }

    function printChosenCity(city, centerType) {
        const centersOfChosenCity = []
        const centersOfChosenType = []
        let centersToPrint = []
        contactsDiv.innerHTML = ''

        centres.forEach(center => {
            if (city == 'false') {
                centersOfChosenCity.push(center)
            } else {
                if (center.CityID == city) {
                    centersOfChosenCity.push(center)
                }    
            }
            
        })

        if (!centersOfChosenCity.length) {
            contactsDiv.innerHTML = printServiceInfo()
            return;
        }


        if (centerType !== "false") {
            centersToPrint = centersOfChosenCity.filter(center => center.TypeID === centerType)
        } else {
            centersToPrint = [...centersOfChosenCity]
        }

        if (centersToPrint.length) {
            centersToPrint.forEach(centerToPrint => {
                let centerType = centerTypes.find(center => center.TypeID === centerToPrint.TypeID)
                let icon = centerType["Icon"]
                let centerName = centerType["Name"]
                contactsDiv.insertAdjacentHTML('beforeend', printServiceInfo(centerToPrint))
                createPlacemark(centerToPrint, icon, centerName)
            })
        } else {
            contactsDiv.innerHTML = printServiceInfo()
        }

    }

    function createPlacemark(center, thumb, centerTypeName) {
        myMap1.geoObjects.add(new ymaps.Placemark(center["Coords"].split(','), {
            content: `${center["Name"]}`,
            balloonContent: `<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/${thumb}" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>${center["Name"]}</b><br>${centerTypeName}<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=141">подробная информация о центре</a></div></td></tr></table>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: `/assets/img/centres-type/${thumb}`,
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        }));
    }

    function printServiceInfo(center = false) {

        if (!center) {
            return `<h5 class="map-wrapper__service-name">В указанном городе нет станций выбранного типа.</h5>`;
        }

        const phoneIcon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM19 12H21C21 7.03 16.97 3 12 3V5C15.87 5 19 8.13 19 12ZM15 12H17C17 9.24 14.76 7 12 7V9C13.66 9 15 10.34 15 12Z"
            fill="#2E2E2E" />
        </svg>`;
        const siteIcon = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
            fill="#333333" />
        </svg>`;

        const $siteEl = center["Link"] ? `<li class="d-flex" id="serviceLink"><div style="min-width:18px;display:inline-block;">${siteIcon}</div><a href="${center['Link']}" target="_blank">
        ${center["Link"]}</a></li>` : ""

        return `
        <h5 class="map-wrapper__service-name">${center["Name"]}</h5>
        <ul class="p-0 map-wrapper__service-contacts">
            <li class="d-flex" id="servicePhone"><div style="min-width:18px;display:inline-block;">${phoneIcon}</div><div class="phone-numb">${center["TextFull"]}</div></li>
            ${$siteEl}
        </ul>
    `
    }
    function init() {
        $.ajax({
            url: '/map.php',
            type: 'get',
            success: function(response) {
                var yyy = $.parseJSON(response);
                $.each(yyy, function( key, value ) {
                    var typeSW,titleSW;
                    /*if (value.type == 43) {
                        typeSW = '4d63bb77b81728b3224be2cffa6b618e.png';
                        titleSW = 'Гарантийные сервисные центры BPW';
                    }
                    if (value.type == 47) {
                        typeSW = 'ab9b15095314b90a55ecd6a0400b287f.png';
                        titleSW = 'Собственный сервисный центр';
                    }
                    if (value.type == 51) {
                        typeSW = '0a4bf8c937c88c46ca90033a8cb6fe87.png';
                        titleSW = 'Авторизированные Магазины WABCO';
                    }*/
                    if (value.type == 52) {
                        typeSW = '0eb6716e7a07eb91257948d25107a042.png';
                        titleSW = 'Сервисные центры WABCO с поддержкой гарантии';
                    }
                    /*if (value.type == 53) {
                        typeSW = '74309954a9ccade8880818270461e5aa.png';
                        titleSW = 'Сервисные центры WABCO без поддержки  гарантии';
                    }*/
                    if (value.type == 54) {
                        typeSW = 'e0dde53eef9073c42cdc5d368fb67df0.png';
                        titleSW = 'Сервисные центры BPW';
                    }
                    if (value.type == 55) {
                        typeSW = '9ee0d78f931537400d37384a015b2e52.png';
                        titleSW = 'Сервисные центры SAF';
                    }
                    if (value.type == 56) {
                        typeSW = 'bc4fd2810c06ef240dad070869da429a.png';
                        titleSW = 'Сервисные центры рекомендованные BONUM';
                    }
                    var a = value.coords;
                    var xy = a.split(',');
                    var x = parseFloat(xy[0]);
                    var y = parseFloat(xy[1]);
                    myPlacemark1 = new ymaps.Placemark([x,y], {
                        content: value.title,
                        balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/'+typeSW+'" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>'+value.title+'</b><br>'+titleSW+'<br></td></tr></table>'
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: '/assets/img/centres-type/'+typeSW,
                        iconImageSize: [30, 48],
                        iconImageOffset: [-15, -48],
            
                    });
                    myMap1.geoObjects.add(myPlacemark1);
                });
            }
        });
    }
});