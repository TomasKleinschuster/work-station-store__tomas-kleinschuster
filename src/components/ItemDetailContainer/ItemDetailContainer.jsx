import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const getItemDetailData = () => {
  const detailPromise = new Promise((resolve, reject) => {
    const itemDetailData = {
      id: 1,
      type: "Graphics Cards",
      title: "GEFORCE EVGA RTX 3090 24GB FTW3 ULTRA GAMING",
      videoOutput: "HDMI",
      memory: "24GB",
      graphics:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p.png",
      price: 510.999,
      imageURL:
        "https://armytech.com.ar/Image/0/450_450-24G-P5-3987-KR_XL_1.jpg",
      stock: 6,
    };
    setTimeout(() => {
      resolve(itemDetailData);
    }, 2000);
  });
  return detailPromise;
};

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getItemDetailData()
      .then((res) => {
        setDetail(res);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
