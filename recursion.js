function isEven (a) {
    if (a == 0) {
        return true;
    }
    else if (a == 1) {
        return false;
    }
    return isEven(a - 2);
}

console.log(isEven(9999));

