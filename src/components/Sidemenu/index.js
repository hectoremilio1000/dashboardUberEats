import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

function SideMenu() {
  const navigate = useNavigate();
  const onClick = async menuItem => {
    if (menuItem.key === "signOut") {
      await Auth.signOut();
      window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };
  const menuItem = [
    {
      key: "/",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Menu",
    },
    {
      key: "orderhistory",
      label: "Order History",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "signOut",
      label: "Sign Out",
      danger: "true",
    },
  ];

  return <Menu items={menuItem} onClick={onClick} />;
}

export default SideMenu;
