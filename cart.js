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
