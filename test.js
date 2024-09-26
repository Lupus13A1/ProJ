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
