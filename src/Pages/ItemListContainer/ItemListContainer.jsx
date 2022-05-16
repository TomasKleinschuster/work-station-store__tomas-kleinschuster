import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonCounter from "../../components/Buttons/ButtonCounter";
import ItemList from "../../components/ItemList/ItemList";

const getProducts = (category) => {
  const productsPromise = new Promise((resolve, reject) => {
    const productsList = [
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
    const productsListFiltered = category
      ? productsList.filter((p) => p.category === category)
      : productsList;
    setTimeout(() => {
      resolve(productsListFiltered);
    }, 5000);
  });
  return productsPromise;
};

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  // const myCartContext = useContext(CartContext);

  // useEffect(() => {
  //   console.log(myCartContext.product);
  // }, []); // Array de dependencia vacio para que se ejecute solamente al inicio del componente

  useEffect(() => {
    console.log(categoryId);
    getProducts(categoryId)
      .then((res) => setProducts(res))
      .catch((err) => console.log("error: ", err));
  }, [categoryId]);

  return (
    <div className="itemListContainer-container">
      <h1 className="font-extrabold text-5xl text-white mb-6 mt-8">
        {greeting}
      </h1>
      <ItemList products={products} />
      <ButtonCounter title="Number of clicks: " classText="buttonCounter" />
    </div>
  );
};

export default ItemListContainer;
