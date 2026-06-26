import { createSlice } from "@reduxjs/toolkit";

const ownerSlice = createSlice({
  name: "owner",
  initialState: {
    myShopData: null,
  },
  reducers: {
    setMyShopData: (state, action) => {
      state.myShopData = action.payload;
    },
  },
});

// ऐक्शन्स और रिड्यूसर को सही तरीके से एक्सपोर्ट करना
export const { setMyShopData } = ownerSlice.actions;
export default ownerSlice.reducer;