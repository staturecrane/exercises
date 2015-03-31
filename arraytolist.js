function arrayToList (array) {
    var list = null;
    for (var x = array.length - 1; x >= 0; x--) {
        // First iteration
        // list = { value: 20, rest: null }
        // Second iteration
        // list = { value: 10, rest: { value: 20, rest: null }}
        list = { value: array[x], rest: list };
    }
    return list;
}

function listToArray (list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend (element, list) {
    var newList = {
        value: element,
        rest: list
    }
    return newList;
}

function nth (list, element) {
    var newElement = 0;
    for (var x = list; x; x = x.rest) {
        if (newElement === element) {
            return x.value;
        } else {
            newElement +=1;
        }
    }
    return undefined;
}

function recursiveNth (list, n) {
    if (n === 0) {
       return list.value; 
    }
    else if (!list) {
        return undefined;
    }
    else {
       return recursiveNth(list.rest, n - 1);
    } 
}

//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//console.log(recursiveNth(arrayToList([10, 20, 30]), 1));
// → 20

function deepEqual (a, b) {
    if (a === b) {
        return true;
    } 
    
    // We can assume that if we didn't return true above,
    // we are likely dealing with objects, and both a and b need to be objects
    // if we are going to iterate over their properties and call deepEqual recursively
    if (typeof a != "object" || a == null ||
        typeof b != "object" || b == null) {
        return false;
    }
    
    var propsA = 0, propsB = 0;
    
    for (var x in a) {
        propsA += 1;
    }
    
    for (var y in b) {
        propsB += 1;
        // If we don't return true/false from deepEqual (line 111), then...
        // At some point deepEqual will return undefined
        // Why? No conditions are satisfied for a return value
        // deepEqual(obj, { here: { is: 'an'), object: 2 })
        
        // First iteration of this loop
        // -> y = here
        // deepEqual(a['here'], b['here']) THIS is what returns undefined without line 111
        // ^ same as deepEqual({ is: 'an' }, { is: 'an' })
        // Next recursive call 
        // deepEqual(a['is'], b['is'])
        // ^ same as deepEqual('an', 'an');
        // -> returns true
        // At this point, we return to the loop inside of the recursively called deepEqual(a['here'], b['here']) 
        // The loop ends because b only had one property (is)
        // We didn't meet any conditions to return, so deepEqual returns undefined
        // We then return to our original call of deepEqual, in the context of this loop
        // And thus break our loop by returning false (!undefined == true)
        
        if (!(y in a) || !deepEqual(a[y], b[y])) { 
            return false;
        }
        
    }
    
    return propsA == propsB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));