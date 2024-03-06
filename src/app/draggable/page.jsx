"use client";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Droppable from "../droppable/page";
import { useContext } from "react";
import { MainContext } from "@/utils/context";

const containerStyle = {
  // background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1,
  border: "1px solid #ccc",
  borderRadius: "10px",
  height: "90vh",
};

export default function Draggable(props) {
  const { id, items } = props;
  const { data } = useContext(MainContext);

  const { setNodeRef } = useDroppable({
    id,
  });

  // console.log(items);
  return (
    <SortableContext
      id={id}
      items={items || []}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} style={containerStyle}>
        {Array.isArray(items) &&
          items.map((id, i) => <Droppable key={id} id={id} />)}
      </div>
    </SortableContext>
  );
}
