import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Planta - toả sáng không gian nhà bạn</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Xem hàng mới về →</Text>
      </TouchableOpacity>

      <Image source={require('../assets/banner.png')} style={styles.banner} />

      <Section
        title="Cây trồng"
        items={[
          { name: 'Spider Plant', price: '250.000đ', image: require('../assets/plant1.png') },
          { name: 'Song of India', price: '250.000đ', image: require('../assets/plant2.png') },
          { name: 'Anthurium', price: '250.000đ', image: require('../assets/plant3.png') },
          { name: 'Rubber Plant', price: '250.000đ', image: require('../assets/plant4.png') },
        ]}
      />

      <Section
        title="Chậu cây trồng"
        items={[
          { name: 'Planta Trắng', price: '250.000đ', image: require('../assets/pot1.png') },
          { name: 'Planta Lemon Balm', price: '250.000đ', image: require('../assets/pot2.png') },
          { name: 'Planta Rosewood', price: '250.000đ', image: require('../assets/pot3.png') },
          { name: 'Planta Dove Grey', price: '250.000đ', image: require('../assets/pot4.png') },
        ]}
      />

      <Section
        title="Phụ kiện"
        items={[
          { name: 'Bình tưới CB2 SAIC', price: '250.000đ', image: require('../assets/tool1.png') },
          { name: 'Bình xịt Xiaoda', price: '250.000đ', image: require('../assets/tool2.png') },
          { name: 'Bộ cuốc xẻng mini', price: '250.000đ', image: require('../assets/tool3.png') },
          { name: 'Giá đỡ Finn Terrazzo', price: '250.000đ', image: require('../assets/tool4.png') },
        ]}
      />

      <View style={styles.combo}>
        <Text style={styles.comboTitle}>Combo chăm sóc (mới)</Text>
        <View style={styles.comboBox}>
          <Image source={require('../assets/combo.png')} style={styles.comboImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.itemName}>Lemon Balm Grow Kit</Text>
            <Text style={styles.comboDesc}>Gồm: hạt giống, đất hữu cơ, chậu, marker...</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Section = ({ title, items }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.grid}>
      {items.map((item, index) => (
        <View key={index} style={styles.itemBox}>
          <Image source={item.image} style={styles.itemImage} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold' },
  link: { color: '#28a745', marginVertical: 10 },
  banner: { width: '100%', height: 180, borderRadius: 10, marginBottom: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'
  },
  itemBox: {
    width: '48%', marginBottom: 15, backgroundColor: '#f8f8f8',
    padding: 10, borderRadius: 10, alignItems: 'center'
  },
  itemImage: {
    width: '100%', height: 100, borderRadius: 10,
    resizeMode: 'contain', marginBottom: 10
  },
  itemName: { fontSize: 14 },
  itemPrice: { color: 'green', fontWeight: '600', marginTop: 4 },
  combo: {
    padding: 15, backgroundColor: '#eefbe5',
    borderRadius: 10, marginTop: 10
  },
  comboTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  comboBox: { flexDirection: 'row', alignItems: 'center' },
  comboImage: {
    width: 60, height: 60, borderRadius: 8, marginRight: 10
  },
  comboDesc: { fontSize: 13, color: '#555', marginTop: 2 },
});
