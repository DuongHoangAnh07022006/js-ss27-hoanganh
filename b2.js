let dsSv = [];
function nhapSv() {
    let sl = parseInt(prompt("Nhập số lượng sinh viên:"));
    if (isNaN(sl) || sl <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }
    dsSv = [];
    for (let i = 0; i < sl; i++) {
        let ten = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
        dsSv.push(ten);
    }
}
function hienThiSv() {
    if (!dsSv.length) {
        alert("Danh sách trống!");
    } else {
        alert("Danh sách sinh viên:\n" + dsSv.join("\n"));
    }
}
function timSv() {
    let ten = prompt("Nhập tên sinh viên cần tìm:");
    let kq = dsSv.find(sv => sv.toLowerCase() === ten.toLowerCase());
    alert(kq ? `Tìm thấy: ${kq}` : "Sinh viên không có trong danh sách");
}
function xoaSv() {
    let ten = prompt("Nhập tên sinh viên cần xóa:");
    let index = dsSv.findIndex(sv => sv.toLowerCase() === ten.toLowerCase());
    if (index === -1) {
        alert("Sinh viên không có trong danh sách");
    } else {
        dsSv.splice(index, 1);
        alert(`Đã xóa sinh viên: ${ten}`);
    }
}
function menu() {
    let choice;
    while (true) {
        choice = prompt(
            `Chọn chức năng:
            1. Nhập danh sách
            2. Hiển thị danh sách
            3. Tìm sinh viên
            4. Xóa sinh viên
            5. Thoát`
        );
        switch (choice) {
            case "1":
                nhapSv();
                break;
            case "2":
                hienThiSv();
                break;
            case "3":
                timSv();
                break;
            case "4":
                xoaSv();
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
