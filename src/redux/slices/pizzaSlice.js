import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza = createAsyncThunk('pizza/fetchPizzaStatus',  async (params) => {
    const {categoryQwParams, sortQwParams, searchQwParams} = params;

    const { data } = await axios.get(`https://63305878591935f3c88e2d7a.mockapi.io/items?${categoryQwParams}${sortQwParams}${searchQwParams}`);
    return data
  }
);

const initialState = {
    items: [],
    status: 'loading'
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.items =  action.payload;
        },
    },
    extraReducers: {
        [fetchPizza.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        },
        [fetchPizza.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
    }
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer