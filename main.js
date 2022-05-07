function getEle(id) {
    return document.getElementById(id);
}

var arrNumber = [];

getEle('btnThemSo').onclick = function () {
    var number = getEle('soCanThem').value * 1;
    var output = '';
    arrNumber.push(number);
    output = arrNumber.toString();
    // console.log(arrNumber);
    getEle('arrInput').innerHTML = output;
}

getEle('btnTinhTongSoDuong').onclick = function () {
    var arr1 = arrNumber;
    var tongSoDuong = 0;
    for (i = 0; i <= arr1.length - 1; i++) {
        var phanTu1 = arr1[i];
        if (phanTu1 > 0) {
            tongSoDuong += phanTu1;
        }
    }
    getEle('footerBai1').innerHTML = 'Tổng số dương là: ' + tongSoDuong;
}

getEle('btnDemSoDuong').onclick = function () {
    var arr2 = arrNumber;
    var countSoDuong = 0;
    for (j = 0; j <= arr2.length - 1; j++) {
        var phanTu2 = arr2[j];
        if (phanTu2 > 0) {
            countSoDuong++;
        }
    }
    getEle('footerBai2').innerHTML = 'Số dương: ' + countSoDuong;
}

getEle('btnSoMin').onclick = function () {
    var arr3 = arrNumber;
    var min = 0;
    for (k = 0; k <= arr3.length - 1; k++) {
        var phanTu3 = arr3[k];
        if (phanTu3 < min) {
            min = phanTu3;
        }
    }
    getEle('footerBai3').innerHTML = 'Số nhỏ nhất là: ' + min;
}

getEle('btnSoDuongMin').onclick = function () {
    var arr4 = arrNumber;
    var min = arr4[0];
    for (l = 0; l <= arr4.length - 1; l++) {
        var phanTu4 = arr4[l];
        if (phanTu4 > 0) {
            if (phanTu4 < min) {
                min = phanTu4;
            }
        }
    }
    getEle('footerBai4').innerHTML = 'Số dương nhỏ nhất là: ' + min;
}

getEle('btnSoChanLast').onclick = function () {
    var arr5 = arrNumber;
    var soChanLast = -1;
    var ketQua5 = '';
    for (m = 0; m <= arr5.length - 1; m++) {
        var phanTu5 = arr5[m];
        if (phanTu5 % 2 === 0) {
            soChanLast = phanTu5;
        }
    }
    if (soChanLast !== -1) {
        ketQua5 = 'Số chẵn cuối cùng là: ' + soChanLast;
    } else {
        ketQua5 = 'Không tìm thấy số chẵn';
    }
    getEle('footerBai5').innerHTML = ketQua5;
}

getEle('btnDaoViTri').onclick = function () {
    var arr6 = arrNumber;
    var viTri1 = getEle('viTriSo1').value * 1;
    var viTri2 = getEle('viTriSo2').value * 1;
    var giaTri1 = arr6[viTri1];
    var giaTri2 = arr6[viTri2];
    var giaTriTam = giaTri1;
    if (giaTriTam === giaTri1) {
        arr6[viTri1] = giaTri2;
        arr6[viTri2] = giaTriTam;
    }
    // arr6[viTri1] = giaTri2;
    // arr6[viTri2] = giaTri1;
    getEle('footerBai6').innerHTML = "Mảng sau khi đổi: " + arr6;
}

getEle('btnTangDan').onclick = function () {
    var arr7 = arrNumber;
    var ketQua7 = arr7.sort(function (b, a) {
        return b - a;
    });
    getEle('footerBai7').innerHTML = "Mảng theo thứ tự tăng dần: " + ketQua7;
}

function xetSoNguyenTo(m) {
    var count = 0;
    for (n = 1; n <= m; n++) {
        if (m % n === 0) {
            count += 1;
        } else {
            count += 0;
        }
    }
    return count;
}

getEle("btnNguyenTo").onclick = function () {
    var arr8 = arrNumber;
    var soNguyenToDauTien = -1;
    var ketQua8 = "";
    for (z = 0; z <= arr8.length - 1; z++) {
        var phanTu8 = arr8[z];
        var soNguyenTo = xetSoNguyenTo(phanTu8);
        if (phanTu8 !== 1 && phanTu8 >0 && soNguyenTo <= 2) {
            soNguyenToDauTien = phanTu8;
            break;
        }
    }
    if (soNguyenToDauTien !== -1) {
        ketQua8 = 'Số nguyên tố đầu tiên là: ' + soNguyenToDauTien;
    } else {
        ketQua8 = 'Không tìm thấy số nguyên tố'
    }
    getEle("footerBai8").innerHTML = ketQua8;
}

function checkSoNguyen(o) {
    return Number.isInteger(o);
}

getEle('btnDemSoNguyen').onclick = function () {
    var arr9 = arrNumber;
    // var ketQua9 = '';
    var count9 = 0;
    for (p = 0; p <= arr9.length - 1; p++) {
        var phanTu9 = arr9[p];
        var SoNguyen = checkSoNguyen(phanTu9);
        if (SoNguyen) {
            count9++;
        } 
    }
    getEle('footerBai9').innerHTML = 'Số nguyên: ' + count9;
}

getEle('btnSoSanhDuongAm').onclick = function () {
    var arr10 = arrNumber;
    var countDuong = 0;
    var countAm = 0;
    var ketQua10 = '';
    for (q = 0; q <= arr10.length - 1; q++) {
        var phanTu10 = arr10[q];
        if (phanTu10 > 0) {
            countDuong++;
        } else if (phanTu10 < 0) {
            countAm++;
        }
    }

    if (countDuong === countAm) {
        ketQua10 = 'Số dương = Số âm';
    } else if (countDuong > countAm) {
        ketQua10 = 'Số dương > Số âm';
    } else {
        ketQua10 = 'Số dương < Số âm';
    }
    getEle('footerBai10').innerHTML = ketQua10;
}

