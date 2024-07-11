import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function App() {

  return (
    <View style={styles.container}>
      <MapView style={{ height: '100%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: -22.954260, 
          longitude: -43.166268,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        <Marker
          coordinate={{   latitude: -22.954260, 
            longitude: -43.166268,
           }}
          pinColor="blue"
        />
      </MapView>
      <Button onPress={() => goTo(SenacRJ)} title="SenacRJ" />
      <Button onPress={() => goTo(RioSul)} title="RioSul" />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});