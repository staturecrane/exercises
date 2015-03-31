function ExOh(str) { 
    var countX = 0;
    var countO = 0;
    var match = str.charAt(0);
    str.split('').forEach(function (x) {
        if (x === match) {
            return countX += 1
        }
        else {
            return countO += 1
        }
    });
    var binary;
    if (countX === countO) {
        binary = true
    }
    else{
        binary = false
    }
    return console.log(binary);
};

function Palindrome(str) { 
    var pal = '';
    var newString = str.replace(/[\s]/g, "");
    for (var x = str.length -1; x >= 0; x -= 1) {
        if (str[x].match(/[a-z]/i)) {
            pal += str[x];
        }
    }
    if (pal === newString) {
        return true;
    }
    else {
        return false;
    }
         
}

function RunLength(str) { 
    var run = {};
    var min = "";
    str.split('').forEach(function(a){
        if (!run[a]) {
            run[a] = 0;
        };
        run[a] += 1;
    });
    for (var x in run){
        if (run.hasOwnProperty(x)){
            min += run[x] + x;
        }
    };
    return min;

    
}

function division (num1, num2) {
    if (num2 === 0) {
        return num1;
    } else {
        return division(num2, num1 % num2);
    }
}

/*function StringScramble (str1, str2) {
   var obj = [];
   var one = str2.split("");
   var two = str1.split("");
   var arr = [];
    for (var x = 0; x < two.length; x++){
        for (var y = 0; y < one.length; y++) {
            if (one[y] === two[x]) {
                arr.push[two[x]];
            }       
        }
    }
   
   return console.log(arr);
}*/

function StringScramble2(str1,str2) { 
  for (var i = 0; i < str2.length; i++) {
    var letter = str2.substr(i, 1);
    var index = str1.indexOf(letter);
    if (index === -1) return false;
    str1 = str1.slice(0, index) + str1.slice(index + 1);
  }
  return true;     
}

console.log(StringScramble2("worrldaass", "world" ));