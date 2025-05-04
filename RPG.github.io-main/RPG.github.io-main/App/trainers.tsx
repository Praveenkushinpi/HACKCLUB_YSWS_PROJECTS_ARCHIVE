import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Star } from 'lucide-react-native';

export default function TrainersScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Regular': Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const trainers = [
    {
      id: 1,
      name: 'Emma Wilson',
      specialty: 'Yoga & Meditation',
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80',
    },
    {
      id: 2,
      name: 'John Davis',
      specialty: 'HIIT & Strength',
      rating: 4.8,
      reviews: 96,
      image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=500&q=80',
    },
    {
      id: 3,
      name: 'Sarah Chen',
      specialty: 'Pilates & Flexibility',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&q=80',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expert Trainers</Text>
        <Text style={styles.subtitle}>Find your perfect fitness mentor</Text>
      </View>

      <View style={styles.trainersContainer}>
        {trainers.map(trainer => (
          <Pressable key={trainer.id} style={styles.trainerCard}>
            <Image source={{ uri: trainer.image }} style={styles.trainerImage} />
            <View style={styles.trainerInfo}>
              <Text style={styles.trainerName}>{trainer.name}</Text>
              <Text style={styles.trainerSpecialty}>{trainer.specialty}</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#fbbf24" fill="#fbbf24" />
                <Text style={styles.rating}>{trainer.rating}</Text>
                <Text style={styles.reviews}>({trainer.reviews} reviews)</Text>
              </View>
            </View>
            <Pressable style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Session</Text>
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
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
  trainersContainer: {
    padding: 20,
  },
  trainerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  trainerImage: {
    width: '100%',
    height: 200,
  },
  trainerInfo: {
    padding: 16,
  },
  trainerName: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  trainerSpecialty: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
  },
  bookButton: {
    backgroundColor: '#6366f1',
    padding: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});