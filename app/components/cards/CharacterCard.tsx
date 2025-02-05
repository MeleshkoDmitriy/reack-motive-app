import { Image, Pressable, Text, View } from "react-native"

export const CharacterCard = ({ item, onPress }) => {

  return (
    <Pressable onPress={onPress}>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
        <Text>{item.name}</Text>
        <Text>{item.species}</Text>
        <Text>{item.status}</Text>
      </View>
    </Pressable>
  )
}