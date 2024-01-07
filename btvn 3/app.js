
let a = 0
let c = 0
let b = 5
let d = 0
do {
    d++
    do {
        a++
        document.write('&nbsp;')
    } while (a <= b);
    a = 0
    do {
    document.write(1)
    c++
    } while (c < d+d-1)
    b -= 1
    c = 0
    document.write("</br>")
} while (b >= 0)

let myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];
let odd = [];
let even = [];
let zero = [];

for (let i = 0; i < myArr.length; i++) {
    let m = myArr[i];

    if (m === 0) {
        zero.push(m);
    } else if (m % 2 === 0) {
        even.push(m);
    } else {
        odd.push(m);
    }
}

console.log("zero", zero);
console.log("odd", odd);
console.log("even", even);

let q = prompt('1 + 1 = ?')
if (q === 2) {
let q = prompt('2 x 3')
if (q === 6) {
    let q = prompt('2^3')
    if (q === 8) {
        alert('yay 😃')
        } else {
            if (q /= 2) {
                alert('sai🙁')
            } else {
                alert('?')
            }   
        }
    } else {
        if (q /= 6) {
            alert('sai🙁')
        } else {
            alert('?')
        }   
    }
} else {
    if (q /= 2) {
        alert('sai🙁')
    } else {
        alert('?')
    }   
}