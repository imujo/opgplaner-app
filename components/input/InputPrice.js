import Input from "./Input";
import { TextInput, View, Text } from "react-native";
import { inputStyles } from "./helpers/inputStyles";

export default function InputText({
  title,
  details,
  placeholder,
  isError,
  errorMsg,
  style,
  value,
  setValue,
}) {
  return (
    <Input
      title={title}
      details={details}
      isError={isError}
      errorMsg={errorMsg}
      style={style}
    >
      <Text style={{ marginRight: 10 }}>€‎</Text>
      <TextInput
        style={[inputStyles.inputValue, { flex: 1 }]}
        placeholder={placeholder}
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
    </Input>
  );
}
