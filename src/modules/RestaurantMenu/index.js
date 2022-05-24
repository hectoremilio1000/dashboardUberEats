import React from "react";

import { Card, Table, Button } from "antd";
import dishes from "../../assets/data/dishes.json";
import { Link, useNavigate } from "react-router-dom";

function RestaurantMenu() {
  const navigate = useNavigate();
  const tableColumns = [
    {
      title: "Menu Item",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: price => `$${price}`,
    },
    {
      dataIndex: "Action",
      key: "action",
      render: () => <Button danger>remove</Button>,
    },
  ];

  const renderNewItemButton = () => {
    return (
      <Button type="primary" onClick={() => navigate("create")}>
        <span>New Item</span>
      </Button>
    );
  };

  return (
    <Card title={"Menu"} style={{ padding: 20 }} extra={renderNewItemButton()}>
      <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
    </Card>
  );
}

export default RestaurantMenu;
