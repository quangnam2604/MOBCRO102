import React from 'react';
import { Provider } from 'react-redux';
import Bai1 from '../Screen/Bai1';
import store from '../Bai1/store';

export default function Bai1Wrapper() {
    return (
        <Provider store={store}>
            <Bai1 />
        </Provider>
    );
}
