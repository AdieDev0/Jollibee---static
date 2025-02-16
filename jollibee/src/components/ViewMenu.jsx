import React from "react";
import SidebarMenu from "./SidebarMenu";

const ViewMenu = () => {
  return (
    <div className="flex flex-col">
      {/* Sidebar Menu */}
      <SidebarMenu />
      {/* Best Seller */}
      <div className="w-full p-10">
        <p className="text-center font-bold text-3xl">Best Sellers</p>
      </div>
    </div>
  );
};

export default ViewMenu;
