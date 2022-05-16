import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import CartContext from "../../Context/cartContext";

const getItemDetailData = (id) => {
  const detailPromise = new Promise((resolve) => {
    const itemDetailData = [
      {
        id: 1,
        category: "GraphicsCards",
        title: "GEFORCE EVGA RTX 3090 24GB FTW3 ULTRA GAMING",
        memory: "24GB",
        Manufacturer: "",
        graphics:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p.png",
        price: 510.999,
        imageURL:
          "https://armytech.com.ar/Image/0/450_450-24G-P5-3987-KR_XL_1.jpg",
        stock: 6,
      },
      {
        id: 2,
        category: "GraphicsCards",
        title: "GEFORCE RTX 3090 24GB TRINITY OC ZOTAC GAMING",
        memory: "24GB",
        Manufacturer: "",
        graphics:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p.png",
        price: 549.999,
        imageURL:
          "https://armytech.com.ar/Image/0/450_450-zt-a30900j-10p-image01.jpg",
        stock: 4,
      },
      {
        id: 3,
        category: "GraphicsCards",
        title: "RADEON RX 6900 XT 16GB NITRO+ TRIPLE FAN GDDR6",
        memory: "16GB",
        Manufacturer: "https://compragamer.net/assets/media/420x170/2.jpg",
        graphics:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p.png",
        price: 399.999,
        imageURL: "https://armytech.com.ar/Image/0/450_450-OIP_(10)1.jfif",
        stock: 10,
      },
      {
        id: 4,
        category: "GraphicsCards",
        title: "RADEON RX 6900 XT 16GB GIGABYTE OC",
        memory: "16GB",
        Manufacturer: "https://compragamer.net/assets/media/420x170/2.jpg",
        graphics:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p.png",
        price: 349.999,
        imageURL: "https://armytech.com.ar/Image/0/450_450-img8.png",
        stock: 15,
      },
      {
        id: 5,
        category: "Processors",
        title: "AMD Ryzen 9 5900X 12-core, 24-Thread",
        Model: "Ryzen 9",
        Speed: "4.8 GHz",
        Manufacturer: "https://compragamer.net/assets/media/420x170/1.jpg",
        price: 219.999,
        imageURL:
          "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg",
        stock: 10,
      },
      {
        id: 6,
        category: "Processors",
        title: "AMD Ryzen 9 5900X 12-core, 24-Thread",
        Model: "Ryzen 9",
        Speed: "4.8 GHz",
        Manufacturer: "https://compragamer.net/assets/media/420x170/1.jpg",
        price: 219.999,
        imageURL:
          "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg",
        stock: 10,
      },
      {
        id: 7,
        category: "Processors",
        title: "AMD Ryzen 9 5900X 12-core, 24-Thread",
        Model: "Ryzen 9",
        Speed: "4.8 GHz",
        Manufacturer: "https://compragamer.net/assets/media/420x170/1.jpg",
        price: 219.999,
        imageURL:
          "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg",
        stock: 10,
      },
      {
        id: 8,
        category: "Processors",
        title: "AMD Ryzen 9 5900X 12-core, 24-Thread",
        Model: "Ryzen 9",
        Speed: "4.8 GHz",
        Manufacturer: "https://compragamer.net/assets/media/420x170/1.jpg",
        price: 219.999,
        imageURL:
          "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg",
        stock: 10,
      },
    ];

    const item = itemDetailData.filter((item) => item.id === parseInt(id));

    setTimeout(() => {
      resolve(item[0]);
    }, 2000);
  });
  return detailPromise;
};

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const myCartContext = useContext(CartContext);

  useEffect(() => {
    console.log(myCartContext);
  }, [myCartContext]);

  useEffect(() => {
    getItemDetailData(id)
      .then((res) => setDetail(res))
      .catch((err) => console.log("Error: " + err));
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center">
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
