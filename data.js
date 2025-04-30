const nama = "Saumi Yahya Suryadi";
let gaji = 9;
const pendidikan = "S1";

const pekerjaan = document.getElementById("pekerjaan");
console.log(pekerjaan);

function generateProfesi() {
  let profesi;

  if ((gaji <= 10) & (gaji > 7)) {
    // ini kondisi pertama
    profesi = "anda adalah seorang  manajer";
  } else if (gaji > 4) {
    // jika kondisi tidak terpenuhi
    profesi = "anda adalah asisten manajer";
  } else {
    profesi = "anda adalah staff";
  }

  return console.log(profesi);
}

console.log(
  `Nama saya ${nama}, pemdidikan terakhir saya adalah ${pendidikan} di STEI ITB, dan saya sudah bekerja dengan gaji ${gaji}jt`
);

generateProfesi();
