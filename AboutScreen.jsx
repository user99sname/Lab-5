import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import {TouchableOpacity, View, Text} from 'react-native';

function AboutScreen() {
  const appName = 'Incredible To Do APP';
  const name = 'Muhabat';
  const date = new Date().toLocaleDateString();
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  const handleNamePress = () => {
    setEasterEggVisible(!easterEggVisible);
  };

  return (
    <MainLayout>
      <TouchableOpacity onPress={handleNamePress}>
        <Text> {appName} </Text>
        <Text> {name} </Text>
        <Text> {date} </Text>
      </TouchableOpacity>

      {easterEggVisible && (
        <View>
          <Text style={{ color: 'purple', fontSize: 18, marginTop: 10 }}>
            🎉 You found the Easter egg! 🎉
          </Text>
        </View>
      )}

    </MainLayout>
  );
}
export default AboutScreen;