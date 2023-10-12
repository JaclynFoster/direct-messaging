import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const displayUser = createSlice({
    name: 'displayUser',
    initialState: {
    user: {
        username: null,
        password: null
    }
    },
    reducers: {
    login: (state, action: PayloadAction<any>) => {
        state.user = action.payload
    },
    logout: state => {
        state.user = { username: null, password: null }
    }
    }
})

export const { login, logout } = displayUser.actions
export default displayUser.reducer
export const selectUser = (state: RootState) => state.displayUser.user


