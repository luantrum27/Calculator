var value = ''
var Tong = 0,
    Tru = 0,
    Nhan = 1,
    Chia = 1;

function setText() {
    for (var param of arguments) {
        value += `${param}`;
    }
    document.getElementById('input').value = value;
}

function AC() {
    var empty = value.slice(value.length, value.length);
    document.getElementById('input').value = empty;
    value = empty;
}

function C() {
    var empty_2 = value.substring(0, value.length - 1);
    document.getElementById('input').value = empty_2;
    value = empty_2;
    console.log(empty_2);
}

function Result() {
    var a = document.getElementById('input').value;
    var b = eval(a);
    document.getElementById('input').value = b;
    console.log(b);
}

function Ans() {
    var a = document.getElementById('input').value;
    document.getElementById('input').value = a;
    value = a;
}