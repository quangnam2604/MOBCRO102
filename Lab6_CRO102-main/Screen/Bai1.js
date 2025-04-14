// Bai1.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../Bai1/store';
import { increment, decrement, multiply, RESET_COUNTER } from '../Bai1/counterSlice';

const CounterApp = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Biến đếm: {count}</Text>

            <View style={styles.button}>
                <Button title="Tăng biến đếm" onPress={() => dispatch(increment(1))} />
            </View>
            <View style={styles.button}>
                <Button title="Giảm biến đếm" onPress={() => dispatch(decrement(1))} />
            </View>
            <View style={styles.button}>
                <Button title="Mũ bình phương biến đếm" onPress={() => dispatch(multiply(2))} />
            </View>
            <View style={styles.button}>
                <Button title="Reset biến đếm" onPress={() => dispatch(RESET_COUNTER)} />
            </View>
        </View>
    );
};

export default function Bai1() {
    return (
        <Provider store={store}>
            <CounterApp />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        backgroundColor: '#fff',
    },
    counterText: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        marginBottom: 20,
    },
});
// dispatch được gọi, action increment(1) sẽ được gửi lên Redux, và reducer increment sẽ cộng 1 vào giá trị state.value.