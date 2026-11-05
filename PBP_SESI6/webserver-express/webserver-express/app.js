const express = require('express');
const app = express();

const mahasiswa = [
    { nama: 'Naswa', 
        kampus: 'Universitas Nusa Putra', 
        matkul: 'PBP' },    
    ];

app.get('/', (req, res) => {
    res.send('Hello Express! Express Server berjalan dengan cepat!');
});

app.get('/data', (req, res) => {
    res.json(mahasiswa);
});

app.listen(8000, () => console.log('Server Express berjalan di http://localhost:8000'));