import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { File } from "../types/File";
import { DirectoryIcon } from "../Icons/Directory";
import { Item } from "./Item";
import { Tree } from "./Tree";

export const Directory = ({
  item,
}: React.PropsWithChildren<{
  item: File;
}>): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onItemClicked = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
    setToggle(!toggle);
  };

  return (
    <Item onClick={onItemClicked}>
      <span className=" hover:bg-gray-100 transition block pl-0 p-2 truncate fle">
        <DirectoryIcon />
        {item.title}
      </span>
      <Transition
        show={toggle}
        enter="transition-opacity duration-10"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-10"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Tree root={item} />
      </Transition>
    </Item>
  );
};