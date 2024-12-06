import { formatCurrency } from "../helpers";
import { OrderItem } from "../types/type";
import { useMemo } from "react";

type OrderProps = {
  order: OrderItem[];
  tip: number;
};

export default function Totals({ order, tip }: OrderProps) {
  const subtotal = useMemo(
    () => order.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    [order]
  );
  const tipTotal = useMemo(() => subtotal * tip, [tip]);
  const total = useMemo(() => subtotal + tipTotal, [tip]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotal)}</span>
        </p>
        <p>
          Propina: <span className="font-bold">{formatCurrency(tipTotal)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
    </>
  );
}
