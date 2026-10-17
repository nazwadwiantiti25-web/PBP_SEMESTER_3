let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

let highestScore = studentsScore[0];

for (let student of studentsScore) {
    if (student.score > highestScore.score) {
        highestScore = student;
    }
}

console.log("Nama siswa dengan nilai tertinggi: " + highestScore.name);
console.log("Nilai tertinggi: " + highestScore.score);