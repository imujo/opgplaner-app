import { View, Text, StyleSheet } from "react-native";

export default function AllDayList({ events, loading, error }) {
  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View>
      {events.map((item, i) => {
        return (
          <View key={i} style={styles.item}>
            <Text style={[styles.bold, styles.text]}>{item.guest}</Text>
            {item.n_adults != 0 && (
              <Text style={styles.text}>Odrasli: {item.n_adults}</Text>
            )}
            {item.n_children != 0 && (
              <Text style={styles.text}>Djeca: {item.n_children}</Text>
            )}
            {item.price != 0 && (
              <Text style={styles.text}>Cijena: €{item.price}</Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#aecbeb",
    marginVertical: 3,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    borderLeftColor: "#00487c",
    borderLeftWidth: 5,
  },
  bold: {
    fontWeight: "700",
    marginRight: 15,
    fontSize: 15,
  },
  text: {
    marginRight: 12,
    fontSize: 13,
    color: "#00487c",
  },
});
