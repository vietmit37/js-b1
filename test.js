// bài1
/**
 * 1: input parameter
 * Lương/ngày:100.000
 *
 * 2:Algorithm
 * B1: Tạo biến: số ngày làm,Lương/ngày
 * B2: Tính lương: Lương/ngày * số ngày làm
 *
 * 3: Result
 * Lương= Số ngày làm * Lương/ngày
 */
var luongMotNgay = 100000;
var btnKq = document.getElementById("ketQua");
btnKq.onclick = function () {
  var soNgayLam = document.getElementById("ngayLam").value;
  var thongBao = document.getElementById("thongBao");
  var luong = soNgayLam * luongMotNgay;
  var kq = "Tiền lương: " + luong + "VNĐ";
  thongBao.style.color = "red";
  thongBao.innerHTML = kq;
};

// Bài 2
/**
1: input parameter
 * Nhập 5 số thực
 *
 * 2:Algorithm
 * B1: Tạo 5 biến: a b c d e 
 * B2: Gán từng giá trị cho 5 biến
 * B3: Tính trung bình: (a+b+c+d+e)/5
 *
 * 3: Result
 * TB= (1+2+3+4+5)/5=3
 */
document.getElementById("btnTb").onclick = function () {
  var a = document.getElementById("So1").value;
  var b = document.getElementById("So2").value;
  var c = document.getElementById("So3").value;
  var d = document.getElementById("So4").value;
  var e = document.getElementById("So5").value;
  var thongBao2 = document.getElementById("thongBao2");
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  d = parseInt(d);
  e = parseInt(e);
  var TB = (a + b + c + d + e) / 5;
  var kq2 = "Đáp án: " + TB;
  thongBao2.style.color = "red";
  thongBao2.innerHTML = kq2;
};

// Bài 3
/**
 * 1: input parameter
 * Giá đô: 235000 VND
 * Nhập số tiền đô muốn qui đổi
 *
 * 2:Algorithm
 * B1: Tạo biến: Giá đô, và tiền đô qui đổi
 * B2: Nhập số tiền muốn qui đổi
 * B3: Tính quy đổi tiền đô sang VNĐ: giá đô*tiền đô qui đổi
 *
 * 3: Result
 * Quy đổi= Giá đô * Tiền đô
 * VD:1$=23500;
 */
var giaDO = 23500;
document.getElementById("btnQĐ").onclick = function () {
  var Tien = document.getElementById("Tien").value;
  var thongBao3 = document.getElementById("thongBao3");
  var quiDoi = Tien * giaDO;
  var kq3 = "Tiền qui đổi sang VNĐ: " + quiDoi + "VNĐ";
  thongBao3.style.color = "red";
  thongBao3.innerHTML = kq3;
};

// Bài 4:
/**
 *   1: input parameter
 * Nhập vào chiều dài và chiều rộng
 * Tính S và P HCN
 *
 * 2:Algorithm
 * B1: Tạo biến: Chiều dài, Chiều rộng ,Chu vi và Diện tích Hcn
 * B2: Gán từng giá trị cho từng biến hoặc nhập
 * B3: Công thức S=Dài * Rộng
 * P=(Dài+Rộng)*2
 *
 *3: Result
 * Kết quả S và P
 */
document.getElementById("btndienTich").onclick = function () {
  var chieuDai = document.getElementById("Dai").value;
  var chieuRong = document.getElementById("Rong").value;
  var thongBao4 = document.getElementById("thongBao4");
  var S = chieuDai * chieuRong;
  var kq4 = "Diện tích là: " + S;
  thongBao4.style.color = "green";
  thongBao4.innerHTML = kq4;
};
document.getElementById("btnchuVi").onclick = function () {
  var chieuDai = document.getElementById("Dai").value;
  var chieuRong = document.getElementById("Rong").value;
  var thongBao5 = document.getElementById("thongBao5");
  chieuDai = parseInt(chieuDai);
  chieuRong = parseInt(chieuRong);
  var P = (chieuDai + chieuRong) * 2;
  var kq5 = "Chu vi là: " + P;
  thongBao5.style.color = "blue";
  thongBao5.innerHTML = kq5;
};

// Bài 5
/**
 *  1: input parameter
 * Nhập vào số có 2 chữ số

 * 2:Algorithm
 * B1: Tạo biến: n là số có 2 chữ số, Dv và Chuc lần lượt là hàng đơn vị và hàng chục
 * B2: Gán từng giá trị cho n
 * B3: Tách hàng chục: (n % 100) / 10
 * Tách hàng đơn vị: n%10
 *
 *3: Result
 * Tổng ký số= Đơn vị + hàng chục
 * Tổng 2 ký số Vd: 12=1+2=3
 */
document.getElementById("tongKs").onclick = function () {
  var so = document.getElementById("kiSo").value;
  var thongBao6 = document.getElementById("thongBao6");
  var donVi = so % 10;
  var chuc = Math.floor((so % 100) / 10);
  var tram = Math.floor(so / 100);
  var sum = donVi + chuc + tram;
  var kq5 = "Tổng kí số: " + sum;
  thongBao6.style.color = "red";
  thongBao6.innerHTML = kq5;
};
