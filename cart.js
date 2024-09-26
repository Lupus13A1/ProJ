// ฟังก์ชันสำหรับอัปเดตจำนวนสินค้าที่อยู่ในตะกร้า
const updateCartCount = () => {
  const cartItemCount = document.getElementById("cartItemCount");
  cartItemCount &&
    (cartItemCount.textContent = (
      JSON.parse(localStorage.getItem("cart")) || []
    ).length);
};

// เรียกใช้ฟังก์ชันนี้เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", updateCartCount);
