// const one = document.querySelector('#one');
// const many = document.querySelector('#many');

// function first() {
//     alert(`I am action from first button`);
// }
//
// one.addEventListener('click', first);//название функции, действие которое повесили
// many.addEventListener('click', first);
// many.addEventListener('click', second);
// many.addEventListener('click', hello);

// many.addEventListener('click', function () {
//     first();
//     second();
//     hello();
// });
// function second() {
//     alert(`I am action from second button`);
//
// }
//
// function hello() {
//     alert(`I am action from second button and hello function`);
//
// }
//
//
// function withRemoveListener() {
//     alert(`I am action from first button and i remove after end`);
//     one.removeEventListener('click', withRemoveListener);
//
// }
//
// one.addEventListener('click', withRemoveListener);
// function clickCount() {
//     let clickNumber = 0;
//     let limit = 3;
//     let fake = clickNumber;
//     function increment() {
//         fake += 1;
//         if (fake > limit) {
//             alert('Не балуйся, йди на роботу');
//         }
//         console.log(clickNumber);
//     }
//
//     return increment;
// }
//
// let counter = clickCount();
// console.log(counter);
//
// let firstButton = document.querySelector('#one');
'use strict';

// function classAdd() {
//     this.classList.toggle('bigBtn');
// }

// showThis();

// let one = document.querySelector('#one');

// one.addEventListener('click', classAdd);
// function showEvent(e) {
//     console.log(e);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log(this);
// }
//
// let one = document.querySelector('#one');
// one.addEventListener('click', showEvent);
//
// window.addEventListener('keypress', showEvent);
//
//
// function resizeFont(e) {
//     console.log('this',this);
//     console.log('target',e.target);
//     e.target.classList.toggle('bigText');
//     event.stopPropagation();
//
// }
// // bad practice
// // let listItem = document.querySelectorAll('.item');
// // listItem.forEach(el => el.addEventListener('click', resizeFont));
// // console.log(listItem);
//
// // good
// let list = document.querySelector('.list');
// list.addEventListener('click', resizeFont);
// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);
// console.log(body.children);
// console.log(body.firstChild);
// console.log(body.firstElementChild);
// console.log(body.lastChild);
// console.log(body.lastElementChild);
// const div = body.children[0];
// const p = document.querySelector('.text');
// p.style.fontSize='50px';
// console.log(div);
// console.log(div.children);
// console.log(div.lastElementChild);
// console.log(div.lastChild);
// const p = div.children[1];
// console.log(p);
// console.log(p.previousElementSibling);
// console.log(p.previousSibling);
// console.log(p.nextSibling);
// console.log(p.parentNode);
// console.log(p.style);
// console.log(p.previousElementSibling);
// console.log(p);
// console.log(p.nextElementSibling);
// const text = document.querySelector('.text');
// text.style.fontSize = '50px';
// console.log(text.style);
// const userName = document.querySelector('.name');
// const btn = document.querySelector('#send');
// btn.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log(userName.value);
//     userName.value = ''; //после нажатия кнопки информация в окне обнуляется
// })//////////////////////////////////////////////////////////////////////
/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// // const p = document.querySelector('.categories');
// // console.log(p);
// // let list = document.querySelector('.li');
// // console.log(ul);
// let list = document.querySelector('.categories');
// let listArray = Array.from(list.children);
//
// // console.log(listArray);
// // console.log(listArray[0].firstChild);
// // console.log(listArray[0].firstElementChild.children.length);
// listArray.map(el=>console.log(`Категория = ${el.firstChild.textContent} Количеcтвo лишок ${el.firstElementChild.children.length}`));
/////////////////////////////////////////////////////////////////////////////////////////
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list=document.querySelector('.list');
// let listArray = Array.from(list.children);
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';
// // console.log(list.firstElementChild.style.color='red');
// // console.log(list.lastElementChild.style.color='blue');
// // let list = document.querySelector('.list');
// // const red=()
// // console.log(list.firstElementChild);


/*
  Дан ul склассом .list и массив строк.

  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const list = document.querySelector('.list');
// for (let a of elements) {
//     let item = document.createElement('li');
//     item.textContent = a;
//     list.append(item);
// }
//
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';
//////////////////////// 3 zadanie  //////////////////////////////////////////
/*
  Напишите скрипт для создания списка ul.

  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
///////////////////////////////////////////////////

// let ul = document.createElement('ul');
// document.body.appendChild(ul);
//
// while (true) {
//     let data = prompt("Введите текст ", "");
//
//     if (!data) {
//         break;
//     }
//
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(data));
//     ul.appendChild(li);}
////...............////    2-i ///////////////////////
// const ul=document.createElement('ul');
// const body=document.querySelector('body');
// body.append(ul);
// let text='';
// while (text!=null){
//     text=prompt('enter text');
//     let li=document.createElement('li');
//     li.textContent=text;
//     ul.append(li);
// }
/////////////////////////////////////////////////////////////
/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
// */

// const body = document.querySelector('body');
// //
// function createPostCard() {
//     const div = document.createElement('div');
//     div.classList.add('post');
//
//     const img = document.createElement('img');
//     // const img1 = document.createElement('img');
//     img.classList.add('post__image');
//     img.setAttribute('src', 'https://files.adme.ru/files/news/part_78/780610/9436860-029-1000-54b327ee2e-1484579029.jpg');
//     // img1.setAttribute('src', 'http://via.placeholder.com/400x150');
//     img.setAttribute('alt', 'post image');
//
//     const h2 = document.createElement('h2');
//     h2.classList.add('post__title');
//     h2.textContent = 'Lorem ipsum dolor';
//
//     const p = document.createElement('p');
//     p.classList.add('post__text');
//     p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
//
//     const a = document.createElement('a');
//     a.classList.add('button');
//     a.textContent = 'Read more';
//     a.setAttribute('href', '#');
//     div.append(img, h2, p, a);
//
//    return div
// }
// //
// body.append(createPostCard());
// body.append(createPostCard());
// body.append(createPostCard());
// body.append(createPostCard());
// body.append(createPostCard());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// let root = document.querySelector('#root');
// let frag = document.createDocumentFragment();
//
// let createBoxes = function (num) {
//     for (let i = 0; i < num; i++) {
//         let div = document.createElement('div');
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
//
//         div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//         div.style.width = `${30 + 10 * i}px`;
//         div.style.height = `${30 + 10 * i}px`;
//
//         frag.appendChild(div);
//     }
//     return frag;
//
// };
// // root.append(createBoxes(10));
// root.prepend(createBoxes(10));
// // console.log(frag);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////    8 модуль доп задание ........................................................................................
/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let root = document.querySelector('#root');
// let frag = document.createDocumentFragment();
//
// let createBoxes = function (num) {
//     for (let i = 0; i < num; i++) {
//         let div = document.createElement('div');
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
//
//         div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//         div.style.width = `${30 + 10 * i}px`;
//         div.style.height = `${30 + 10 * i}px`;
//
//         frag.appendChild(div);
//     }
//     return frag;

// };
// root.append(createBoxes(10));
//////////////////////////////////////////////////////////////////////////////////////
// const button = document.querySelector('.button');
// let text = +button.textContent;
// button.addEventListener('click', function (e) {
//     e.preventDefault();
//     button.textContent = text;
//     text += 1;
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////    09.07.18  ///////////////////////////////////////////
//2 ) Написати скрипт який буде рахувати загальну вартість мяса і виводити її на екран
// 3) При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// 4) Завжди має відображатися валюта - гривня
// 5) Загальна сума відображається з копійками (2 знаки після коми)
// 6) В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// 7) Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// 8) В інпуті №2 мін і мах поріг встановлюєте самостійно.
// 9) При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.


// let priceTotal = document.querySelector('.total');
// let form = document.querySelector('.form');
// let span=document.querySelector('.amount');
// function totalPrice() {
//     let priceInput = document.querySelector('#price').value;
//     let quantityInput = document.querySelector('#quantity').value;
//     let sum = priceInput * quantityInput;
//     priceTotal.textContent = `${sum.toFixed(2)} грн.`;
//     span.textContent=quantityInput;
//
//     // console.log(priceInput);
//     // console.log(quantityInput);
// }
// form.addEventListener('input', totalPrice);
// window.addEventListener('DOMContentLoaded',totalPrice);
////////////////////////////////////////////////  2 ///////////////////////////////////////////////////////////////
// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія двома способами:
//     7.1) event
// 7.2) this
// 8) Корисні команди:
//     window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter
// let btns = document.querySelectorAll('.btn');
//
// // let container=document.querySelector('.container');
// function moveBtn(evt) {
//     // let btnH=evt.target.clientHeight;// ниже тоже самое только запись короче через зис
//     let btnH=this.clientHeight;
//     // let btnW=evt.target.clientWidth;
//     let btnW=this.clientWidth;
//     let randomLeft = Math.floor(Math.random() * (window.innerWidth-btnW));
//     let randomTop = Math.floor(Math.random() *( window.innerHeight-btnH));
//     // console.log('Hello');
//     evt.target.style.top = '500px';
//     evt.target.style.left = '130px';
//     // evt.target.style.color = 'red';
//     evt.target.style.top=`${randomTop}px`;
//     evt.target.style.left=`${randomLeft}px`;
//     // console.log(evt.target.clientHeight);
//     // console.log(evt.target.clientWidth);
//     // console.log(Math.floor(Math.random() * window.innerWidth));
//     // console.log(window.innerWidth);
//     // console.log(window.innerHeight);
// }
//
// console.log(btns);
// // container.addEventListener('mouseenter',moveBtn);
// btns.forEach(el => el.addEventListener('mouseenter', moveBtn));// тоже самое только стрелочной функцией
//

//////////////////////////////////////////////////  3 LI //////////////////////////////////////////////////
// let listItems = document.querySelectorAll('.list__item');
// let list = document.querySelector('.list');
// let listArr = Array.from(listItems);
//
// // console.log(listArr);
// function liClick(e) {
//     console.log('click');
//     console.log(listArr.indexOf(e.target) + 1);
//     // listArr.forEach(el=>el.classList.remove('change'));
//     // listArr.forEach(el=>el.classList.contains('change')?el.classList.remove('change'):null);
//
//     e.target.classList.toggle('change');// увеличение шрифта лишек с помощью тогла
//
//     // console.log(e.target);
// }
//
// list.addEventListener('click', liClick);
// //////////////////////////////////////// 4 button //////////////////////////////////////////
// let button = document.querySelector('.button');
//
// function clickButton() {
//     list.classList.toggle('hide');
// }
//
//  button.addEventListener('click', clickButton);
///////////////////////////////////////// 5 задание ///////////////////////////////////
// let arr=[1,2,3,4,5,7];
// let b=10;
// for(let el of arr){
//     b+=el;
//     b=b+el;
// }
// console.log(b);
//////////////////////////////////////  6   /////////////////////////////////////////////////////////

// let vont=document.querySelector('.cont');
// let bodyPaste=document.querySelector('body');
// function gallery(e) {
//     console.log(e.target.dataset.big);
//     let overlay=document.createElement('div');
//     let img=document.createElement('img');
//     img.classList.add('big-img');
//     overlay.classList.add('overlay');
//     img.setAttribute('src',e.target.dataset.big);
//     // img.setAttribute('src','https://placeimg.com/960/480/animals');
//     img.setAttribute('alt','picture');
//     overlay.append(img);
//     bodyPaste.prepend(overlay);
//     overlay.addEventListener('click',function (event) {
//         if(event.target===this){
//             this.remove();
//
//         }
//
//         // e.stopPropagation();
//         // console.log(event.target);
//      })// overlay.remove(this);
// }
// vont.addEventListener('click',gallery);
//////////////////////////////////  7    //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// let galleryArr = [
//     {small: 'https://placeimg.com/480/240/animals', big: 'https://placeimg.com/960/480/animals'},
//     {small: 'https://placeimg.com/480/240/arch', big: 'https://placeimg.com/960/480/arch'},
//     {small: 'https://placeimg.com/480/240/nature', big: 'https://placeimg.com/960/480/nature'},
//     {small: 'https://placeimg.com/480/240/people', big: 'https://placeimg.com/960/480/people'},
//     {small: 'https://placeimg.com/480/240/tech', big: 'https://placeimg.com/960/480/tech'},
//     {small: 'https://placeimg.com/480/240/animals/grayscale', big: 'https://placeimg.com/960/480/animals/grayscale'},
//     {small: 'https://placeimg.com/480/240/tech/sepia', big: 'https://placeimg.com/960/480/tech/sepia'},
//     {small: 'https://placeimg.com/480/240/people/sepia', big: 'https://placeimg.com/960/480/people/sepia'},
//     {small: 'https://placeimg.com/480/240/arch/sepia', big: 'https://placeimg.com/960/480/arch/sepia'},
//     {small: 'https://placeimg.com/480/240/nature/grayscale', big: 'https://placeimg.com/960/480/nature/grayscale'},
// ];
// let vont = document.querySelector('.cont');
// let bodyPaste = document.querySelector('body');
// function gallery(e) {
//     console.log(e.target.dataset.big); // data-big => dataset.big
//     let overlay = document.createElement('div');
//     let img = document.createElement('img');
//     img.classList.add('big-img');
//     overlay.classList.add('overlay');
//     img.setAttribute('src', e.target.dataset.big);
//     img.setAttribute('alt', 'picture');
//     overlay.append(img);
//     bodyPaste.prepend(overlay);
//     overlay.addEventListener('click', function () {
//         if (event.target === this){
//             this.remove();
//         }
//     })
//
// }
// vont.addEventListener('click', gallery);
// создать галлерею через скрипт
// let galleryArr = [
//     {small: 'https://placeimg.com/480/240/animals', big: 'https://placeimg.com/960/480/animals'},
//     {small: 'https://placeimg.com/480/240/arch', big: 'https://placeimg.com/960/480/arch'},
//     {small: 'https://placeimg.com/480/240/nature', big: 'https://placeimg.com/960/480/nature'},
//     {small: 'https://placeimg.com/480/240/people', big: 'https://placeimg.com/960/480/people'},
//     {small: 'https://placeimg.com/480/240/tech', big: 'https://placeimg.com/960/480/tech'},
//     {small: 'https://placeimg.com/480/240/animals/grayscale', big: 'https://placeimg.com/960/480/animals/grayscale'},
//     {small: 'https://placeimg.com/480/240/tech/sepia', big: 'https://placeimg.com/960/480/tech/sepia'},
//     {small: 'https://placeimg.com/480/240/people/sepia', big: 'https://placeimg.com/960/480/people/sepia'},
//     {small: 'https://placeimg.com/480/240/arch/sepia', big: 'https://placeimg.com/960/480/arch/sepia'},
//     {small: 'https://placeimg.com/480/240/nature/grayscale', big: 'https://placeimg.com/960/480/nature/grayscale'},
// ];
// let vontt=document.querySelector('.cont');
// let bodyPaste = document.querySelector('body');
// function createGallery(arr) {
//
//     let fragment = document.createDocumentFragment();
//
//     for(let el of arr){
//         let img = document.createElement('img');
//
//         img.setAttribute('src', el.small);
//         img.setAttribute('alt', 'picture');
//         img.setAttribute('data-big',el.big);
//         fragment.append(img);
//
//         }
// vontt.append(fragment);
//
// }
// function gallery(e) {
//     console.log(e.target.dataset.big); // data-big => dataset.big
//     let overlay = document.createElement('div');
//     let img = document.createElement('img');
//     img.classList.add('big-img');
//     overlay.classList.add('overlay');
//     img.setAttribute('src', e.target.dataset.big);
//     img.setAttribute('alt', 'picture');
//     overlay.append(img);
//     bodyPaste.prepend(overlay);
//     overlay.addEventListener('click', function () {
//         if (event.target === this){
//             this.remove();
//         }
//     })
//
// }
// // createGallery(galleryArr);
// vont.addEventListener('click', gallery);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////2 sposob /////////////////////////////////////////////
// function createTemp(arr) {
//     let result = arr.reduce((acc, el) => acc + `<img src=${el.small} alt='picture' data-big= ${el.big}>`, '');
//     vont.innerHTML = result;
// }
// function gallery(e) {
//     console.log(e.target.dataset.big);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createTemp(arr) {
//     let result = arr.reduce((acc,el)=>acc+`<img src=${el.small} alt='picture' data-big=${el.big}>`,'');
//     vont.innerHTML=result;
// }
// createTemp(galleryArr);
///////////////////////////////////////  10        /////////////////////

// function sayHello() {
//     console.log("Hello!");
// }
//
// // const ID = setTimeout(sayHello, 5000);
// const ID = setInterval(sayHello, 100);
// console.log(ID);
// let btn = document.querySelector('.stop');
// // btn.addEventListener('click', function () {
// //     // clearTimeout(ID);
// //     clearInterval(ID);
// //     console.log('timer stop');
// // });
// // setImmediate();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1) Написати код що запитує в користувача День, Тиждень, рік
// 2) Виводить в консоль день тижня що тоді був
// let date=new Date;
// let date=new Date("19,1976, December");
//
// console.log(date);
// console.log(date.getFullYear());// 2018 год
///////////////////////////////////////////////////////////////////////////////////////////
//????????????????????????????????????????????????????????????????????????????????????????????????
// let days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
// // let neww=[new Date().getDay(1976,12,19)];
// let day = prompt('day');
// let month = prompt('month');
// let year = prompt('year');
// let result = new Date(`${day},${year},${month}`);
// // console.log(result.getDay());
//??????????????????????????????????????????????????????????????????????????????????????????????????????/
///////////////////////////////////////////////////////////////////////////////////////////////////////
// alert([ 'Неділя','Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'][new Date().getDay(19,12,1976)]);

// function next(day) {
//
//     let today = new Date();
//     let today_day = today.getDay();
//
//     day = day.toLowerCase();
//
//     for (let i = 7; i--;) {
//         if (day === days[i]) {
//             day = (i <= today_day) ? (i + 7) : i;
//             break;
//         }
//     }
//
//     let daysUntilNext = day - today_day;
//
//     return new Date().setDate(today.getDate() + daysUntilNext);
//
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// // let today = moment().format('DD, MM, YYYY');
// // let today = moment().isoWeekday(1);
// // console.log(today);
// const options = {
//     weekday: 'long',
//     year    : 'numeric',
//     month   : 'short',
//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit'
// };
// //
// // Україна
// let localeUa = date.toLocaleString('UA-ua', options);
// console.log(localeUa); // понеділок, 19 бер. 2018 р., 17:42
//
// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM
// const dedline=new Date('1, september,2018');
// const dedline=new Date(2018,1, 0,0,9,0);
const deadline = new Date(2018, 10, 29, 1, 0, 0);//год, месяц, число, часы, минуты, секунды
const today = new Date();
let secText = document.querySelector('.seconds');
let minText = document.querySelector('.minutes');
let hoursText = document.querySelector('.hours');
let dayText = document.querySelector('.days');

function timer() {
    const today = new Date();
    // console.log(deadline-today);
    let result = deadline - today;
    let sec = Math.floor(result / 1000);
    let min = sec / 60;
    let hours = min / 60;
    let day = hours / 24;
    sec = sec % 60;
    min = Math.floor(min % 60);
    hours = Math.floor(hours % 24);
    day = Math.floor(day);
    secText.textContent = sec;
    minText.textContent = min;
    hoursText.textContent = hours;
    dayText.textContent = day;
secText.textContent=sec<10?`0${sec}`:sec;
minText.textContent=min<10?`0${min}`:min;
hoursText.textContent=hours<10?`0${hours}`:hours;
dayText.textContent=day<10?`0${day}`:day;
}

setInterval(timer, 1000);
