import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/admin/auth/authSlice";
//import CartReducer from "../features/customer/cart/CartSlice";
import BrandReducer from "../features/admin/brandManagement/brandSlice";
import ProductsReducer from "../features/admin/ProductManagement/ProductSlice";
import OrderReducer from "../features/admin/OrderManagement/OrderSlice";
import HomeReducer from "../features/customer/home/HomeSlice";
import CartDetailsReducer from "../features/customer/cart/CartSlice"
import CheckoutReducer from "../features/customer/checkout/checkoutSlice"


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
   // cart: CartReducer,
    brand: BrandReducer,
    orders: OrderReducer,
    home: HomeReducer,
    cartDetails: CartDetailsReducer,
    checkout: CheckoutReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
