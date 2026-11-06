const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Selamat datang di server Kelompok 2 PBP');
});

app.get('/info', (req, res) => {
  res.send('Server dijalankan pada: ' + new Date().toLocaleString('id-ID'));
});

app.get('/anggota', (req, res) => {
  res.type('text/plain');
  res.send(
    `Kelompok: 2 PBP
Anggota:
Naswa
Warda
Zakka
Falah`
  );
});


app.listen(8000, () => console.log('Server Express berjalan di http://localhost:8000'));