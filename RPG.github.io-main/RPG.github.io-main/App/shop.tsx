import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Search, ShoppingCart } from 'lucide-react-native';

export default function ShopScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Regular': Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const products = [
    {
      id: 1,
      name: 'Premium Yoga Mat',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&q=80',
    },
    {
      id: 2,
      name: 'Resistance Bands Set',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80',
    },
    {
      id: 3,
      name: 'Foam Roller',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=500&q=80',
    },
    {
      id: 4,
      name: 'Meditation Cushion',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?w=500&q=80',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shop</Text>
        <View style={styles.headerIcons}>
          <Pressable style={styles.iconButton}>
            <Search size={24} color="#1e293b" />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <ShoppingCart size={24} color="#1e293b" />
          </Pressable>
        </View>
      </View>

      <View style={styles.categories}>
        {['All', 'Yoga', 'Equipment', 'Apparel', 'Accessories'].map((category, index) => (
          <Pressable
            key={index}
            style={[styles.categoryButton, index === 0 && styles.categoryButtonActive]}>
            <Text
              style={[styles.categoryText, index === 0 && styles.categoryTextActive]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.productsGrid}>
        {products.map(product => (
          <Pressable key={product.id} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
            </View>
            <Pressable style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </Pressable>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  categories: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#f1f5f9',
  },
  categoryButtonActive: {
    backgroundColor: '#6366f1',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#64748b',
  },
  categoryTextActive: {
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
  },
  productsGrid: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    width: '48%',
    marginBottom: 20,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  productPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#6366f1',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#6366f1',
    padding: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});