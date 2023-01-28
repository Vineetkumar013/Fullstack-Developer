function add (a,b){
    return Number(a)+Number(b)
}
function sub (a,b){
    return Number(a)-Number(b)
}
function mul (a,b){
    return Number(a)*Number(b)
}
function divide (a,b){
    return Number(a)/ Number(b)
}
function sin (a,b){
    return Math.sin(Math.PI*a/180)
}
function cos (a){
    return Math.cos(Math.PI*a/180)
}
function tan (a){
    return Math.tan(Math.PI*a/180)
}
function random (a,b){
    return (Math.random(a,b))
}


module.exports ={ add, sub, mul, divide, sin, cos, tan, random}


// add, sub, mult, divide, sin, cos, tan, random




