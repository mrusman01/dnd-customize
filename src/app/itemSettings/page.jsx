import { MainContext } from "@/utils/context";
import React, { useContext, useState } from "react";

const containerStyle = {
  padding: 10,
  margin: 10,
  flex: 1,
  border: "1px solid #ccc",
  borderRadius: "10px",
  height: "90vh",
};
const ItemSettings = () => {
  const { data, setData, setItems, bgStyle, setButtonStyle } =
    useContext(MainContext);

  const [openInput, setOpenInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddBorder = () => {
    console.log(data, "---------------active array object");
    const itemIndex = data.data.current.sortable.index;
    const newData = data.data.current.sortable.items.map((item, i) => {
      if (itemIndex === i) {
        const edit = (data.data.current.sortable.items[itemIndex] = inputValue);

        return edit;
      }
      return item;
    });

    setItems((prevState) => ({
      ...prevState,
      container1: newData,
    }));
    console.log(newData, "--------edit item--------");
  };

  const handleAddColor = () => {
    setButtonStyle(bgStyle);
  };
  return (
    <div style={containerStyle}>
      <button onClick={handleAddBorder}>edit</button>
      <input
        type="text"
        className="text-black"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddColor}>Bg Color</button>
    </div>
  );
};
export default ItemSettings;
