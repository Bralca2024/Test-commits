import { useState } from "react";
import type { MenuType, OrderItem } from "../types/type";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addNewOrder = (item: MenuType) => {
    const index = order.findIndex((orderItem) => orderItem.id === item.id);

    if (index === -1) {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const updateOrder = [...order];
      order[index].quantity++;
      setOrder(updateOrder);
    }
  };

  const removeOrder = (id: MenuType["id"]) => {
    setOrder((prev) => prev.filter((item) => item.id !== id));
  };

  const clearOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return { order, tip, setTip, addNewOrder, removeOrder, clearOrder };
}
