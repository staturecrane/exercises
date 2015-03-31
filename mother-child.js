var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function hasKnownMother (obj) {
  return !!obj.mother && !!byName[obj.mother];
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

ancestry = ancestry.filter(hasKnownMother);

console.log(average(ancestry.map(function (obj) {
    return obj.born - byName[obj.mother].born;
})));

// → 31.2