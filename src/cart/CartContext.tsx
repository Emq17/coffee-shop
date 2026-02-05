import React, { createContext, useContext, useMemo, useReducer } from "react";
import type { CartLine, CartState } from "./cartTypes";


type AddPayload = Omit<CartLine, "qty"> & { qty?: number };

type Action =
  | { type: "ADD_LINE"; payload: AddPayload }
  | { type: "INC_QTY"; lineId: string }
  | { type: "DEC_QTY"; lineId: string }
  | { type: "REMOVE_LINE"; lineId: string }
  | { type: "CLEAR" };

const CartCtx = createContext<{
  state: CartState;
  addLine: (payload: AddPayload) => void;
  inc: (lineId: string) => void;
  dec: (lineId: string) => void;
  remove: (lineId: string) => void;
  clear: () => void;
  subtotal: number;
} | null>(null);

function lineTotal(line: CartLine) {
  const optionsTotal =
    (line.milk?.price ?? 0) +
    (line.foam?.price ?? 0) +
    line.addIns.reduce((sum, x) => sum + x.price, 0);

  return (line.basePrice + optionsTotal) * line.qty;
}

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_LINE": {
      const qty = action.payload.qty ?? 1;
      const newLine: CartLine = { ...action.payload, qty };

      return { lines: [newLine, ...state.lines] };
    }
    case "INC_QTY":
      return {
        lines: state.lines.map((l) =>
          l.lineId === action.lineId ? { ...l, qty: l.qty + 1 } : l
        ),
      };
    case "DEC_QTY":
      return {
        lines: state.lines
          .map((l) =>
            l.lineId === action.lineId ? { ...l, qty: Math.max(1, l.qty - 1) } : l
          ),
      };
    case "REMOVE_LINE":
      return { lines: state.lines.filter((l) => l.lineId !== action.lineId) };
    case "CLEAR":
      return { lines: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });

  const subtotal = useMemo(
    () => state.lines.reduce((sum, l) => sum + lineTotal(l), 0),
    [state.lines]
  );

  const api = useMemo(
    () => ({
      state,
      subtotal,
      addLine: (payload: AddPayload) => dispatch({ type: "ADD_LINE", payload }),
      inc: (lineId: string) => dispatch({ type: "INC_QTY", lineId }),
      dec: (lineId: string) => dispatch({ type: "DEC_QTY", lineId }),
      remove: (lineId: string) => dispatch({ type: "REMOVE_LINE", lineId }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state, subtotal]
  );

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
