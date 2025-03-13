function tinhDienTichTron() {
    let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (isNaN(r) || r <= 0) {
        alert("Bán kính không hợp lệ!");
        return;
    }
    alert(`Diện tích hình tròn: ${Math.PI * r * r}`);
}
function tinhChuViTron() {
    let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (isNaN(r) || r <= 0) {
        alert("Bán kính không hợp lệ!");
        return;
    }
    alert(`Chu vi hình tròn: ${2 * Math.PI * r}`);
}
function tinhDienTichCN() {
    let dai = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
    let rong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    if (isNaN(dai) || isNaN(rong) || dai <= 0 || rong <= 0) {
        alert("Chiều dài hoặc chiều rộng không hợp lệ!");
        return;
    }
    alert(`Diện tích hình chữ nhật: ${dai * rong}`);
}
function tinhChuViCN() {
    let dai = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
    let rong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    if (isNaN(dai) || isNaN(rong) || dai <= 0 || rong <= 0) {
        alert("Chiều dài hoặc chiều rộng không hợp lệ!");
        return;
    }
    alert(`Chu vi hình chữ nhật: ${2 * (dai + rong)}`);
}
function menu() {
    let chon;
    while (true) {
        chon = prompt(
            `Chọn chức năng:
            1. Tính diện tích hình tròn
            2. Tính chu vi hình tròn
            3. Tính diện tích hình chữ nhật
            4. Tính chu vi hình chữ nhật
            5. Thoát`
        );
        switch (chon) {
            case "1":
                tinhDienTichTron();
                break;
            case "2":
                tinhChuViTron();
                break;
            case "3":
                tinhDienTichCN();
                break;
            case "4":
                tinhChuViCN();
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
