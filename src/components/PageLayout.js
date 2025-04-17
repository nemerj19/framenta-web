import React from "react";
import "./PageLayout.css"; // Make sure this path is correct

function PageLayout({ children }) {
  return <div className="page-layout">{children}</div>;
}

export default PageLayout;
