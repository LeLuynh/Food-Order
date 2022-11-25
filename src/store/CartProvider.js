import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //kiem tra hang da vao gio hay chua
    const existingCart = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //se hoat dong khi da co mat hang
    const existingCartItem = state.items[existingCart];
    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, //cap nhap lai so luong vi so luong bay gio can phai thay doi
      };
      updateItems = [...state.items]; //sao chep lai mang moi
      updateItems[existingCart] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type = "DELETE_ITEM") {
    const existingCart = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingCart];
    const updateTotalAmount = state.totalAmount - existingItem.price;
    let updateItems;
    // kiem tra mat hang hien tai so tien bang 1 hay khong
    if (existingItem.amount === 1) {
      //kiem tra id co phai la action khong (neu item.id != action.id thi duoc giu lai)
      // != => true, == => flase => xoa khoi mang moi duoc tao
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // neu lon hon 1 thi se cap nhap lai so luong
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existingCart] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addItemHandle = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandle = (id) => {
    dispatchCart({ type: "DELETE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandle,
    removeItem: removeItemHandle,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
