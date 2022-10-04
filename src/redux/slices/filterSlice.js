import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortObj:   { name: 'популярности (DESC)', sortProperty: 'raiting' },
  searchValue: '',
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId =  action.payload;
    },
    setSort: (state, action) => {
      state.sortObj =  action.payload;
    },
    setSearchValue: (state, action) => {
        state.searchValue =  action.payload;
        console.log("action.payload",action.payload)
    },
    setFilters(state, action) {
        if (Object.keys(action.payload).length) {
        //   state.currentPage = Number(action.payload.currentPage);
          state.categoryId = Number(action.payload.categoryId);
          state.sort = action.payload.sort;
        } else {
        //   state.currentPage = 1;
          state.categoryId = 0;
          state.sort = {
            name: 'популярности (DESC)',
            sortProperty: 'rating',
          };
        }
    },
  },
})

export const selectFilters =  (state) => state.filters;

export const { setCategoryId, setSort, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer