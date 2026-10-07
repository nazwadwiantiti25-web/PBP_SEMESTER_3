const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nilai: ', function (input) {
let nilai = Number(input);

if (nilai < 0 || nilai > 100){
    console.log("Nilai tidak valid");
} else if (nilai >= 85) {
    console.log("Grade: A");
} else if (nilai >= 70) {
    console.log("Grade: B");
} else if (nilai >= 55) {
    console.log("Grade: C");
} else if (nilai >= 40) {
    console.log("Grade: D");
} else{
    console.log("Grade: E");
}

rl.close();
});