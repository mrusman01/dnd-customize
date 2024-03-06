"use client";
import { MainContext } from "@/utils/context";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useContext } from "react";
// import { data, setData } from "../../utils/context";

export function Item(props) {
  const { id } = props;

  const { data, buttonStyle } = useContext(MainContext);
  const style = {
    backgroundColor: data.id === id ? buttonStyle : "#ffff",
    color: "#000",
    textAlign: "center",
    fontFamily: "Roboto",
    padding: "15px",
    marginTop: "20px",
    border: data.id === id && "2px solid red",
  };

  return <div style={style}>{id}</div>;
}

export default function Droppable(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
}
1;
