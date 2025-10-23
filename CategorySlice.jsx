import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: "category",
    initialState:{
        category : "All"
    },

    reducers:{
        setCatagory : (state,action) => {
            state.category = action.payload;
        }
    }

})

export  const  {setCatagory} = CategorySlice.actions;

export default CategorySlice.reducer;

