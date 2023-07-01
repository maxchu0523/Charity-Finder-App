import { createSlice } from '@reduxjs/toolkit'
import { FavouriteNonprofit } from '../interface';



const initialState: FavouriteNonprofit[] = [];

export const favouriteNonprofitSlice = createSlice({
  name: 'favouriteNonprofit',
  initialState,
  reducers: {
    addFavouriteNonprofit: (state, action) => {
        state.push({ein : action.payload.ein, name: action.payload.name});
        return state;
    },
    removeFavouriteNonprofit: (state, action) => {
        return state.filter(nonprofit => nonprofit.ein == action.payload.ein);
    },
  },
})

export const { addFavouriteNonprofit, removeFavouriteNonprofit } = favouriteNonprofitSlice.actions

export const reducer = favouriteNonprofitSlice.reducer