import React from "react";

const Container = ({ children, mt }) => {
  return <div className={`max-w-[1124px] m-auto p-4 ${mt}`}>{children}</div>;
};

Container.defaultProps = {
  mt: "mt-0",
};

export default Container;
