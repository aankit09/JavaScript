//First Example Console Value 
function multi(a,b) {
    return a+b;
}
console.log(multi(10,2));
console.log(multi(6,33));

// Second Example Send Value
function addition() {
    return 50+90;
}
console.log(addition());


// Thrid Example One value defined and one value get
function someValue(){
    return 70;
}
function add(a,b=23,c=someValue())
{
       return a+b+c;
}
console.log(add(6));