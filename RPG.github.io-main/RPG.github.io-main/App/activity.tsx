import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { ChartLine as LineChart } from 'lucide-react-native';

export default function ActivityScreen() {
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
        <Text style={styles.title}>Activity Tracking</Text>
      </View>

      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Today's Progress</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressValue}>75%</Text>
            </View>
            <Text style={styles.progressLabel}>Daily Goal</Text>
          </View>
          <View style={styles.progressDetails}>
            <View style={styles.detailItem}>
              <Text style={styles.detailValue}>8,546</Text>
              <Text style={styles.detailLabel}>Steps</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailValue}>3.2</Text>
              <Text style={styles.detailLabel}>Miles</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailValue}>524</Text>
              <Text style={styles.detailLabel}>Calories</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.chartCard}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartTitle}>Weekly Activity</Text>
          <LineChart size={24} color="#6366f1" />
        </View>
        <View style={styles.chart}>
          {/* Chart placeholder */}
          <View style={styles.chartPlaceholder} />
        </View>
      </View>

      <View style={styles.sleepCard}>
        <Text style={styles.sleepTitle}>Sleep Analysis</Text>
        <View style={styles.sleepStats}>
          <View style={styles.sleepStat}>
            <Text style={styles.sleepValue}>7h 30m</Text>
            <Text style={styles.sleepLabel}>Duration</Text>
          </View>
          <View style={styles.sleepStat}>
            <Text style={styles.sleepValue}>11:30 PM</Text>
            <Text style={styles.sleepLabel}>Bedtime</Text>
          </View>
          <View style={styles.sleepStat}>
            <Text style={styles.sleepValue}>7:00 AM</Text>
            <Text style={styles.sleepLabel}>Wake up</Text>
          </View>
        </View>
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
  statsCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressItem: {
    alignItems: 'center',
    flex: 1,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressValue: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  progressLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
  },
  progressDetails: {
    flex: 2,
    marginLeft: 20,
  },
  detailItem: {
    marginBottom: 12,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  detailLabel: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
  },
  chartCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  chart: {
    height: 200,
  },
  chartPlaceholder: {
    height: '100%',
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
  },
  sleepCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
  sleepTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
    marginBottom: 20,
  },
  sleepStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sleepStat: {
    alignItems: 'center',
  },
  sleepValue: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
  },
  sleepLabel: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
});