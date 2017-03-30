var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

//(Задание №1)
/*for (i=0; i < names.length; i++){
	console.log(names[i]);
}*/

//Задание №2
/*names.forEach(function(item){
	console.log(item);
});*/

/*
var newReleases = [
{
	"id": 70111470,
	"title": "Die Hard",
	"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
},
{
	"id": 654356453,
	"title": "Bad Boys",
	"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
},
{
	"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
},
{
	"id": 675465,
	"title": "Fracture",
	"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}
],
videoAndTitlePairs = [];

/*3) выведите новый массив `videoAndTitlePairs` в котором будут содержатся все те же записи что и в `newReleases`,
но только не все поля, а только `id, title`. 
Использовать для перебора функцию `forEach`*/
/*var id;
var title;
newReleases.forEach(function(item){
	id = item.id;
    title = item.title;
	videoAndTitlePairs.push({id, title})

});

console.log(videoAndTitlePairs);
*/





/*4) сделайте задание #3 используя функцию map*/

/*
newReleases.map(function(item) {
	id = item.id;
  title = item.title;
	return videoAndTitlePairs.push({id, title})
});

console.log(videoAndTitlePairs);
*/


/*5) отфилтруйте в новый массив `video` только те видео у который рейти 5? выведите результат объект `id, title`*/



/*var video =[];

videoAndTitlePairs = newReleases.filter(function(item){
	return (item.rating == 5.0) 
});

videoAndTitlePairs.map(function(item) {
	id = item.id;
  title = item.title;
	return video.push({id, title})
});

console.log(video);
*/




/*6) отфильтруйте масив для видео с рейтингом 5.0 и выведите массив их id. Для этого используйте функции filter, map. 
При этом не используйте промежуточных переменных погуглите что такое chain/chainable  что то из этого найдете. 
Ответ должен быть примерно `[42145, 342324, 23123]`*/

/*
var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
            
        ];

objectNew = newReleases

	.filter(function(item){return item.rating == 5.0}) 
	.map(function(item){return item.id})
	
console.log(objectNew)
*/

/* 7) отфильтруйте масив для видео с рейтингом 5.0 и выведите массив их id.Ответ должен быть примерно `[42145, 342324, 23123] 
только список начальных данных теперь вложенный, для решения задач буде достаточно forEach  */

/*
var movieLists = [    
{
	name: "New Releases",
	videos: [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
	]
},
{
	name: "Dramas",
	videos: [
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
	]
}
],
allVideoIdsInMovieLists =[];
movieLists 
.forEach(function(item){item.videos
.forEach(function(item){if (item.rating > 4) allVideoIdsInMovieLists.push(item.id)})})
console.log(allVideoIdsInMovieLists)

*/


/*8 ) опять же задание как в 6), структура как в 7), но уже использовать для решения нужно 2 раза map() и 1 раз concat()  */

/*
var movieLists = [
{
	name: "New Releases",
	videos: [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
	]
},
{
	name: "Dramas",
	videos: [
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
	]
}
];

var newArray=[];
movieLists 
.map(function(item){return item.videos
	.filter(function(item){return (item.rating == 5.0)})
	.map(function(item){return newArray = newArray.concat(item.id)})
})
 
console.log(newArray)
*/


/*
var doska=[];
var strokaChet=[]
var strokaNechet=[]
var black="#";
var white=" ";
for (var k=0; k < 4; k++) {
	for (var i=0;  strokaChet.length < 8; i++) {
		if (strokaChet.length == 0) {
			strokaChet.push(black);
		}
		else {
				if (strokaChet.length % 2 == 0) {
					strokaChet.push(black);
				}
				else 
					strokaChet.push(white);
		}
	}
	for (var i=0;  strokaNechet.length < 8; i++) {
		if (strokaNechet.length == 0) {
			strokaNechet.push(white);
		}
		else {
				if (strokaNechet.length % 2 == 0) {
					strokaNechet.push(white);
				}
				else 
					strokaNechet.push(black);
		}
	}
	doska=strokaChet;
	console.log(doska)
	doska=strokaNechet;
	console.log(doska)
	
}
*/
/*9) достать масивы boxarts где width === 150, результат должен быть вида { id: , title: , boxart: } где в boxart должен быть Url картинок. Использовать map, filter, concat
*/

var movieLists = [
{
	name: "Instant Queue",
	videos : [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxarts": [
		{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
		{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
		],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxarts": [
		{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
		{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

		],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
	]
},
{
	name: "New Releases",
	videos: [
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxarts": [
		{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
		{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
		],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxarts": [
		{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
		{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
		{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
		],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
	]
}
];

/*9) достать масивы boxarts где width === 150, результат должен быть вида { id: , title: , boxart: } где в boxart должен быть Url картинок. Использовать map, filter, concat
*/

/*var newObj={};

var idVar;
var titleVar;
var  outPutArray=[];

movieLists
.map(function(movieList) {return movieList.videos
	.map(function(video) {return video.boxarts
		.filter(function(boxart) {return boxart.width === 150})
		.map(function(boxart) {return outPutArray.push({id: video.id, title: video.title, boxart: boxart.url})})
	})
})
console.log(outPutArray);



*/


/*10) Достать объект с самой большой площадью картинки. Использовать forEach
*/

/*boxarts = [
{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

var squareBoxart;
var squareLatestBoxart=0;
var boxartMaxSquare;
boxarts
.forEach(function(boxart){
	squareBoxart = boxart.width * boxart.height
	if (squareBoxart > squareLatestBoxart) {
		boxartMaxSquare = boxart
		squareLatestBoxart = squareBoxart
	}
})
console.log(boxartMaxSquare)
*/







/*[9:20]  
11) Достать максимальный рейтинг. Использовать reduce()*/
/*var ratings = [2,3,1,4,5];
var maxItem;
ratings
.reduce(function(nowItem,nextItem) {
	
	if (nowItem > nextItem) {
		return maxItem = nowItem;

	}
	else return maxItem = nextItem
})
console.log(maxItem)*/

/*[9:21]  
12) Вернуть url самой большой по площади картинки. reduce()*/

/*
var boxarts = [
{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];


var squareBoxart;
var maxSquareImg;
var lastSquare;
var url;

maxSquareImg = boxarts
.reduce(function(itemNow,itemNext) {
	if ((itemNow.width * itemNow.height) > (itemNext.width * itemNext.height)) {
		return maxSquareImg = itemNow
	}
	else {return  maxSquareImg = itemNext}
})
url = maxSquareImg.url
console.log({url})

*/

/*[9:24]  
13) переделать масив объектов в 1 объект, который будет вместо ключа id, а значение будет title. Использовать reduce()*/

/*
var videos = [
{
	"id": 65432445,
	"title": "The Chamber"
},
{
	"id": 675465,
	"title": "Fracture"
},
{
	"id": 70111470,
	"title": "Die Hard"
},
{
	"id": 654356453,
	"title": "Bad Boys"
}
];
var newObj ={}
var i = 0;



	videos
.reduce(function(itemNow,itemNext){

	newObj[itemNow.id] = itemNow.title;
	newObj[itemNext.id] = itemNext.title;
	
	return newObj
	
})
console.log(newObj)*/



/*

Сделайте страницу, которая выводит «Я – JavaScript!».

Создайте её на диске, откройте в браузере, убедитесь, что всё работает.*/

// alert("Я – JavaScript!");


/*
Объявите две переменные: admin и name.
Запишите в name строку "Василий".
Скопируйте значение из name в admin.
Выведите admin (должно вывести «Василий»).*/

// var admin, name;

// name = "Василий";
// admin = name;

// alert(admin);



/*Создайте переменную для названия нашей планеты и присвойте ей значение "Земля".
 Правильное имя выберите сами.
Создайте переменную для имени посетителя со значением "Петя". 
Имя также на ваш вкус.*/

// var earth = "Земля";
// var nameUser = "Петя";



/*Простая страница
важность: 4
Создайте страницу, которая спрашивает имя и выводит его.
*/

/*function inputNameForOutput (){
	var userName = prompt("ВВедите Ваше имя", "");
	alert("Приветствуем Вас здесь  " + userName + " !");
};
inputNameForOutput();*/





/*Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».

Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
Блок-схема:*/

/*(function questionUserOficialNameJS(){
	var answer = prompt("Каково «официальное» название JavaScript?", "");
	if (answer == "ECMAScript") {
		alert("Верно");
	}
	else {
		alert("Не знаете? «ECMAScript»!");
	}
}());
*/


/*
Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена 
(escape) – выводить «Вход отменён», если вводит что-то другое – 
«Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», 
то выводить «Добро пожаловать!», иначе – «Пароль неверен», 
при отмене – «Вход отменён».
Блок-схема:*/

/*(function questionUserLoginAndSecurity(){
	var answerLogin = prompt("Введите логин", "");
	if (answerLogin == "Админ") {
		var inputSecurity = prompt("Введите пароль", "");
		if (inputSecurity == "Чёрный Властелин") {
			alert('Добро пожаловать!');
		}
		else {
			if (inputSecurity == null) {
				alert('Вход отменен');
			}
			else {
				alert('пароль неверен');
			}		
		}
	}
	else {
		if (answerLogin == null) {
			alert("Вход отменён");
		}
		else {
			alert("Я Вас не знаю");
		}
	}
	
}());
*/


/*
Перепишите if с использованием оператора '?':
*/


/*var a,b;
result = (a + b < 4) ?   'Мало' : 'Много';

console.log(result);*/


/*Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости – оформляйте код в несколько строк.
*/
/*var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

var login;
var message = (login == 'Вася') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
*/

/*Напишите условие if для проверки того факта, что переменная age 
находится между 14 и 90 включительно.

«Включительно» означает, что концы промежутка включены, 
то есть age может быть равна 14 или 90.*/

/*var userAge = prompt("Cколько Вам лет");
if ( userAge <= 90 && userAge >= 14 ) {
	console.log("Вам " + userAge + " лет");
}*/



/*Напишите условие if для проверки того факта, 
что age НЕ находится между 14 и 90 включительно.

Сделайте два варианта условия: первый с использованием оператора НЕ !,
 второй – без этого оператора.*/

/*var userAge = prompt("Cколько Вам лет");
if (  !(userAge<= 90 && userAge >= 14) ) {
	console.log("Вам " + userAge + " лет");
}
*/


/*var userAge = prompt("Cколько Вам лет");
if ((userAge < 14) || (userAge > 90)) {
	console.log("Вам " + userAge + " лет");
}*/


/*При помощи цикла for выведите чётные числа от 2 до 10.*/


/*for (var i=2; i<=10; i++) {
	if ( (i % 2)== 0) {
		console.log(i)
	}
}*/


/*
Перепишите код, заменив цикл for на while, без изменения поведения цикла.

 for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}*/
/*
var i=0;

while(i<3) {
	console.log( "номер " + i + "!" );
	i++;
}*/



/*
Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, 
большее 100, либо не нажмёт кнопку Cancel (ESC).

Предполагается, что посетитель вводит только числа. 
Предусматривать обработку нечисловых строк в этой задаче необязательно.*/


// var i;
// for (;(i!=100) ;i = +prompt("ВВЕДИТЕ ЧИСЛО")) {
	
// }