// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    let arrDairy = arr.filter((Object)=>{
        return Object.category === 'dairy';
    });
    return arrDairy;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    let fruits = arr.filter((Object)=>{
        return Object.category === 'fruit';
    });
    let arrTwo = fruits.filter((Object)=>{
        return Object.price > 2;
    });
    return arrTwo;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    let arrCheese = arr.find((Object)=>{
        return Object.id === 'cheese';
    });
    return arrCheese;
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    let allFruits = arr.filter((Object)=>{
        return Object.category === 'fruit';
    });
    let fruitNames = [];
    allFruits.forEach((Object)=>{
        fruitNames.push(Object.id);
    });
    return fruitNames;
}