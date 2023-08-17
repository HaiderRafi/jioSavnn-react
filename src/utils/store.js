import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

let store=configureStore({
    reducer:{
        search:searchSlice,

    }
});

export default store;