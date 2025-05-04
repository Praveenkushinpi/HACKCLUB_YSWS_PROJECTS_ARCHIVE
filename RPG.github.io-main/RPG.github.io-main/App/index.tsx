import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Moon, Footprints, Timer, Flame } from 'lucide-react-native';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Regular': Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning, Praveen kumar!</Text>
        <Text style={styles.date}>Thursday, March 20</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Moon size={24} color="#6366f1" />
          <Text style={styles.statValue}>0h 0m</Text>
          <Text style={styles.statLabel}>Sleep</Text>
        </View>
        <View style={styles.statCard}>
          <Footprints size={24} color="#6366f1" />
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>Steps</Text>
        </View>
        <View style={styles.statCard}>
          <Timer size={24} color="#6366f1" />
          <Text style={styles.statValue}>10m</Text>
          <Text style={styles.statLabel}>Exercise</Text>
        </View>
        <View style={styles.statCard}>
          <Flame size={24} color="#6366f1" />
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Today's Classes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.classesContainer}>
        {[
          {
            id: 1,
            title: 'Morning Yoga',
            instructor: 'Emma Wilson',
            time: '8:00 AM',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80'
          },
          {
            id: 2,
            title: 'Back Training',
            instructor: 'John Davis',
            time: '10:00 AM',
            image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=500&q=80'
          }
        ].map(classItem => (
          <Pressable key={classItem.id} style={styles.classCard}>
            <Image source={{ uri: classItem.image }} style={styles.classImage} />
            <View style={styles.classInfo}>
              <Text style={styles.className}>{classItem.title}</Text>
              <Text style={styles.classInstructor}>{classItem.instructor}</Text>
              <Text style={styles.classTime}>{classItem.time}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Recommended Workouts</Text>
      <View style={styles.workoutsContainer}>
        {[
          {
            id: 1,
            title: 'Full Body Flow',
            duration: '30 min',
            level: 'Beginner',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80'
          },
          {
            id: 2,
            title: 'Power Yoga',
            duration: '45 min',
            level: 'Intermediate',
            image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=500&q=80'
          }
        ].map(workout => (
          <Pressable key={workout.id} style={styles.workoutCard}>
            <Image source={{ uri: workout.image }} style={styles.workoutImage} />
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <Text style={styles.workoutDetails}>{workout.duration} • {workout.level}</Text>
            </View>
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
  greeting: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  date: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 12,
    width: '23%',
  },
  statValue: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  classesContainer: {
    paddingLeft: 20,
  },
  classCard: {
    width: 280,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  classImage: {
    width: '100%',
    height: 150,
  },
  classInfo: {
    padding: 16,
  },
  className: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  classInstructor: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
  classTime: {
    fontSize: 14,
    color: '#6366f1',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
  workoutsContainer: {
    padding: 20,
  },
  workoutCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  workoutImage: {
    width: '100%',
    height: 200,
  },
  workoutInfo: {
    padding: 16,
  },
  workoutTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  workoutDetails: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
});