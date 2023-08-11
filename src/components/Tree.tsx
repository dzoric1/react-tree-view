import React, { useMemo } from "react";
import { Directory } from "./Directory";
import { File } from "../types/File";
import { FileIcon } from "../Icons/File";
import { Item } from "./Item";

export const Tree = ({
  root,
}: React.PropsWithChildren<{ root: File }>): JSX.Element => {
  const color_gen = useMemo(
    () => Math.floor(Math.random() * 16777215).toString(16),
    []
  );



  const onItemClicked = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <ul
      style={{ borderLeftColor: `#${color_gen}`, borderLeftWidth: 2 }}
      className="p-2 pt-0 ml-2 mb-0 mt-0 pb-0 menu bg-default text-content-700 flex-1"
    >
      {root.children &&
        root.children.map((item, index) => {
          if (item.children && item.children.length > 0)
            return (
              <Directory
                key={item.title}
                item={item}
              />
            );
          return (
            <Item
              key={item.title}
              onClick={onItemClicked}
            >
              <span className=" hover:bg-gray-100 transition block pl-0 p-2 truncate">
                <FileIcon />
                {item.title}
              </span>
            </Item>
          );
        })}
    </ul>
  );
};