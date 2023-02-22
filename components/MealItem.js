import { View, Text, Image, Pressable, StyleSheet } from "react-native";

function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text styles={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
