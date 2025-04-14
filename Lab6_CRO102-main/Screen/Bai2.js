// Bai2.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLazyGetPokemonByNameQuery } from '../Bai2/pokemonApi'; // nhớ đúng đường dẫn file API

export default function Bai2() {
    const [pokemonName, setPokemonName] = useState('');
    const [trigger, result] = useLazyGetPokemonByNameQuery();

    const handleSearch = () => {
        if (pokemonName.trim()) {
            trigger(pokemonName.toLowerCase());
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Thông tin pokemon {pokemonName}</Text>

            <TextInput
                style={styles.input}
                value={pokemonName}
                onChangeText={setPokemonName}
                placeholder="Nhập tên pokemon"
            />

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Tìm kiếm pokemon</Text>
            </TouchableOpacity>

            {result.isLoading && <Text>Đang tải dữ liệu...</Text>}
            {result.isError && <Text style={styles.error}>Không tìm thấy pokemon!</Text>}

            {result.data && (
                <Text style={styles.result}>
                    {JSON.stringify(result.data.abilities, null, 2)}
                </Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    result: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
    },
    error: {
        marginTop: 10,
        color: 'red',
    },
});
