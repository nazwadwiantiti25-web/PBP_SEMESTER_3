// Rate kalori per menit
const KALORI_LARI_PER_MENIT = 60 / 5;      // 12 kalori/menit[span_1](start_span)[span_1](end_span)
const KALORI_PUSHUP_PER_MENIT = 200 / 30;  // 6.67 kalori/menit[span_2](start_span)[span_2](end_span)
const KALORI_PLANK_PER_MENIT = 5 / 1;      // 5 kalori/menit[span_3](start_span)[span_3](end_span)

function hitungTotalKalori(aktivitas) {
  let totalKalori = 0;

  // Memeriksa tiap aktivitas yang dilakukan
  if (aktivitas.lari) {
    if (aktivitas.lari.durasi > 0) {
      totalKalori += aktivitas.lari.durasi * KALORI_LARI_PER_MENIT;
    }
  }

  if (aktivitas.pushup) {
    if (aktivitas.pushup.durasi > 0) {
      totalKalori += aktivitas.pushup.durasi * KALORI_PUSHUP_PER_MENIT;
    }
  }

  if (aktivitas.plank) {
    if (aktivitas.plank.durasi > 0) {
      totalKalori += aktivitas.plank.durasi * KALORI_PLANK_PER_MENIT;
    }
  }

  return totalKalori;
}

// Contoh Penggunaan:
// Durasi dalam satuan menit
const sesiOlahraga = {
  lari: { durasi: 10 },    // 10 menit lari = 120 kalori[span_4](start_span)[span_4](end_span)
  pushup: { durasi: 30 },  // 30 menit push-up = 200 kalori[span_5](start_span)[span_5](end_span)
  plank: { durasi: 2 }     // 2 menit plank = 10 kalori[span_6](start_span)[span_6](end_span)
};

const total = hitungTotalKalori(sesiOlahraga);
console.log("Total kalori yang terbakar:", total);