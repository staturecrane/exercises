function countBs (string) {
    var count = 0;
    for (var x = 0; x < string.length; x++) {
        if (string.charAt(x) == "B") {
            count += 1;
        }
    }
    return count;
}

console.log(countBs("BatmanbbbB"));