import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  primary: '#1E88E5',
  darkBg: '#121212',
  cardBg: '#1E1E1E',
  textMain: '#FFFFFF',
  textSub: '#A0A0A0',
  border: '#2C2C2C',
};

const InfoItem = ({ icon, text, isLast }) => (
  <View style={[styles.infoRow, !isLast && { borderBottomWidth: 1, borderBottomColor: COLORS.border }]}>
    <MaterialCommunityIcons name={icon} size={20} color={COLORS.primary} style={styles.infoIcon} />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

export default function ProfileScreen() {
  const profile = {
    name: "Brandon Monsalve Martinez",
    email: "brandonmonsalve4@gmail.com",
    program: "ADSO - SENA",
    role: "Desarrollador de Software",
    city: "Bogotá, Colombia",
    tech: "React Native + Expo",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBg }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkBg} />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mi Perfil</Text>
        </View>

        <View style={styles.centerFlex}>
          <Image source={require('./assets/coleman.png')} style={styles.avatar} />
          <Text style={styles.nameText}>{profile.name}</Text>
          <Text style={{ fontSize: 14, color: COLORS.textSub }}>{profile.email}</Text>
        </View>

        <View style={styles.infoCard}>
          <InfoItem icon="school" text={`Programa: ${profile.program}`} />
          <InfoItem icon="briefcase-variant" text={`Rol: ${profile.role}`} />
          <InfoItem icon="map-marker" text={`Ciudad: ${profile.city}`} />
          <InfoItem icon="codepen" text={`Tecnología: ${profile.tech}`} isLast />
        </View>

        <TouchableOpacity 
          style={styles.btnPrimary} 
          onPress={() => Alert.alert("Editar Perfil", "No implementado en este demo.")}
        >
          <Text style={styles.btnTextBold}>Editar Perfil</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerFlex: { alignItems: 'center', paddingVertical: 30, paddingHorizontal: 20 },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.textMain },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: COLORS.primary, marginBottom: 15 },
  nameText: { fontSize: 22, fontWeight: 'bold', color: COLORS.textMain, marginBottom: 5 },
  infoCard: { backgroundColor: COLORS.cardBg, marginHorizontal: 20, borderRadius: 15, padding: 15, borderWidth: 1, borderColor: COLORS.border, marginBottom: 25 },
  infoRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  infoIcon: { marginRight: 15, width: 25, textAlign: 'center' },
  infoText: { fontSize: 15, color: COLORS.textMain, flex: 1 },
  btnPrimary: { backgroundColor: COLORS.primary, marginHorizontal: 20, padding: 15, borderRadius: 10, alignItems: 'center', elevation: 4 },
  btnTextBold: { color: COLORS.textMain, fontSize: 18, fontWeight: 'bold' },
});