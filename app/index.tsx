import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/commun/faqClient1");
    }, 1500);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require("../assets/images/splash-icon.png")}
        style={{ width: 180, height: 180, resizeMode: "contain" }}
      />
    </View>
  );
}