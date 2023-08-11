import React from "react";

const Layout = ({ children }): JSX.Element => {
  return <div className="px-5 py-5 flex w-full justify-between">{children}</div>;
};

export default Layout;