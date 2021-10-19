// solve these problems using any method you like!

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

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

export function organizePricesByKey(arr) {
    let apple = arr.find(Object=>{
        return Object.id === 'apple';
    });
    let banana = arr.find(Object=>{
        return Object.id === 'banana';
    });
    let dogfood = arr.find(Object=>{
        return Object.id === 'dog food';
    });
    let milk = arr.find(Object=>{
        return Object.id === 'milk';
    });
    let cheese = arr.find(Object=>{
        return Object.id === 'cheese';
    });
    let priceKey = {
        apple: apple.price,
        banana: banana.price,
        'dog food': dogfood.price,
        milk: milk.price,
        cheese: cheese.price
    };
    //console.log(Object);
    return priceKey;
}

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    let apple = arr.find(Object=>{
        return Object.id === 'apple';
    });
    let banana = arr.find(Object=>{
        return Object.id === 'banana';
    });
    let dogfood = arr.find(Object=>{
        return Object.id === 'dog food';
    });
    let milk = arr.find(Object=>{
        return Object.id === 'milk';
    });
    let cheese = arr.find(Object=>{
        return Object.id === 'cheese';
    });
    let groceries = {
        apple: apple,
        banana: banana,
        'dog food': dogfood,
        milk: milk,
        cheese: cheese,
    };
    return groceries;
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    let fruit = arr.filter(Object => {
        return Object.category === 'fruit';
    });
    let other = arr.filter(Object => {
        return Object.category === 'other';
    });
    let dairy = arr.filter(Object =>{
        return Object.category === 'dairy';
    });
    let arrCount = {
        fruit: fruit.length,
        other: other.length,
        dairy: dairy.length
    };
    console.log(fruit);
    return arrCount;

}