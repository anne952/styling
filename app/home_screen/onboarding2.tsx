import React from "react";
import { Dimensions, Image, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function FaqClient1() {
  const router = useRouter();

  const handlePress = () => {
    router.replace("/home_screen/onboarding3"); 
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={handlePress}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/Messages 03.png")}
          style={{ width: 300, height: 400, resizeMode: "contain" }}
        />
        <Text style={{ marginTop: 8, fontSize: 18, textAlign: "center", color: "black", padding: 20 }}>
          Apres avoir contacté un vendeur, vous pouvez commander en discutant avec lui dans l'espace message
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", opacity: 0.8 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "black", marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
        </View>
      </View>
    </Pressable>
  );
}
