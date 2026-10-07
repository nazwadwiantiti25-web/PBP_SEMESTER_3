const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cekPalindrome(text) {
  // 1. Mengubah ke huruf kecil dan menghapus spasi serta karakter non-alfanumerik
  const teksBersih = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  // 2. Membalikkan teks
  let teksTerbalik = "";
  for (let i = teksBersih.length - 1; i >= 0; i--) {
    teksTerbalik += teksBersih[i];
  }

  // 3. Cek kalimat
  return teksBersih === teksTerbalik;
}

// Pengujian
rl.question('Masukkan kata/kalimat: ', (inputKalimat) => {
  const hasil = cekPalindrome(inputKalimat);
  
  if (hasil) {
    console.log('"' + inputKalimat + '" adalah palindrome.');
  } else {
    console.log('"' + inputKalimat + '" bukan palindrome.');
  }
  
  rl.close();
});