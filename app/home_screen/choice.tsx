import React from "react";
import { Dimensions, Image, Text, View, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function FaqClient1() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }} >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Image
          source={require("../../assets/images/sing.png")}
          style={{ width: 300, height: 400, resizeMode: "contain" }}
        />
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 16 }}>
          <TouchableOpacity onPress={() => router.replace("/clients/register")}> 
            <Text style={{color:"#007AFF", fontWeight:"bold", fontSize:16, marginHorizontal: 24}}>Client</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.replace("/prestataire/register")}> 
            <Text style={{color:"#007AFF", fontWeight:"bold", fontSize:16, marginHorizontal: 24}}>Prestataire</Text>
          </TouchableOpacity>
        </View>
            
      </View>
    </View>
  );
}
