// function to take in an object with key value pairs
// this function should search through a given array of objects
// find the one matching object
// return null if the object does not exist in the array




const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */



function findObjects(criteria, collection) {
    let results = [];
    let match = false;
    for(var i = 0; i < collection.length; i++){
        Object.keys(criteria).forEach(key => {
            if(collection[i].hasOwnProperty(key) && collection[i][key] === criteria[key]){
                match = true;
            } else{
            match = false;
            }
        })
        if(match){
            results.push(collection[i]);
        }
    }
    return results;
}


/**
 * - Time: O(?).
 * - Space: O(?).
 */

console.log(findObjects(searchCriteria1, items));
// console.log(findObjects(searchCriteria2, items));