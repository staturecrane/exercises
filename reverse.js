function reverseArray (array) {
    var reverse = []; 
    for (var x = array.length - 1; x >= 0; x--) {
        reverse.push(array[x]);
    }
    return reverse;
}

function reverseArrayInPlace (array) {
    // Reverse array here
    for (var x = 0; x < Math.floor(array.length/2); x++)  {
        // Store xth element
        var i = array[x];
        
        // Xth element assigned to xth from end element
        // [1, 2, 3, 4, 5, 6]
        array[x] = array[array.length - 1 - x];
        // [6, 2, 3, 4, 5, 6]
        
        // Xth from end element assigned to stored xth element
        // [6, 2, 3, 4, 5, 6]
        array[array.length - 1 - x] = i;
        // [6, 2, 3, 4, 5, 1]
    }
    return array;
}

var array = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(array));
//console.log(reverseArray([1, 2, 3]));