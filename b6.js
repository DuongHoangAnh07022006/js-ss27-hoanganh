function laCapSoCong(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(Number.isInteger)) {
        return "Dữ liệu không hợp lệ";
    }
    let d = arr[1] - arr[0]; 

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== d) {
            return false;
        }
    }
    return true;
}
console.log(laCapSoCong([2, 4, 6, 8]));  
console.log(laCapSoCong([3, 6, 9, 12, 14]));
console.log(laCapSoCong("abc"));      