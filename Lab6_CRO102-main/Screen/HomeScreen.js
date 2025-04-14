// HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Bài 1" onPress={() => navigation.navigate('Bài 1')} />
            <View style={styles.spacing} />
            <Button title="Bài 2" onPress={() => navigation.navigate('Bài 2')} />
            <View style={styles.spacing} />
            <Button title="Bài 3" onPress={() => navigation.navigate('Bài 3')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 60,
    },
    spacing: {
        height: 20,
    },
});
