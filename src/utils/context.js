"use client";
import { createContext, useState } from "react";
export const MainContext = createContext();

const bgStyle = "#FFCA00";

const itemsArr = {
  root: ["1", "2", "3"],
  container1: ["4", "5", "6"],
};
// const itemsArr = {
//   root: [
//     { id: 1, title: "1", styles: { backgroundColor: "red" } },
//     { id: 2, title: "2", styles: { backgroundColor: "red" } },
//     { id: 3, title: "3", styles: { backgroundColor: "red" } },
//     { id: 4, title: "4", styles: { backgroundColor: "red" } },
//   ],
//   container1: ["4", "5", "6"],
// };
let initialArray = [
  { id: 1, title: "1", styles: { backgroundColor: "red" } },
  { id: 2, title: "2", styles: { backgroundColor: "red" } },
  { id: 3, title: "3", styles: { backgroundColor: "red" } },
  { id: 4, title: "4", styles: { backgroundColor: "red" } },
];
const ItemProvider = ({ children }) => {
  const [data, setData] = useState("context");
  const [items, setItems] = useState(itemsArr);
  const [buttonStyle, setButtonStyle] = useState({});
  const value = {
    data,
    setData,
    bgStyle,
    items,
    setItems,
    buttonStyle,
    setButtonStyle,
  };
  // console.log(items, "context -----api---------------");

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
export default ItemProvider;
