/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = 'users';
const insertData1 = { first_name: 'John', last_name: 'Doe' };
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: 'John',
    last_name: 'Doe',
    age: 30,
    is_admin: false,
};
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {
    let query ="INSERT INTO " + tableName + " (";
    Object.keys(columnValuePairs).forEach(key => {
        query += key + ', ';
    })
    query = query.slice(0, (query.length - 2));
    query += ") VALUES ( ";
    Object.keys(columnValuePairs).forEach(key => {
        if(typeof columnValuePairs[key] !== 'boolean' && typeof columnValuePairs[key] !== 'number'){
            query += "'" + columnValuePairs[key] + "', " ;
        } else {
            query += columnValuePairs[key] + ', ';
        }
    })
    query = query.slice(0, (query.length - 2));
    query += ');';
    return '"' + query + '"';
};


/**
 * - Time: O(?).
 * - Space: O(?).
 */
function insertFunctional(tableName, columnValuePairs) {
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));
