import { Children, cloneElement } from "react";
import { StyleSheet, View } from "react-native";

function RowsContainter({ gap, style, children }) {
  const arrayChildren = Children.toArray(children);
  return (
    <View style={[localStyles.rows, style]}>
      {Children.map(arrayChildren, (child, index) => {
        const isLast = index == arrayChildren.length - 1;

        return cloneElement(child, { isLast, gap });
      })}
    </View>
  );
}

function Row({ isLast, gap, style, children }) {
  return (
    <>
      <View style={[localStyles.row, style]}>{children}</View>
      {!isLast && <View style={{ height: gap }} />}
    </>
  );
}

const localStyles = StyleSheet.create({
  rows: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  row: {
    flex: 1,
  },
});

export default { RowsContainter, Row };
