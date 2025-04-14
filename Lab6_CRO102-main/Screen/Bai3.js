// Bai3.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { useSignupMutation } from '../Bai3/api';

export default function Bai3() {
    const { control, handleSubmit, reset } = useForm();
    const [signup, { data, error, isSuccess }] = useSignupMutation();
    const [gender, setGender] = useState('');

    const onSubmit = async (formData) => {
        try {
            const result = await signup({ ...formData, gender }).unwrap();
            Alert.alert('✅ Thành công', 'Dữ liệu đã được gửi');
            console.log('Gửi thành công:', result);
            reset();
        } catch (err) {
            Alert.alert('❌ Thất bại', 'Không gửi được dữ liệu');
            console.log('Gửi lỗi:', err);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form Builder Basic Demo</Text>

            <View style={styles.row}>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.inputHalf}
                            placeholder="Name"
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="age"
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.inputHalf}
                            placeholder="User's Age"
                            keyboardType="numeric"
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
            </View>

            <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />

            <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
            </Picker>

            <Button title="Submit" color="#00BCD4" onPress={handleSubmit(onSubmit)} />

            {isSuccess && (
                <View style={{ marginTop: 20 }}>
                    <Text>🎉 Dữ liệu gửi lên server:</Text>
                    <Text>{JSON.stringify(data)}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, marginTop: 40 },
    title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    inputHalf: {
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 10,
        width: '48%',
        borderRadius: 5,
    },
    input: {
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});
