import React, { useRef, useState } from "react";
import { Dimensions, Image, Text, View, FlatList, Animated, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const slides = [
  {
    image: require("../../assets/images/scoll.png"),
    text: "Pacourez des vêtements sur mesure et prêt à porter selon vos goûts",
    dots: ["active", "inactive", "inactive", "inactive"],
  },
  {
    image: require("../../assets/images/Messages 03.png"),
    text: "  Apres avoir contacté un vendeur, vous pouvez commander en discutant avec lui dans l'espace message",
    dots: ["inactive", "active", "inactive", "inactive"],
  },
  {
    image: require("../../assets/images/creer boutique.png"),
    text: "C Vous êtes styliste, un prêt à porter ou un vendeur de vêtements? Créez votre boutique et toucher plus de client",
    dots: ["inactive", "inactive", "active", "inactive"],
  },
  {
    image: require("../../assets/images/Social 01.png"),
    text: "Lorsqu'un client est intéressé par vos articles, il peut vous contacter pour plus d'informations ou pour passer une commande.",
    dots: ["inactive", "inactive", "inactive", "active"],
  },
];

export default function Onboarding() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleStart = () => {
    router.replace("/home_screen/login");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={slides}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        renderItem={({ item, index }) => (
          <View style={{ width, justifyContent: "center", alignItems: "center" }}>
            <Image source={item.image} style={{ width: 300, height: 400, resizeMode: "contain" }} />
            <Text style={{ marginTop: 24, fontSize: 14, textAlign: "center", color: "black", padding: 20 }}>
              {item.text}
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
              {item.dots.map((dot, idx) => (
                <View
                  key={idx}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 6,
                    backgroundColor: dot === "active" ? "black" : "gray",
                    opacity: dot === "active" ? 0.8 : 1,
                    marginLeft: idx === 0 ? 0 : 4,
                    marginTop: 20,
                  }}
                />
              ))}
            </View>
            {index === slides.length - 1 && currentIndex === slides.length - 1 && (
              <TouchableOpacity onPress={handleStart} style={{ marginTop: 50, marginLeft: 190 }}>
                <Text style={{ color: "#007AFF", fontSize: 14, }}>Commencer</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}
