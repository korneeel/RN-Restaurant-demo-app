import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderCategoryItem(itemData) {
  return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />;
}

function CategoriesScreens() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreens;
