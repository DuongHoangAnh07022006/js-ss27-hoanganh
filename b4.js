let dsSo = [];

function nhapSo() {
    let sl = parseInt(prompt("Nhập số lượng số nguyên:"));
    if (isNaN(sl) || sl <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }
    dsSo = [];
    for (let i = 0; i < sl; i++) {
        let so = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
        if (!isNaN(so)) {
            dsSo.push(so);
        } else {
            alert("Giá trị không hợp lệ! Vui lòng nhập lại.");
            i--; 
        }
    }
}
function tinhTrungBinh() {
    if (!dsSo.length) {
        alert("Danh sách trống!");
        return;
    }
    let tong = dsSo.reduce((sum, num) => sum + num, 0);
    alert(`Giá trị trung bình: ${tong / dsSo.length}`);
}
function timSoChanLonNhat() {
    let soChan = dsSo.filter(num => num % 2 === 0);
    if (!soChan.length) {
        alert("Không có số chẵn trong danh sách.");
        return;
    }
    alert(`Số chẵn lớn nhất: ${Math.max(...soChan)}`);
}
function timSoLeNhoNhat() {
    let soLe = dsSo.filter(num => num % 2 !== 0);
    if (!soLe.length) {
        alert("Không có số lẻ trong danh sách.");
        return;
    }
    alert(`Số lẻ nhỏ nhất: ${Math.min(...soLe)}`);
}
function menu() {
    let choice;
    while (true) {
        choice = prompt(
            `Chọn chức năng:
            1. Nhập danh sách số nguyên
            2. Tính trung bình các số
            3. Tìm số chẵn lớn nhất
            4. Tìm số lẻ nhỏ nhất
            5. Thoát`
        );
        switch (choice) {
            case "1":
                nhapSo();
                break;
            case "2":
                tinhTrungBinh();
                break;
            case "3":
                timSoChanLonNhat();
                break;
            case "4":
                timSoLeNhoNhat();
                break;
            case "5":
                alert("Thoát chương trình!");
                return;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
        }
    }
}
menu();
