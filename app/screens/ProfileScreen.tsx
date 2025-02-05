import React from 'react';
import { View, Text, Image } from 'react-native';

export const ProfileScreen = ({ route }) => {
  const { name, image } = route.params;

  return (
    <View>
      <Text>Profile of {name}</Text>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: image }}
        />
      </View>
    </View>
  );
};
