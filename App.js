import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

// 🔹 IMPORTAMOS LA PANTALLA DE PERFIL DESDE SU ARCHIVO
import ProfileScreen from './ProfileScreen';

const COLORS = {
  primary: '#1E88E5', secondary: '#1565C0', darkBg: '#121212',
  cardBg: '#1E1E1E', textMain: '#FFFFFF', textSub: '#A0A0A0', border: '#2C2C2C',
};

// --- PANTALLA INICIO ---
const HomeScreen = ({ onNavigateToProfile }) => {
  const handleStart = () => Alert.alert("TaskMaster", "¡Bienvenido! ¿Listo para organizar tus tareas?", [
    { text: "Cancelar", style: "cancel" }, { text: "OK", onPress: onNavigateToProfile }
  ]);

  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkBg} />
      <View style={styles.centerFlex}>
        <FontAwesome5 name="clipboard-list" size={80} color={COLORS.primary} style={{ marginBottom: 20 }} />
        <Text style={styles.appTitle}>TaskMaster</Text>
        <Text style={styles.appSlogan}>Organiza tus actividades de forma rápida y eficiente.</Text>
        
        <View style={styles.dateBadge}>
          <FontAwesome5 name="calendar-alt" size={16} color={COLORS.textMain} />
          <Text style={styles.dateText}>miércoles, 29 de julio de 2026</Text>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.btnTextBold}>👋 ¡Bienvenido a mi aplicación!</Text>
          <Text style={styles.btnSubText}>Comenzar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 60 }}>
        <Text style={styles.footerText}>Desarrollado por Brandon Monsalve Martinez</Text>
        <Text style={{ fontSize: 12, color: COLORS.textSub }}>React Native + Expo • ADSO</Text>
      </View>
    </View>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [screen, setScreen] = useState('Home');

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.darkBg }}>
      {/* Si la pantalla es 'Home' muestra HomeScreen, de lo contrario muestra ProfileScreen */}
      {screen === 'Home' ? <HomeScreen onNavigateToProfile={() => setScreen('Profile')} /> : <ProfileScreen />}

      <View style={styles.bottomNav}>
        <NavItem name="home-outline" label="Inicio" active={screen === 'Home'} onPress={() => setScreen('Home')} />
        <NavItem name="person-outline" label="Perfil" active={screen === 'Profile'} onPress={() => setScreen('Profile')} />
      </View>
    </View>
  );
}

const NavItem = ({ name, label, active, onPress }) => (
  <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
    <Ionicons name={name} size={24} color={active ? COLORS.primary : COLORS.textSub} />
    <Text style={{ fontSize: 12, color: active ? COLORS.primary : COLORS.textSub, fontWeight: active ? '600' : 'normal' }}>{label}</Text>
  </TouchableOpacity>
);

// --- ESTILOS COMPRIMIDOS ---
const styles = StyleSheet.create({
  splashContainer: { flex: 1, backgroundColor: COLORS.darkBg, justifyContent: 'space-between', paddingTop: 60 },
  centerFlex: { alignItems: 'center', paddingVertical: 30, paddingHorizontal: 20 },
  appTitle: { fontSize: 32, fontWeight: 'bold', color: COLORS.textMain, marginBottom: 10 },
  appSlogan: { fontSize: 16, color: COLORS.textSub, textAlign: 'center', marginBottom: 20 },
  dateBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.cardBg, padding: 8, paddingHorizontal: 15, borderRadius: 20, marginBottom: 30, borderWidth: 1, borderColor: COLORS.border },
  dateText: { color: COLORS.textMain, marginLeft: 8, fontSize: 14 },
  startButton: { backgroundColor: COLORS.primary, padding: 15, paddingHorizontal: 25, borderRadius: 25, alignItems: 'center', elevation: 5 },
  btnTextBold: { color: COLORS.textMain, fontSize: 18, fontWeight: 'bold' },
  btnSubText: { backgroundColor: COLORS.secondary, color: COLORS.textMain, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15, marginTop: 8, fontWeight: '600' },
  footerText: { fontSize: 16, fontWeight: '600', color: COLORS.textMain, marginBottom: 5 },
  bottomNav: { flexDirection: 'row', height: 60, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.cardBg, position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'space-around', alignItems: 'center' },
});