import { createContext, useState } from "react";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "HyperX Cloud Flight Headset Wireless Gamer para PS5 e PS4",
      price: 699.0,
      brand: "HyperX",
      img: "https://epicgeek.com.br/wp-content/uploads/2021/12/HyperX-Cloud-Flight-Wireless.jpg",
    },
    {
      id: 2,
      name: "Headset HyperX CloudX Stinger Core Wireless Gamer para Xbox",
      price: 205.0,
      brand: "HyperX",
      img: "https://9to5toys.com/wp-content/uploads/sites/5/2021/09/hyperx-cloudx-stinger-core-wireless-1.jpg",
    },
    {
      id: 3,
      name: "Headset Gamer Sem Fio ALIENWARE TRI-MODE | AW920H – DARK SIDE OF THE MOON",
      price: 1504,
      brand: "Dell",
      img: "https://pcjow.com/wp-content/uploads/2022/01/alien.jpg",
    },
    {
      id: 4,
      name: "Headset Gamer Alienware 7.1 Aw510h Dark Side Of The Moon",
      price: 799.0,
      brand: "Dell",
      img: "https://www.showmetech.com.br/wp-content/uploads//2020/04/19-alienware-Alienware-AW510Hheadset-Review-hero.jpg",
    },
    {
      id: 5,
      name: "Redragon H350 Pandora",
      price: 242.0,
      brand: "Redragon",
      img: "https://cdn.shopify.com/s/files/1/2695/9506/files/redragon_h350_gaming_headset_2.jpg?v=1603364011",
    },
    {
      id: 6,
      name: "Redragon Lamia H320RGB",
      price: 229,
      brand: "Redragon",
      img: "https://www.manualdacompra.com.br/file/review/62/redragon-lamia-h320.jpg",
    },
  ]);

  const hyperXList = products.filter((product) => product.brand === "HyperX");
  const dellList = products.filter((product) => product.brand === "Dell");
  const redragonList = products.filter(
    (product) => product.brand === "Redragon"
  );

  return (
    <ProductContext.Provider
      value={{ products, hyperXList, dellList, redragonList, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
