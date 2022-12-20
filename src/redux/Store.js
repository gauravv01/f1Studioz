import { configureStore } from "@reduxjs/toolkit";

import FormData from "./FormDataSlice";

const store=configureStore({
    reducer:{ColectFormDataSlice:FormData.reducer}
});

export default store;