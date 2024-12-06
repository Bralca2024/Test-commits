import type { MenuType } from "../types/type";

type MenuProps = {
  item: MenuType;
  addNewOrder: (item: MenuType) => void;
};

export default function Menu({ item, addNewOrder }: MenuProps) {
  const { name, price } = item;

  return (
    <>
      <button
        className="flex justify-between border-2 border-teal-400 rounded p-4 hover:bg-teal-400 transition"
        onClick={() => addNewOrder(item)}
      >
        <p className="font-medium">{name}</p>
        <p className="font-bold">${price}</p>
      </button>
    </>
  );
}
