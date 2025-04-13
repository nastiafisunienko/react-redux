import { fireEvent, render, screen } from '@testing-library/react';
import SavedBook from './SavedBook';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { deleteFavorite } from './favoriteSlice';

const mockReducer = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        deleteFavorite: (state, action) => {
            return state.filter(fav => fav.id !== action.payload.id);
        }
    }
});

const store = configureStore({
    reducer: {
        favorite: mockReducer.reducer
    }
});

describe("SavedBook component", () => {

    it("makes a snapshot", () => {
        const { asFragment } = render(
            <Provider store={store}>
                <SavedBook title="Book Title" desc="Description" src="image.jpg" author="Author" id="1"/>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("button delete with id works", () => {
        const mockDispatch = jest.fn();
        store.dispatch = mockDispatch;

        render(
            <Provider store={store}>
                <SavedBook title="Book Title" desc="Description" src="image.jpg" author="Author" id="1"/>
            </Provider>
        );

        const button = screen.getByRole("button"); 
     
        expect(button).toBeInTheDocument(); 

        fireEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(deleteFavorite({ id: "1" }));
    });
});