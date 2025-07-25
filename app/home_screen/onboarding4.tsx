import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function FaqClient1() {
  const router = useRouter();

  const handlePress = () => {
    router.replace("/home_screen/login"); 
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={handlePress}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Image
          source={require("../../assets/images/Social 01.png")}
          style={{ width: 300, height: 400, resizeMode: "contain" }}
        />
        <Text style={{ marginTop: 8, fontSize: 18, textAlign: "center", color: "black", padding: 20 }}>
          Lorsqu'un client est intéressé par vos produits, il peut vous contacter pour plus d'informations ou pour passer une commande.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "gray", marginLeft: 4 }} />
          <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "black", opacity: 0.8 , marginLeft: 4  }} />
        </View>
      </View>
    </Pressable>
  );
}
