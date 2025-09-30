import React from "react";
import { Ionicons } from "@expo/vector-icons"; // ✅ Expo icons
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@utils/theme/constants";

interface TabProps {
  name: any;
}

interface IconProp {
  focused: boolean;
}

const iconSize = RFValue(18);



const TabIcons: React.FC<TabProps & IconProp> = ({ name, focused }) => {
  const getIconName = () => {
    switch (name) {
      case "Home":
        return focused ? "home" : "home-outline";
      case "Profile":
        return focused ? "person" : "person-outline";
      case "Settings":
        return focused ? "settings" : "settings-outline";
      default:
        return "ellipse-outline"; // fallback
    }
  };

  return (
    <>
      <Ionicons
        name={getIconName()}
        size={iconSize}
        color={focused ? Colors.primary : Colors.lightText}
      />
    </>
  );
};

export default TabIcons;
