let a = +prompt("Nhập số thứ nhất:");
let b = +prompt("Nhập số thứ hai:");
do {
    let choice = +prompt(`
        Chọn chức năng:
        1. Cộng hai số
        2. Hiệu hai số
        3. Nhân hai số
        4. Chia hai số
        5. Thoát
    `);
    switch (choice) {
        case 1:
            sum(a, b);
            break;
        case 2:
            sub(a, b);
            break;
        case 3:
            mul(a, b);
            break;
        case 4:
            divi(a, b);
            break;
        case 5:
            console.log("Thoát!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }

}while (choice !== 5)
function sum (a, b) {
    let sum = a + b;
    console.log(sum);
}
function sub (a, b) {
    let sub = a - b;
    console.log(sub);
}
function mul (a, b) {
    let mul = a * b;
    console.log(mul);
}
function divi (a, b) {
    let divi = a % b;
    console.log(divi);
}