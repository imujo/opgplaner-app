import React, { useState } from "react";
import { Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SettingsInput from "./SettingsInput";
import settingsInputStyles from "../settings/settingsInputStyles";
import TouchableOpacityRipple from "../TouchableOpacityRipple";

export default function SettingsTimeInput({ title, details }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
  };

  const shortTime = date.toTimeString().slice(0, 5);

  return (
    <TouchableOpacityRipple
      onPress={() => setShow(true)}
      paddingHorizontal={10}
    >
      <View>
        <SettingsInput title={title} details={details}>
          <Text style={settingsInputStyles.inputValue}>{shortTime}</Text>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </SettingsInput>
      </View>
    </TouchableOpacityRipple>
  );
}
