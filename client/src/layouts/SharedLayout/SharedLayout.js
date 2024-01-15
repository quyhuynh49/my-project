import React from "react";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div>
      SharedLayout
      <Outlet />
    </div>
  );
}

export default SharedLayout;
