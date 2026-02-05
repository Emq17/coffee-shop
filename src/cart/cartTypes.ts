export type CartOption = { id: string; name: string; price: number };

export type CartLine = {
  lineId: string;        // unique per configured item
  itemId: string;
  name: string;
  basePrice: number;

  qty: number;

  milk?: CartOption;     // 0 or 1
  addIns: CartOption[];  // many
  foam?: CartOption;     // 0 or 1
  notes?: string;
};

export type CartState = {
  lines: CartLine[];
};
