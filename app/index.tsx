import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, View } from "react-native";

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
      const timeout = setTimeout(() => {
       router.replace("/home_screen/onboarding");
     }, 2500);
    return () => clearTimeout(timeout);
    }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Image
        source={require("../assets/logo/Styling.png")}
       style={{width: 180 , height: 260, resizeMode: "contain"}}
      />
    </View>
  );
}