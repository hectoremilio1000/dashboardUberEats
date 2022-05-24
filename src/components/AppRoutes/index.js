import DetailedOrder from "../../modules/DetailedOrder";
import Orders from "../../modules/Orders/index";
import { Routes, Route } from "react-router-dom";
import RestaurantMenu from "../../modules/RestaurantMenu";
import CreateMenuItem from "../../modules/modules/CreateMenuItem";
import OrderHistory from "../../modules/OrderHistory";
import Settings from "../../modules/Settings/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
      <Route path="menu" element={<RestaurantMenu />} />
      <Route path="menu/create" element={<CreateMenuItem />} />
      <Route path="orderhistory" element={<OrderHistory />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
