import React, { useMemo } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useShareState } from "./SharedContex";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { screenWidth } from "@utils/theme/constants";
import { tabStyle } from "src/styles";
import { CustomText } from "src/component";
import { Ionicons } from "@expo/vector-icons"; // ✅ Expo icons
import TabIcons from "./TabIcons";
import { useThemeContext } from "@utils";
export const CustomTabs: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const { scrollY } = useShareState();
  const bottom = useSafeAreaInsets();
  const theme = useThemeContext();

  // Generate styles with theme
  const styles = useMemo(() => tabStyle(theme), [theme]);

  // Animate the tab bar hide/show
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: scrollY.value === 1
          ? withTiming(100, { duration: 300 })
          : withTiming(0, { duration: 300 })
      }
    ]
  }));

  // Animated sliding indicator
  const indicatorStyle = useAnimatedStyle(() => {
    const baseLeft =33;
    return {
      left: withTiming(baseLeft + state.index * screenWidth * 0.33, { duration: 300 })
    };
  });

  return (
    <Animated.View
      style={[
        styles.tabBarContainer,
        // animatedStyle,
        { paddingBottom: bottom.bottom }
      ]}
    >
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              key={route.key}
              style={[styles.tabItem, isFocused && styles.focusedTabItem]}
              onPress={() => navigation.navigate(route.name)}
            >
              <TabIcons name={route.name} focused={isFocused}/>
              <CustomText variant="h6" color={isFocused ? theme.colors.primary : "#B3B3B3"}>
                {route.name}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Sliding indicator */}
      <Animated.View style={[styles.slidingIndicator, indicatorStyle, { backgroundColor: theme.colors.primary }]} />
    </Animated.View>
  );
};
