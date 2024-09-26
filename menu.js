const products = [
  {
    id: "1",
    category: ["ทอด"],
    image: "img/menu4.jfif",
    name: "ปลากระพงทอดกระเทียม",
    price: "270 บาท",
  },
  {
    id: "2",
    category: ["ทอด"],
    image: "img/menu6.jfif",
    name: "ปลากระพงทอดน้ำปลา",
    price: "270 บาท",
  },
  {
    id: "3",
    category: ["ทอด"],
    image: "img/menu5.jfif",
    name: "กบทอดกระเทียม ",
    price: "100 บาท",
  },
  {
    id: "4",
    category: ["ต้ม"],
    image: "img/menu11.jfif",
    name: "ต้มยำกุ้ง",
    price: "150 บาท",
  },
  {
    id: "5",
    category: ["ต้ม"],
    image: "img/menu1.jfif",
    name: "ตัมยำปลาคัง",
    price: "150 บาท",
  },
  {
    id: "6",
    category: ["ต้ม"],
    image: "img/menu10.jfif",
    name: "ต้มซุปเปอร์ขาไก่",
    price: "150 บาท",
  },
  {
    id: "7",
    category: ["ยำ"],
    image: "img/menu2.jfif",
    name: "ยำวุ้นเส้น",
    price: "100 บาท",
  },
  {
    id: "8",
    category: ["ยำ"],
    image: "img/menu12.jfif",
    name: "ยำรวมมิตรทะเล ",
    price: "120 บาท",
  },
  {
    id: "9",
    category: ["ยำ"],
    image: "img/menu3.jfif",
    name: "หมูมะนาว",
    price: "100 บาท",
  },
  {
    id: "10",
    category: ["ยำ"],
    image: "img/menu7.jfif",
    name: "ลาบหมู",
    price: "100 บาท",
  },
  {
    id: "11",
    category: ["ยำ"],
    image: "img/menu8.jfif",
    name: "ลาบปลาบึก",
    price: "100 บาท",
  },
];

const projectSection = document.getElementById("Projects");
products.forEach((product) => {
  const productHTML = `
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="detail.html" onclick="saveProductDetails('${product.id}')">
        <img src="${product.image}" alt="${product.name}" class="h-80 w-72 object-cover rounded-t-xl" />
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">${product.category}</span>
          <p class="text-lg font-bold text-black truncate block capitalize">${product.name}</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
          </div>
        </div>
      </a>
    </div>
  `;
  projectSection.innerHTML += productHTML;
});

document.addEventListener("DOMContentLoaded", () => {
  const projectSection = document.getElementById("product");
  console.log(projectSection); // ตรวจสอบค่า
  if (projectSection) {
    products.forEach((product) => {
      const menutoindex = `
        <div class="product-img">
          <img src="${product.image}" alt="">
        </div>
        <div class="product-body">
          <p class="product-category">${product.category}</p>
          <h3 class="product-name"><a href="product.html">${product.name}</a></h3>
          <h4 class="product-price">${product.price}</h4>
          <div class="product-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
        </div>
      `;
      projectSection.innerHTML += menutoindex;
    });
  } else {
    console.error('Element with id "product" not found');
  }
});

// ฟังก์ชั่นสำหรับบันทึกข้อมูลสินค้าที่เลือก
function saveProductDetails(productId) {
  const selectedProduct = products.find((product) => product.id === productId);
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}
