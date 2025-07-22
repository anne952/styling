import React from 'react'
import { Image, View , Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


interface CartPublicitéProps {
    id_name: string;
    id_image: string;
    source: any;
    name: string;
    description: string;
    price: number;
    image: string;

}
export default function CartPublicité({id_image, id_name,name,source,description,price,image}:CartPublicitéProps) {
    return(
        <View>
      <View className="flex-col py-6 bg-white shadow-md shadow-slate-400 m-8">
      <View className="flex-row justify-between items-center -mt-10 ">
      <View className="flex-row items-center gap-3 ml-4">
        {id_image && (
        <Image 
        source={source} 
        className="w-10 h-10 rounded-full mt-10 "
        />
        ) }
        
        <Text className="text-lg mt-10">{id_name}</Text>
      </View>
      <MaterialIcons name="add" size={30} color="black" className="  mt-10 mr-4" />
      </View>

      {image && (
         <Image
         source={source}
         className="max-w-full h-80  mt-2 bg-center bg-cover bg-no-repeat"
         />
      )
    
      }
     
      <View className="flex-row items-center">
        <MaterialIcons name="favorite"  size={20} className="p-2 hover:bg-red-600 "/>
        <MaterialIcons name="message"  size={20} className="p-2 "/>
        <MaterialIcons name="send"  size={20} className="p-2 " />
      </View>
      <View className=" p-4">
        <Text>{name}</Text>
        <Text>{price} </Text>
        <Text>{description}</Text>
      </View>
    </View> 
        </View>
    )
   
}