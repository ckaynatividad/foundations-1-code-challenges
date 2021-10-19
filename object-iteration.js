// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return Object.keys(someObject);
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    //console.log(Object.entries(someObject));
    let entries = Object.entries(someObject);
    const obj = {};
    entries.forEach(entryObject=>{
        let subZero = entryObject[0];
        let upperEqual = subZero.toUpperCase();
        obj[upperEqual] = entryObject[1];
    });
    return obj;

    //     let object = {};
//     for(let key in someObject){
//         let value = someObject[key];
//         let upperCase = key.toUpperCase();
//         object[upperCase] = value;
//         console.log(object[upperCase]);
//     }
// return object;

}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    // let tuples = someObject.map(Object =>{

    // return {
    //     name: Object.name,
    //     age: Object.age,
    //     type: Object.type
    // };
    // return tuples;
    }