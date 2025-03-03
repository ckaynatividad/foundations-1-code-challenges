// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let arrNames = [];
    arr.forEach((Object)=> { 
        arrNames.push(Object.name);
    });
    return arrNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let arrReverse = [];
    arr.forEach((Object)=> {
        arrReverse.push(Object.type);
        arrReverse.reverse();
    });
    return arrReverse;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let arrSpanish = [];
    arr.forEach((Object)=>{
        arrSpanish.push({
            nombre: Object.name,
            tipo: Object.type
        });
    });
    return arrSpanish;
}

