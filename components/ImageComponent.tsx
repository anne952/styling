import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, View } from 'react-native';

interface ImageComponentProps {
  source: any;
  alt?: string;
  className?: string;
  showBadge?: boolean;
  badgeIcon?: string;
  badgeColor?: string;
  badgeBgColor?: string;
  badgeSize?: number;
  badgeClassName?: string;
}

export default function ImageComponent({
  source,
  alt,
  className = "w-full h-60 bg-center bg-cover bg-no-repeat",
  showBadge = false,
  badgeIcon = "percent",
  badgeColor = "white",
  badgeBgColor = "red",
  badgeSize = 20,
  badgeClassName = "relative p-2 rounded-full w-10 h-10 object-center"
}: ImageComponentProps) {
  return (
    <View className="flex-col">
      {showBadge && (
        <MaterialIcons 
          name={badgeIcon as any} 
          size={badgeSize} 
          color={badgeColor} 
          className={`${badgeClassName} bg-${badgeBgColor}-600`}
        />
      )}
      <Image
        source={source}
        className={className}
        accessibilityLabel={alt}
      />
    </View>
  );
} 