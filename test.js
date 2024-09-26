// เปิด modal เมื่อกดปุ่ม
document
  .getElementById("openModalButton")
  .addEventListener("click", function () {
    document.getElementById("videoModal").classList.remove("hidden");
  });

// ปิด modal เมื่อกดปุ่มปิด
document
  .getElementById("closeModalButton")
  .addEventListener("click", function () {
    var videoModal = document.getElementById("videoModal");
    var iframe = document.getElementById("youtubeVideo");

    // หยุดเล่นวิดีโอเมื่อปิด modal
    iframe.src = iframe.src;

    // ซ่อน modal
    videoModal.classList.add("hidden");
  });

// ฟังก์ชันสำหรับอัปเดตจำนวนสินค้าที่อยู่ในตะกร้า
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemCount = document.getElementById("cartItemCount");

  // ตรวจสอบว่ามี element ที่มี ID นี้อยู่ในหน้า
  if (cartItemCount) {
    cartItemCount.textContent = cart.length;
  }
}

// เรียกใช้ฟังก์ชันนี้เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", updateCartCount);
