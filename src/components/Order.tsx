import { useMemo } from "react";
import { MenuType, OrderItem } from "../types/type";
import { formatCurrency } from "../helpers";

type OrderProps = {
  order: OrderItem[];
  removeOrder: (order: MenuType["id"]) => void;
};

export default function Order({ order, removeOrder }: OrderProps) {
  const isEmpty = useMemo(() => order.length === 0, [order]);

  return (
    <>
      {isEmpty ? (
        <p className="text-center">No hay ninguna orden</p>
      ) : (
        order.map((item, index) => (
          <div
            key={item.id}
            className={`flex justify-between items-center p-4 ${
              index === order.length - 1 ? "" : "border-b-2 border-gray-400/50"
            }`}
          >
            <div>
              <p>
                {item.name} - <span>{formatCurrency(item.price)}</span>
              </p>
              <p className="font-bold">
                Cantidad: <span>{item.quantity}</span> -{" "}
                <span>{formatCurrency(item.quantity * item.price)}</span>
              </p>
            </div>
            <button
              className="bg-red-600 text-white rounded-full h-6 w-6"
              onClick={() => removeOrder(item.id)}
            >
              X
            </button>
          </div>
        ))
      )}
    </>
  );
}
