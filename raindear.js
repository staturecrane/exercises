function rainDear (string) {
    string = string.split(" ");
   var translation = "";
    for (var x = 0; x < string.length; x++) {
        var theDear =string[x].split("");
        if (theDear[0] === "i") {
            theDear.unshift("m");
        } 
        else theDear[0]="m";
        theDear=theDear.join("");
        translation += (theDear + " ");
    }
    return translation;
}

console.log(rainDear("This is how we talk!"));