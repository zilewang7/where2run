import { createSlice } from "@reduxjs/toolkit";

interface userState {
    username?: string,
    userList: {
        username: string,
        password: string
    }[]
}

const defaultState: userState = {
    username: undefined,
    userList: [
        {
            username: 'admin',
            password: 'admin'
        }
    ]
}


const userSlice = createSlice(
    {
        name: 'user',
        initialState: defaultState,
        reducers: {
            addUser: (state, action) => {
                state.userList.push(
                    action.payload
                )
            },
            logIn: (state, action) => {
                state.username = action.payload;
            },
            logOut: (state) => {
                state.username = undefined;
            },
            getUserLocalStorage: (_, action) => {
                return {
                    ...action.payload
                }
            }
        },
    }
)

export const { addUser, logIn, logOut, getUserLocalStorage } = userSlice.actions

export default userSlice.reducer;