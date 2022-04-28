const itemListData = [
  {
    id: 1,
    type: "Graphics Cards",
    title: "GEFORCE EVGA RTX 3090 24GB FTW3 ULTRA GAMING",
    description: "",
    price: 510.999,
    imageURL: "https://armytech.com.ar/Image/0/450_450-24G-P5-3987-KR_XL_1.jpg",
    stock: 6,
  },
  {
    id: 2,
    type: "Graphics Cards",
    title: "GEFORCE RTX 3090 24GB TRINITY OC ZOTAC GAMING",
    description: "",
    price: 549.999,
    imageURL:
      "https://armytech.com.ar/Image/0/450_450-zt-a30900j-10p-image01.jpg",
    stock: 4,
  },
  {
    id: 3,
    type: "Graphics Cards",
    title: "RADEON RX 6900 XT 16GB NITRO+ TRIPLE FAN GDDR6",
    description: "",
    price: 399.999,
    imageURL: "https://armytech.com.ar/Image/0/450_450-OIP_(10)1.jfif",
    stock: 10,
  },
  {
    id: 4,
    type: "Graphics Cards",
    title: "RADEON RX 6900 XT 16GB GIGABYTE OC",
    description: "",
    price: 349.999,
    imageURL: "https://armytech.com.ar/Image/0/450_450-img8.png",
    stock: 15,
  },
  {
    id: 5,
    type: "Graphics Cards",
    title: "RADEON RX 6900 XT 16GB GAMING X TRIO MSI",
    description: "",
    price: 309.999,
    imageURL:
      "https://armytech.com.ar/Image/0/450_450-product_1612246958fa75eb32b6ae31058dbd816d78fb3d0e.png",
    stock: 20,
  },
];

const getItemListData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(itemListData);
  }, 5000);
});

export default getItemListData;
