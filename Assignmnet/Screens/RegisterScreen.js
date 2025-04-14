import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const handleRegister = () => {
    // Thực hiện các bước đăng ký (kiểm tra thông tin, v.v...)
    // Sau khi đăng ký thành công, thông báo và chuyển hướng

    alert('Đăng ký thành công!');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/dki.png')} style={styles.headerImage} />
      <View style={styles.form}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>Tạo tài khoản</Text>

        <TextInput placeholder="Họ tên" style={styles.input} />
        <TextInput placeholder="E-mail" style={styles.input} />
        <TextInput placeholder="Số điện thoại" style={styles.input} />
        <TextInput placeholder="Mật khẩu" secureTextEntry style={styles.input} />

        <Text style={{ marginBottom: 10 }}>
          Để đăng ký tài khoản, bạn đồng ý{' '}
          <Text style={styles.link}>Terms & Conditions</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <View style={styles.orLine}><Text>Hoặc</Text></View>

        <View style={styles.social}>
          <FontAwesome name="google" size={24} color="#EA4335" />
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </View>

        <View style={styles.footer}>
          <Text>Tôi đã có tài khoản </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerImage: { width: '100%', height: 200 },
  form: { padding: 20, flex: 1 },
  title: { fontSize: 26, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginBottom: 20 },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  orLine: {
    marginVertical: 20,
    alignItems: 'center',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: '#28a745',
    fontWeight: '600',
  },
});
