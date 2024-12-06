export type MenuType = {
  id: number;
  name: string;
  price: number;
};

export type OrderItem = MenuType & {
  quantity: number;
};
