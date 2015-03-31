var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function century (person) {
    return Math.ceil(person.died / 100);
}

function groupBy (array, func) {
    var obj = {};
    for (var n in array) {
        var c = func(array[n]);
        if (!obj[c]) {
            obj[c] = [];
        }
        obj[c].push(array[n]);
    }
    return obj;
}

var byCentury = groupBy(ancestry, century);

for (var i in byCentury) {
    var ages = byCentury[i].map(function (person) {
        return person.died - person.born;
    })
    console.log(i + ": " + average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
