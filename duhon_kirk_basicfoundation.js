var arr = [];
function onetwo() {
    for(var i = 1; i < 256; i++){
        arr.push(i); 
    }
    return arr;
}
onetwo();
console.log(arr);

//[1,2,3,4, ... 253, 254, 255]

function evenup() {
    var sum = 0;
    for(var i = 1; i <= 1000; i++) {
        if(i % 2 === 0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(evenup());

// 250500

function oddup() {
    var sum = 0;
    for(var i = 1; i <= 5000; i++) {
        if(i % 2 === 1){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(oddup());

// 6250000

function sumar(ray){
    sum = 0
    for(var i = 0; i < ray.length; i++){
        sum = sum + ray[i];
    } 
    return sum;
}

console.log(sumar([1,5,7,-3,5,1,9]));

// 25

function fimax(ray){
    sum = ray[0];
    for(var i = 0; i < ray.length; i++){
        if(ray[i] > sum){
            sum = ray[i];
        }
    }
    return sum;
}

console.log(fimax([-10,4,12,-5,16,1]));

// 16

function fiave(ray){
    sum = 0
    for(var i = 0; i < ray.length; i++){
        sum = sum + ray[i];
    }
    return (sum/ray.length);
}

console.log(fiave([-10,4,12,-5,16,1]));

// 3
var oddray = [];
function oddarr(){
    for(var i = 0; i < 50; i++){
        if(i % 2 == 1){
            oddray.push(i);
        }
    }
    return oddray;
}

console.log(oddarr());

// [1, 3, 5, 7, ... 45, 47, 49]

function size(ray, test){
    sum = 0;
    for(var i = 0; i < ray.length; i++){
        if(ray[i] > test){
            sum++;
        }
    }
    return sum;
}

console.log(size([-4,1,3,15,23,102],3));

// 3

function sqar(ray){
    for(var i = 0; i < ray.length; i++){
        ray[i] = ray[i] * ray[i];
    }
    return ray;
}

console.log(sqar([-2,-1,0,1,2,3,4,5]));

// [4,1,0,1,4,9,16,25]


function noneg(ray){
    for(var i = 0; i < ray.length; i++){
        if(ray[i] < 0){
            ray[i] = 0;
        }
    }
    return ray;
}

console.log(noneg([-4,3,-5,1,6,10,-3]));

// [0,3,0,1,6,10,0]

var min = 0
var max = 0

function mma(ray){
    max = ray[0];
    min = ray[0];
    sum = 0;
    for(var i = 0; i < ray.length; i++){
        if (ray[i] < min){
            min = ray[i];
        }
        if (ray[i] > max){
            max = ray[i];
        }
        sum = sum + ray[i];
    }
    var newarr = [max,min,(sum/ray.length)];
    return newarr;
}

console.log(mma([0,-2,5,20,-30,13]));

// [20,-30,1]

function swaps(ray){
    sum = ray[0];
    ray[0] = ray[ray.length-1];
    ray[ray.length-1] = sum;
    return ray;
}

console.log(swaps([1,2,3,4,5]));

// [5,2,3,4,1]

function negword(ray){
    for(var i = 0; i < ray.length; i++){
        if(ray[i] < 0){
            ray[i] = 'Dojo';
        }
    }
    return ray;
}

console.log(negword([-4,3,-5,1,6,10,-3]));

// ['Dojo',3,'Dojo',1,6,10,'Dojo']