import { configureStore } from "@reduxjs/toolkit";
import { apiLibros } from "./reducer";
import { apiQuotes } from "./reducer";
import favoriteReducer from "./favoriteSlice"
import commentsReducer from "./commentSlice"
export const store = configureStore({
reducer: {
    [apiLibros.reducerPath] : apiLibros.reducer,
    [apiQuotes.reducerPath] : apiQuotes.reducer,
    "favorite" : favoriteReducer,
    "comments" : commentsReducer,
},
middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiLibros.middleware, apiQuotes.middleware)
})
