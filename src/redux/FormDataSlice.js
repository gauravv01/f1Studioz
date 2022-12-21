import { createSlice } from "@reduxjs/toolkit";
import Data from '../Data/RandomTableData/Random'

const FormData = createSlice({
  name: "ColectFormDataSlice",
  initialState: { dataArray: [...Data] , Changed:false , formFilled:false , formWillEdit:false},
  reducers: {
    CollectItems(state, action) {
      let data = action.payload;
      const id=state.dataArray[state.dataArray.length-1].id;
      data={...data,id:id+1};
      state.dataArray.push(data);
    },
    OpenCart(state){
        state.Changed=true
    } ,
    CloseCart(state){
      state.Changed=false
  } ,
   FormisFilled(state){
state.formFilled=true;
  },
  EditForm(state){
    state.formWillEdit=true;
    state.formFilled=false;
  },
  AddMoreForm(state){
    state.formFilled=false;
  },
  DeleteItem(state,action){
    const id=action.payload;
    let updatedItems;
    updatedItems=state.dataArray.filter(item=>item.id!==id);
    state.dataArray=updatedItems;
    state.formFilled=false;
  },
  ConfirmForm(state,action){
    let data=action.payload;
    state.dataArray.pop();
    const id=state.dataArray[state.dataArray.length-1].id;
    data={...data,id:id+1};
    state.dataArray.push(data);
    state.formWillEdit=false;
    state.formFilled=true;
  }
},
});

export const FormActions = FormData.actions;

export default FormData;