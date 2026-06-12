import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const getIconName = (routeName) => {
  switch (routeName) {
    case 'Home':
      return 'home-outline';
    case 'Billing':
      return 'receipt-text-outline';
    case 'SOS':
      return 'alert-circle-outline';
    case 'Announcement':
      return 'bullhorn-outline';
    case 'Profile':
      return 'account-circle-outline';
    default:
      return 'circle-outline';
  }
};

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: route.name === 'SOS' ? '#ff4d4d' : '#00e5ff',
  tabBarInactiveTintColor: route.name === 'SOS' ? '#ff4d4d' : '#8f99a6',
  tabBarStyle: styles.tabBar,
  tabBarLabelStyle: styles.tabLabel,
  tabBarIcon: ({ color, size, focused }) => {
    const iconName = getIconName(route.name);
    const iconColor = route.name === 'SOS' ? '#ff4d4d' : color;

    return (
      <View
        style={[
          styles.iconContainer,
          route.name === 'Home' && focused ? styles.homeIconWrapper : null,
        ]}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={route.name === 'SOS' ? 28 : size}
          color={iconColor}
        />
      </View>
    );
  },
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'HOME' }}
      />
      <Tab.Screen
        name="Billing"
        component={BillingScreen}
        options={{ tabBarLabel: 'BILLING' }}
      />
      <Tab.Screen
        name="SOS"
        component={SosScreen}
        options={{ tabBarLabel: 'SOS' }}
      />
      <Tab.Screen
        name="Announcement"
        component={AnnouncementScreen}
        options={{ tabBarLabel: 'ANNOUNCEMENT' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'PROFILE' }}
      />
    </Tab.Navigator>
  );
};

const HomeScreen = () => (
  <ScreenPlaceholder
    title="HOME"
    subtitle="Welcome to your smart residential dashboard."
  />
);

const BillingScreen = () => (
  <ScreenPlaceholder
    title="BILLING"
    subtitle="Review invoices, due dates, and payment history."
  />
);

const SosScreen = () => (
  <ScreenPlaceholder
    title="SOS"
    subtitle="Emergency assistance and quick access to support."
  />
);

const AnnouncementScreen = () => (
  <ScreenPlaceholder
    title="ANNOUNCEMENT"
    subtitle="Read community alerts and building notices."
  />
);

const ProfileScreen = () => (
  <ScreenPlaceholder
    title="PROFILE"
    subtitle="Manage your account and resident preferences."
  />
);

const ScreenPlaceholder = ({ title, subtitle }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>{title}</Text>
    <Text style={styles.screenSubtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#060B16',
    borderTopColor: '#121825',
    borderTopWidth: 1,
    height: Platform.OS === 'ios' ? 86 : 68,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingTop: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIconWrapper: {
    backgroundColor: '#111827',
    borderRadius: 14,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00e5ff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 6,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050914',
    padding: 24,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 16,
    color: '#A9B1C8',
    textAlign: 'center',
    lineHeight: 26,
  },
});

export default BottomTabNavigator;
