import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation stack parameters
type RootStackParamList = {
  Login: undefined;
  Splash: undefined;
  // Add other screens here as needed
};

// Define the type for the navigation prop
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Use replace to prevent going back to the splash screen
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/splash_animation.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
