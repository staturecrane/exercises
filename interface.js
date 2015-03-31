function Seq (arr) {
    this.arr = arr;
    this.index = -1;
}

Seq.prototype.next = function () {
    if (this.index >= this.arr.length - 1) {
        // There is no next
        return false;
    }
    this.index++;
    return true; 
}

Seq.prototype.current = function () {
    return this.arr[this.index];
}

function logFive (seq) {
    for (var x = 0; x < 5; x++) {
        if (seq.next() === false) {
            break;
        }
        console.log(seq.current());
    }
}

function RangeSeq (start, end) {
    this.index = start - 1;
    this.end = end;
}

RangeSeq.prototype.next = function () {
    if (this.index >= this.end) {
        return false;
    }
    this.index++;
    return true;
}

RangeSeq.prototype.current = function () {
    return this.index;
}

logFive(new Seq([1, 2, 3]));
logFive(new RangeSeq(100, 1000));