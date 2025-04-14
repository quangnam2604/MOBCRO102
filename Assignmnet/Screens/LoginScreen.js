import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  Image, SafeAreaView, Alert, Switch
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email === 'nam12@gmail.com' && pass === '123456') {
      Alert.alert('Đăng nhập thành công');
      navigation.navigate('Home');
    } else {
      Alert.alert('Sai thông tin đăng nhập');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/dki.png')} style={styles.headerImage} />

      <View style={styles.form}>
        <Text style={styles.title}>Chào mừng bạn</Text>
        <Text style={styles.subtitle}>Đăng nhập tài khoản</Text>

        <TextInput
          placeholder="Nhập email hoặc số điện thoại"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Mật khẩu"
            style={styles.inputPassword}
            secureTextEntry={secureText}
            value={pass}
            onChangeText={setPass}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <FontAwesome name={secureText ? 'eye-slash' : 'eye'} size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.rowBetween}>
          <View style={styles.checkboxContainer}>
            <Switch
              value={remember}
              onValueChange={setRemember}
              trackColor={{ false: '#ccc', true: '#28a745' }}
              thumbColor="#fff"
            />
            <Text style={{ marginLeft: 8 }}>Nhớ tài khoản</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={{ marginHorizontal: 10 }}>Hoặc</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.social}>
          <FontAwesome name="google" size={24} color="#EA4335" />
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </View>

        <View style={styles.footer}>
          <Text>Bạn không có tài khoản </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerImage: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 60,
  },
  form: { padding: 20, flex: 1 },
  title: { fontSize: 26, fontWeight: 'bold', marginTop: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputPassword: { flex: 1 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center' },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
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
