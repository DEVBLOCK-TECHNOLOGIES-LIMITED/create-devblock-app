import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Button from './src/components/Button';
import Card from './src/components/Card';
import { useAuth, AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <WelcomeScreen />
    </AuthProvider>
  );
}

function WelcomeScreen() {
  const { user, signIn, signOut } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>DevBlock App</Text>
          <Text style={styles.subtitle}>Built with Precision. Delivered with Purpose.</Text>
        </View>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>
            {user ? `Welcome back, ${user.name}!` : 'Ready to Get Started?'}
          </Text>
          <Text style={styles.cardText}>
            This project is pre-configured with React Native, Expo, NativeWind, and Lucide Icons.
          </Text>
          
          <View style={styles.buttonGroup}>
            {!user ? (
              <Button title="Sign In" onPress={signIn} />
            ) : (
              <Button title="Sign Out" onPress={signOut} variant="outline" />
            )}
          </View>
        </Card>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Folders</Text>
          <View style={styles.folderRow}>
            <View style={styles.folderItem}>
              <Text style={styles.folderName}>api/</Text>
              <Text style={styles.folderDesc}>Services & Clients</Text>
            </View>
            <View style={styles.folderItem}>
              <Text style={styles.folderName}>components/</Text>
              <Text style={styles.folderDesc}>UI Components</Text>
            </View>
          </View>
          <View style={styles.folderRow}>
            <View style={styles.folderItem}>
              <Text style={styles.folderName}>context/</Text>
              <Text style={styles.folderDesc}>Global State</Text>
            </View>
            <View style={styles.folderItem}>
              <Text style={styles.folderName}>hooks/</Text>
              <Text style={styles.folderDesc}>Logic</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#1e293b',
    borderColor: '#334155',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#94a3b8',
    lineHeight: 24,
  },
  buttonGroup: {
    marginTop: 20,
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  folderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  folderItem: {
    width: '48%',
    backgroundColor: '#1e293b',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  folderName: {
    color: '#38bdf8',
    fontWeight: 'bold',
    fontSize: 14,
  },
  folderDesc: {
    color: '#64748b',
    fontSize: 12,
    marginTop: 4,
  },
});
