import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./userSlice";

interface ShoppingCartState {
    username: string,
    ShoppingCart: string[]
}

const defaultState: ShoppingCartState[] = [
    {
        username: 'admin',
        ShoppingCart: ['114514', '1']
    },
]



const ShoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: defaultState,
    reducers: {
        addProduct2ShoppingCart: (state, action) => {
            state.forEach((i) => {
                if (i.username === action.payload.username) {
                    i.ShoppingCart.push(action.payload.id);
                }
            })
        },
        delProductFShoppingCart: (state, action) => {
            state.forEach((i) => {
                if (i.username === action.payload) {
                    i.ShoppingCart = [];
                }
            })
        },
        getShopCookie: (state, action) => {
            action.payload.forEach((i, index) => {
                state[index] = i;
            })
        }
    },
    extraReducers: {
        //环形引用，添加用户时自动为用户添加购物车
        [addUser.type]: (state, action) => {
            state.push({
                username: action.payload.username,
                ShoppingCart: []
            })
        },
    }
})


export const { addProduct2ShoppingCart, delProductFShoppingCart, getShopCookie } = ShoppingCartSlice.actions
export default ShoppingCartSlice.reducer;