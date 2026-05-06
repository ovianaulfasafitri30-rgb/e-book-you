// Fungsi Navigasi Antar Halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dituju
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Reset Form jika masuk ke kontak secara manual
    if(pageId === 'kontak') {
        document.getElementById('orderForm').style.display = 'block';
        document.getElementById('response').style.display = 'none';
    }

    // Scroll ke atas otomatis
    window.scrollTo(0, 0);
}

// Fungsi Membuka Order dari Produk
function openOrder(productName) {
    showPage('kontak');
    document.getElementById('order_name').value = productName;
}

// Handler Form Pemesanan
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const order = document.getElementById('order_name').value;

    // Menampilkan hasil di Response Box
    const resultDiv = document.getElementById('resultData');
    resultDiv.innerHTML = `
        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><b>Nama:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Pesanan:</b> ${order}</p>
        </div>
    `;

    // Sembunyikan Form, Tampilkan Response
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('response').style.display = 'block';
});
