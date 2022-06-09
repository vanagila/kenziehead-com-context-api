import { createContext, useState } from "react";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Logitech G Headset Gamer G335",
      price: 419.0,
      img: "https://m.media-amazon.com/images/I/818hultxskS._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "Headset Gamer Sem Fio Logitech G435",
      price: 549.9,
      img: "https://m.media-amazon.com/images/I/81bQEkMevBL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      name: "Dell Headset Gamer Alienware 7.1",
      price: 659.0,
      img: "https://m.media-amazon.com/images/I/71WoT9J1FjL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      name: "Fone de Ouvido Bluetooth JBL Tune 510BT Pure Bass",
      price: 207.0,
      img: "https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_SL1500_.jpg",
    },
    {
      id: 5,
      name: "Redragon HEADSET GAMER HERO BRANCO COM VERMELHO RGB",
      price: 269.0,
      img: "https://m.media-amazon.com/images/I/619ka5nrgOL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      name: "Redragon HEADSET GAMER HERO ROSA RGB",
      price: 275.0,
      img: "https://m.media-amazon.com/images/I/61E9jr6KVwL._AC_SL1500_.jpg",
    },
    {
      id: 7,
      name: "Redragon HEADSET GAMER HERO PRETO RGB",
      price: 269.0,
      img: "https://m.media-amazon.com/images/I/615SnzHjhJL._AC_SL1500_.jpg",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
