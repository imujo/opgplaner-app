import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

export default function CalendarItem({ event, navigation }) {
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("AddRestaurantScreen", {
          event_id: event.event_id,
          type: "edit",
        })
      }
    >
      <View
        style={[
          styles.item,
          {
            top: event.layout.top,
            height: event.layout.height,
            left: `${event.layout.left}%`,
            width: `${event.layout.width}%`,
          },
        ]}
      >
        <Text style={[styles.text, styles.bold]}>{event.guest}</Text>

        <View style={styles.otherProps}>
          <Text style={styles.text}>
            {event.start_time.slice(0, 5)} - {event.end_time.slice(0, 5)}
          </Text>
          {event.n_adults != 0 && (
            <Text style={styles.text}>Odrasli: {event.n_adults}</Text>
          )}
          {event.n_children != 0 && (
            <Text style={styles.text}>Djeca: {event.n_children}</Text>
          )}
          {event.price != 0 && (
            <Text style={styles.text}>Cijena: €{event.price}</Text>
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#92e6a7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    position: "absolute",
    width: "100%",
    borderTopColor: "#208b3a",
    borderTopWidth: 4,
    display: "flex",
    flexWrap: "wrap",
  },
  row: {
    flex: 0,
  },
  bold: {
    fontWeight: "600",
    color: "#10451d",
    marginBottom: 3,
    fontSize: 15,
  },
  text: {
    fontSize: 13,
    marginRight: 12,
    color: "#10451d",
  },
  otherProps: {
    flexWrap: "wrap",
  },
});
