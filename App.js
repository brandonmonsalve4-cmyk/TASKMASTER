import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// --- PALETA DE COLORES (AZUL Y NEGRO EN TODA LA APP) ---
const COLORS = {
  primary: '#1E88E5', // Azul vibrante para botones y acentos
  secondary: '#1565C0', // Azul más oscuro para detalles
  darkBackground: '#121212', // Fondo negro principal (Home y Perfil)
  cardBackground: '#1E1E1E', // Gris muy oscuro para tarjetas/componentes
  textPrimary: '#FFFFFF', // Texto principal blanco
  textSecondary: '#A0A0A0', // Texto secundario gris claro
  border: '#2C2C2C', // Borde sutil oscuro
  shadow: '#000000', // Sombra
};

// ============================================================
// --- COMPONENTE 1: PANTALLA DE INICIO (SPLASH SCREEN) ---
// ============================================================
const HomeScreen = ({ onNavigateToProfile }) => {
  const handleStart = () => {
    Alert.alert(
      "TaskMaster",
      "¡Bienvenido! ¿Ya estás listo para comenzar a organizar tus tareas?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "OK", onPress: onNavigateToProfile }
      ]
    );
  };

  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkBackground} />
      
      {/* Contenido Central */}
      <View style={styles.splashContent}>
        <FontAwesome5 name="clipboard-list" size={80} color={COLORS.primary} style={styles.splashIcon} />
        <Text style={styles.appTitle}>TaskMaster</Text>
        <Text style={styles.appSlogan}>Organiza tus actividades de forma rápida y eficiente.</Text>
        
        <View style={styles.dateContainer}>
          <FontAwesome5 name="calendar-alt" size={16} color={COLORS.textPrimary} />
          <Text style={styles.dateText}>miércoles, 29 de julio de 2026</Text>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startButtonText}>👋 ¡Bienvenido a mi aplicación!</Text>
          <View style={styles.startButtonAction}>
            <Text style={styles.startButtonActionText}>Comenzar</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Pie de Página */}
      <View style={styles.splashFooter}>
        <Text style={styles.footerText}>Desarrollado por Brandon Monsalve Martinez</Text>
        <Text style={styles.footerSubText}>React Native + Expo • ADSO</Text>
      </View>
    </View>
  );
};

// ============================================================
// --- COMPONENTE 2: PANTALLA DE PERFIL DE USUARIO ---
// ============================================================
const ProfileScreen = () => {
  const profileData = {
    name: "Brandon Monsalve Martinez",
    email: "brandonmonsalve4@gmail.com",
    program: "ADSO - SENA",
    role: "Desarrollador de Software",
    city: "Bogotá, Colombia",
    technology: "React Native + Expo",
  };

  const handleEditProfile = () => {
    Alert.alert("Editar Perfil", "Esta funcionalidad no está implementada en este demo.");
  };

  return (
    <SafeAreaView style={styles.profileContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkBackground} />
      <ScrollView contentContainerStyle={styles.profileScrollContent}>
        {/* Encabezado */}
        <View style={styles.profileHeader}>
          <Text style={styles.profileHeaderTitle}>Mi Perfil</Text>
        </View>

        {/* Imagen de Perfil y Nombre */}
        <View style={styles.profileAvatarSection}>
          <Image 
            source={require('./assets/coleman.png')} 
            style={styles.profileAvatarImage} 
          />
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profileEmail}>{profileData.email}</Text>
        </View>

        {/* Tarjeta de Información Detallada en Fondo Oscuro */}
        <View style={styles.infoCard}>
          <InfoItem iconName="school" text={`Programa: ${profileData.program}`} />
          <InfoItem iconName="briefcase-variant" text={`Rol: ${profileData.role}`} />
          <InfoItem iconName="map-marker" text={`Ciudad: ${profileData.city}`} />
          <InfoItem iconName="codepen" text={`Tecnología: ${profileData.technology}`} isLast />
        </View>

        {/* Botón de Editar Perfil */}
        <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
          <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

// Componente auxiliar para ítems de información
const InfoItem = ({ iconName, text, isLast }) => (
  <View style={[styles.infoItem, !isLast && styles.infoItemBorder]}>
    <MaterialCommunityIcons name={iconName} size={20} color={COLORS.primary} style={styles.infoIcon} />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

// ============================================================
// --- COMPONENTE PRINCIPAL (APP.JS) ---
// ============================================================
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen onNavigateToProfile={() => setCurrentScreen('Profile')} />
      ) : (
        <ProfileScreen />
      )}

      {/* Barra de Navegación Inferior Estilo Oscuro */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('Home')}>
          <Ionicons name="home-outline" size={24} color={currentScreen === 'Home' ? COLORS.primary : COLORS.textSecondary} />
          <Text style={[styles.navText, currentScreen === 'Home' && styles.navTextActive]}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('Profile')}>
          <Ionicons name="person-outline" size={24} color={currentScreen === 'Profile' ? COLORS.primary : COLORS.textSecondary} />
          <Text style={[styles.navText, currentScreen === 'Profile' && styles.navTextActive]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ============================================================
// --- HOJA DE ESTILOS (STYLES) ---
// ============================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
  },

  // --- Estilos de HomeScreen (Splash) ---
  splashContainer: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  splashContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  splashIcon: {
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  appSlogan: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBackground,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  dateText: {
    color: COLORS.textPrimary,
    marginLeft: 8,
    fontSize: 14,
  },
  startButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 5,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
  },
  startButtonText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  startButtonAction: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  startButtonActionText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  splashFooter: {
    paddingBottom: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 5,
  },
  footerSubText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  // --- Estilos de ProfileScreen (Ahora Oscuro) ---
  profileContainer: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    paddingTop: 10,
  },
  profileScrollContent: {
    paddingBottom: 80,
  },
  profileHeader: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  profileHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  profileAvatarSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileAvatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: COLORS.primary,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  infoCard: {
    backgroundColor: COLORS.cardBackground,
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 25,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  infoIcon: {
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: COLORS.textPrimary,
    flex: 1,
  },
  editProfileButton: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },
  editProfileButtonText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },

  // --- Estilos de Barra de Navegación Inferior (Modo Oscuro) ---
  bottomNav: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.cardBackground,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  navTextActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});