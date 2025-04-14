import React from 'react';
import { Provider } from 'react-redux';
import Bai3 from '../Screen/Bai3';
import store from '../Bai3/store';

export default function Bai3Wrapper() {
    return (
        <Provider store={store}>
            <Bai3 />
        </Provider>
    );
}
