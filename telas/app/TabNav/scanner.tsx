import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import useColor from '../../temas/Temas';

export default function Scanner() {
  const color = useColor()
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.nome === 'dark'? color.bgPrimary: "#ffffff"
    },
    camera: {
      width: 450,
      height: 450,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
    },
    button: {
      padding: 20,
      backgroundColor: '#011E83',
      borderRadius: 10,
    },
    text: {
      fontSize: 20,
      color: '#000000',
    },
  });
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} ref={camRef}></Camera>
    </SafeAreaView>
  );
}

