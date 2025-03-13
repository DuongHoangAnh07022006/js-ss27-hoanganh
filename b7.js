function timSoThieu(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(Number.isInteger)) {
        return "Dữ liệu không hợp lệ";
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i - 1] + 1;
        }
    }
    return "Không thiếu số nào"; 
}
console.log(timSoThieu([1, 2, 3, 5])); 
console.log(timSoThieu([1, 2, 4, 5])); 
console.log(timSoThieu("abc"));        
