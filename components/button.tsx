import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export default function Button({
  title,
  children,
  className = "bg-black rounded-full px-6 py-3",
  textClassName = "text-white text-base font-semibold text-center",
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={className}
      android_ripple={{ color: "#27272a" }}
      {...props}
      style={({ pressed }) => [
        { opacity: pressed ? 0.85 : 1 },
        pressed ? { backgroundColor: "#27272a" } : undefined,
      ]}
    >
      {title ? <Text className={textClassName}>{title}</Text> : children}
    </Pressable>
  );
}