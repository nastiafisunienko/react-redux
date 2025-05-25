import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: 0,
    items : []
}

const favorite = createSlice({
    name: "favorite",
    initialState,

    reducers: {
        addFavorite : (state, action) => {
            let item = action.payload;

            const existe = state.items.find((elem) => elem.id === item.id)

            if (!existe) {
                state.items.push(item)
                state.favorites++
            }
        },

        deleteFavorite : (state, action) => {
            let item = action.payload.id
            state.items = state.items.filter((elem) => elem.id !== item)
            state.favorites--
        }
    }

})

export const {addFavorite, deleteFavorite} = favorite.actions
export default favorite.reducer