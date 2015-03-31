//Exercise 4
function translate(string) {
 	var consonants = "qwrtyplkjhgfdszxcvbnm";
  	var newString = "";
  for (var x = 0; x < string.length; x++) {
    if (consonants.indexOf(string[x]) >= 0)  {
      newString += (string[x] + "o" + string[x]);
  }
  else if (consonants.indexOf(string[x]).toUppercase) {
      newString += (string[x] + "o" + string[x]);
      
  }
    newString += (string[x]);

}
    return newString;
}

//console.log(translate("This is how we do it"));

//Exercise 5
function sum(array) {
    var total = array.reduce(function (a, b) {
       return a + b;
    });
    return total;
}

function multiply (array) {
    {
    var total = array.reduce(function (a, b) {
        return a * b;
    });
        return total;
    }
}

//console.log(sum([1,2,3,4]));
//console.log(multiply([1,2,3,4]));

//Exercise 6

function reverse (string) {
    var output = "";
    for (var x = string.length - 1; x >= 0; x-- ) {
        output += string[x];
    }
    return output;
}

//console.log(reverse("Hello there"));

//Exercise 7

var lexicon = {"merry":"god", "christmas":"jul", "and":"och", "happy":"got", "new":"nytt", "year":"ar"};
function christmasToSwedish (string) {
   var x = string.split(" ");
  var translation = "";
   x.forEach(function(element){
      translation += (lexicon[element] + " ");
  });
   return translation;
}

//console.log(christmasToSwedish("merry christmas"));

//Exercise 8

function findLongestWord (array) {
   return array.sort(function (a, b)  {
       return b.length - a.length 
   })[0];
}

//console.log(findLongestWord(["hello", "mightygood", "downtonabbey"]));

//Exercises 9

function filterLongestWord (array, i){
   var newArray = [];
    for (var x = 0; x < array.length; x++) {
        if (array[x].length > x) {
            newArray.push(array[x]);
        }
    }
    return newArray;
}

//console.log(filterLongestWord(["jerry", "meander", "as", "maybe"], 3));

function charFreq (string) {
    var obj = {};
    var array = string.split("");
   for (var n in array) {
    var c = array[n];
       if (!obj[c]) {
            obj[c] = 0;
       }
       obj[c] += 1;
    }
   return obj;
    
}

//console.log(charFreq("abbaaddaecaabeeedddaaa"));

function PrimeTime(num) { 
    if (num < 3) {
        return false;
    }
    else {
        for (var x = 0; x < Math.sqrt(num); x += 1) {
            if ( num % x === 0) {
                return false;
            }
        }
    }
    return num = true;

}  

function ExOh(str) { 
	var xCount = 0;
 	var oCount = 0;
  	for (var x = 0; x < str.length; x += 1) {
    	if (x !== [/a-z/] || [/A-Z/]) {
          return false
        }
      	if (x === str.charAt[0]) {
            	xCount += 1
            }
        if (x !== str.charAt[0]) {
          oCount += 1
        }
    };
    
    if (xCount !== oCount) {
        str = false;
    }
    
    else {
        str = true;
    }
  // code goes here  
  return str; 
         
};

//console.log(ExOh("xxooxxoo"));