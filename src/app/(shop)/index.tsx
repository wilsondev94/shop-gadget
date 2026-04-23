import { ListHeader } from "@/components/ListHeader";
import { ProductListItem } from "@/components/ProductListItem";
import { useGetProductsAndCategories } from "@/services/queries";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Home = () => {
  const { data, error, isLoading } = useGetProductsAndCategories();

  if (isLoading) return <ActivityIndicator />;

  if (error || !data)
    return <Text>Error {error?.message || "An error occurred"}</Text>;

  return (
    <View>
      <FlatList
        data={data.products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={data.categories} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: { paddingBottom: 20 },
  flatListColumn: { justifyContent: "space-between" },
});
