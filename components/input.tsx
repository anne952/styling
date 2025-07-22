import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  className?: string;
  inputClassName?: string;
}

export default function Input({
  placeholder = "",
  className = "w-full",
  inputClassName = "bg-white rounded-full px-5 py-3 text-base text-black",
  selectionColor = "#000",
  ...props
}: InputProps) {
  return (
    <View className={className}>
      <TextInput
        placeholder={placeholder}
        className={inputClassName}
        selectionColor={selectionColor}
        {...props}
      />
    </View>
  );
}