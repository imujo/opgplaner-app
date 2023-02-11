import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useFetch from "../../../hooks/useFetch";
import SelectionList from "./SelectionList";
import InputSelectPageItem from "./InputSelectItem";
import Search from "../../../components/Search";
import { AntDesign } from "@expo/vector-icons";
import InputSelectList from "./InputSelectList";

export default function InputSelectPage({ navigation, route }) {
  const { fetchUrl, multiple, addable, removable } = route.params;

  // Select
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const removeSelectedId = (id) => {
    setSelectedItemIds((prev) => {
      return prev.filter((item) => item != id);
    });
  };

  // Data
  const [runFetch, setRunFetch] = useState(0);
  const fetchOptions = {
    method: "GET",
    url: fetchUrl,
    props: { table_ids: selectedItemIds },
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { loading, error, value } = useFetch(fetchOptions, [runFetch]);
  const postSelection = (ids) => {
    // TODO post  .then
    navigation.goBack();
  };
  const addItem = (title) => {
    // TODO post item -> add id to selected
    setRunFetch((prev) => prev + 1);
    return;
  };

  // Search
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);
  const filteredItems = value?.filter(
    (item) =>
      // search query
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
      // dont show selected items in list
      !selectedItemIds.includes(item.id)
  );

  // Header Button
  useEffect(() => {
    if (multiple) {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => postSelection(selectedItemIds)} title="Done" />
        ),
      });
    }
  }, [navigation, selectedItemIds, multiple]);

  return (
    <View style={localStyles.page}>
      <SelectionList
        selectedIds={selectedItemIds}
        allData={value}
        onPress={(id) => removeSelectedId(id)}
        isError={error}
        isLoading={loading}
      />
      <Search
        value={query}
        onChangeText={setQuery}
        iconVisible={addable && query}
        icon={
          <AntDesign name="plus" size={20} onPress={() => addItem(query)} />
        }
      />

      <InputSelectList
        data={filteredItems}
        renderItem={(item) => (
          <InputSelectPageItem
            {...item}
            setSelectedItemIds={setSelectedItemIds}
            multiple={multiple}
            postSelection={postSelection}
          />
        )}
        isError={error}
        isLoading={loading}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  page: {
    marginVertical: 20,
  },
});