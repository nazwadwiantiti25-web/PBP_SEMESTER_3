// 1. Membalik kata/kalimat
function balikKalimat(text) {
  let hasil = "";
  for (let i = text.length - 1; i >= 0; i--) {
    hasil += text[i];
  }
  return hasil;
}

// 2. Menghitung pangkat dari sebuah bilangan
function hitungPangkat(basis, pangkat) {
  let hasil = 1;
  for (let i = 0; i < pangkat; i++) {
    hasil *= basis;
  }
  return hasil;
}

// 3. Menghitung faktorial
function hitungFaktorial(n) {
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

// 4. Menghapus spasi dari sebuah kalimat
function hapusSpasi(kalimat) {
  let hasil = "";
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== " ") {
      hasil += kalimat[i];
    }
  }
  return hasil;
}

// 5. Mengecek email termasuk valid atau tidak (dasar)
function cekEmailValid(email) {
  let adaAt = false;
  let adaTitik = false;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "") adaAt = true;
    if (email[i] === ".") adaTitik = true;
  }

  return adaAt && adaTitik;
}

// --- Pengujian Fungsi ---
console.log("1. Balik kata:'Kasur Rusak'", balikKalimat("Kasur Rusak"));
console.log("2. Pangkat (2^3):", hitungPangkat(2, 3));
console.log("3. Faktorial`5 (5!):", hitungFaktorial(5));
console.log("4. Hapus spasi 'Nusa Putra'", hapusSpasi("Nusa Putra"));
console.log("5. Cek email 'user@gmail.com'", cekEmailValid("user@gmail.com") ? "Valid" : "Tidak Valid");