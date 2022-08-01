class Swapi {
    constructor(){}

    // page = 0;

    async getPeople (page) {
        const result = await fetch('https://swapi.dev/api/people/?page=' + page);
        const data = await result.json();
        // this.page = page;
        return data;
    }

    async getPlanets (page) {
        const result = await fetch('https://swapi.dev/api/planets/?page=' + page);
        const data = await result.json();
        return data;
    }
}

const swapiApi = new Swapi();

swapiApi
    .getPeople(2)
    .then((res) => console.log(res));

swapiApi
    .getPlanets(4)
    .then((res) => console.log(res));






/**
 *  * ******************************************************************************************
 * Async await
 */
// const fn = () => {};
// function fn2 () {};

// const fn3 = async () => {};
// async function fn4 () {};

// async function getData () {
//     console.log('start');
//     await fetch('https://swapi.dev/api/people/?page=1');
//     await fetch('https://swapi.dev/api/people/?page=2');
//     await fetch('https://swapi.dev/api/people/?page=3');
//     console.log('end');
// };

// console.log('1');
// getData();
// console.log('2');


/**
 *  * ******************************************************************************************
.reject()
.resolve()
 */
// fetch('https://swapi.dev/api/people/?page=1')
//     .then(() => {
//         // check data
//         // return Promise.reject(new Error('data is invalid'));
//         return Promise.resolve('Correct');
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .then(() => {
//         console.log('is OK');
//     })
//     .catch((err) => {
//         console.error(err)
//     });



// const getData1 = fetch('https://swapi.dev/api/people/?page=1');
// const getData2 = fetch('https://swapi.dev/api/people/?page=2');
// const getData3 = fetch('https://swapi.dev/api/people/?page=3');


// Promise.any([getData1, getData2, getData3])
//     .then((result) => {
//         console.log('all promises are done!');
//         console.log(result);
//     })
//     .catch((err) => {
//         console.error(err);
//     })










/**
 * ******************************************************************************************
 * Promise (light):
 */

// console.log('start');


// const getFilePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // if ()
//         resolve(123);
//         // else
//         // reject( new Error('Error!!!') );
//     }, 5000);
// });


// getFilePromise
//     .then((res) => {
//         console.log(res);
//     })
//     .then(() => {
//         console.log('fetch 2');
//     })
//     .catch((err) => {
//         console.error(err);
//     })
//     .catch(() => {
//         // second catch ignore!
//         console.error('Error 2');
//     })
//     .finally(() => {
//         console.log('finally');
//     });

// console.log('other actions');

/**
 * ******************************************************************************************
 * Bad code::
 */
// const getFile = () => {
//     let i = Date.now();
//     while(i > Date.now() - 5000) {}
// };
// getFile();

/**
 * ******************************************************************************************
 * Storage Event:
 */


// window.addEventListener('storage', (event) => {
//     if (event.key === 'avatar') {
//         document.body.style.backgroundColor = 'red';
//     }
// });

/**
 * ******************************************************************************************
 * Storage:
 */

// window.localStorage;
// window.sessionStorage;

// localStorage;
// sessionStorage;

/**
.length - количество
.key(<n>) - возврат ключа под индексом n
.getItem(<key>) - получение значения по ключу key
.setItem(<key>, <value>) - установка значения value под ключ key
.removeItem(<key>)- удаление значения по ключу key
.clear() - очистить ВСË
*/

// localStorage.setItem('my_key_1', 'my personal data1');
// localStorage.setItem('my_key_2', 'my personal data2');
// localStorage.setItem('my_key_3', 'my personal data3');
// localStorage.setItem('my_key_4', 'my personal data4');

// console.log( localStorage.length );
// localStorage.clear();
// console.log( localStorage.length );