import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function ChoiceScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Image
        source={require("../../assets/images/creer boutique.png")}
        style={{ width: width * 0.6, height: width * 0.6, resizeMode: "contain" }}
      />
      <Text className="mt-8 text-lg text-center font-semibold text-black">
        Faites un choix pour continuer sur la plateforme.
      </Text>
      <View className="flex-row justify-center items-center mt-10 space-x-2">
        <View className="w-3 h-3 rounded-full bg-black opacity-80" />
        <View className="w-3 h-3 rounded-full bg-gray-300" />
        <View className="w-3 h-3 rounded-full bg-gray-300" />
      </View>
    </View>
  );
}
