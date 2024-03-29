import Input from "./Input";
import { TextInput, Text } from "react-native";
import { inputStyles } from "./helpers/inputStyles";

export default function InputNumber({
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
      <TextInput
        style={inputStyles.inputValue}
        placeholder={placeholder}
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
    </Input>
  );
}
