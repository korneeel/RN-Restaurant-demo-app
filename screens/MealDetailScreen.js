import { Text } from "react-native"
function MealDetailScreen({route}) {
  const meailId = route.params.mealId;
  return (
    <Text>{meailId}</Text>
  )
}

export default MealDetailScreen