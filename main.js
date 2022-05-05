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