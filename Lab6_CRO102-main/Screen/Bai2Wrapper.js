import React from 'react';
import { Provider } from 'react-redux';
import Bai2 from '../Screen/Bai2';
import store from '../Bai2/stores';

export default function Bai2Wrapper() {
    return (
        <Provider store={store}>
            <Bai2 />
        </Provider>
    );
}
