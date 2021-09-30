import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "sticky",
    bottom: "10vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTaskList.com</p>
    </footer>
  );
};
