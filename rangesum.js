function range (start, end, step) {
    var what = []; 
    
    if (step < 0) {
        for (var x = start; x >= end; x += step || 1) {
            what.push(x);
        }
    } else {
        for (var x = start; x <= end; x += step || 1) {
            what.push(x);
        }
    }
    
    return what;
}

function sum (list) {
    var sum = 0;
    for (var y = 0; y < list.length; y++) {
        sum += list[y];
    }
    return sum;
}

console.log(sum(range(10, 1, -1)));
console.log(sum(range(1, 10, 1)));
