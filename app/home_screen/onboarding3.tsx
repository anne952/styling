import React from "react";
import { Dimensions, Image, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function FaqClient1() {
  const router = useRouter();

  const handlePress = () => {
    router.replace("/home_screen/onboarding4"); 
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={handlePress}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/creer boutique.png")}
          style={{ width: 300, height: 400, resizeMode: "contain" }}
        />
        <Text style={{ marginTop: 8, fontSize: 18, textAlign: "center", color: "black", padding: 20 }}>
          Vous êtes styliste, un prêt à porter ou un vendeur de vêtements? Créez votre boutique et toucher plus de client
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "black", opacity: 0.8 , marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
        </View>
      </View>
    </Pressable>
  );
}
