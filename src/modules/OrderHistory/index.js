import React from "react";
import ordersHistory from "../../assets/data/orders-history.json";
import { Card, Table, Tag } from "antd";

function OrderHistory() {
  const tableColumns = [
    { title: "Order ID", dataIndex: "orderID", key: "orderID" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "delivery Address",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: status => (
        <Tag color={status === "Delivered" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];
  return (
    <Card title={"Order History"} style={{ margin: 20 }}>
      <Table
        dataSource={ordersHistory}
        columns={tableColumns}
        rowKey="orderID"
      />
    </Card>
  );
}

export default OrderHistory;
