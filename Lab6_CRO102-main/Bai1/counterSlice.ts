import { createSlice } from '@reduxjs/toolkit';

export const RESET_COUNTER = { type: 'RESET_COUNTER' };

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    }, //3 reducer được định nghĩa trong slice để cập nhật giá trị biến đếm
    reducers: {
        increment: (state, action) => {
            state.value += action.payload; //action.payload: nơi dữ liệu truyền vào
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        multiply: (state) => {
            state.value *= state.value; // bình phương giá trị hiện tại, là cú pháp viết tắt của state.value = state.value * state.value;
            // Ba hàm increment, decrement, và multiply kia đều nằm trong reducers, 
            // chúng là các "action handler" chính thức của slice, do chính Redux Toolkit tạo giúp
        },
    },
    extraReducers: (builder) => {
        builder.addCase(RESET_COUNTER.type, (state) => {
            state.value = 0;
        });
    },
});

export const { increment, decrement, multiply } = counterSlice.actions;
export default counterSlice.reducer;
//extraReducers xử lý action được chính mình định nghĩa