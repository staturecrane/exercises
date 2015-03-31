function fib(x, y) {
    if ((x + y) < 200) {
        var newX = x + y;
        console.log(newX);
        fib(y, newX);
        
    }  
    else {
       return;
    }
};

function identity(x) {
    return x;
};

function add (x, y) {
    return x + y;
};

function mul (x, y){
    return x * y;
};

function idf(x){
    return function (){
        return x;
    }
};

function addf (x){
    return function (y){
        return x+ y;
    };
}

function applyf(binary){
    return function(x){
        return function(y){
            return binary(x, y);
        };
    };
}

function add3(add, x){
    return function (y){
       return add(x, y);
    };
    
}

add