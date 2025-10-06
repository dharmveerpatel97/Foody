import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeContext } from "@utils/theme/ThemeContext";
import { CustomButtonStyles } from "src/styles/components/common";
import CustomText from "./CustomText";

type CustomButtonProps = {
    title: string;
    widthPercent?: number;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string; // ✅ NEW
    isGradient?: boolean;
    isBordered?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
};

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    widthPercent = 100,
    textColor,
    backgroundColor,
    borderColor,
    isGradient = false,
    isBordered = false,
    isDisabled = false,
    isLoading = false,
    onPress,
    style,
}) => {
    const theme = useThemeContext();
    const styles = CustomButtonStyles(
        theme,
        isDisabled,
        widthPercent,
        backgroundColor,
        isBordered,
        borderColor
    );

    if (isGradient) {
        return (
            <TouchableOpacity
                onPress={!isDisabled && !isLoading ? onPress : undefined}
                activeOpacity={0.8}
                disabled={isDisabled}
            >
                <LinearGradient
                    colors={
                        isDisabled
                            ? [theme.colors.inactiveTab, theme.colors.inactiveTab]
                            : [theme.colors.l3, theme.colors.l1]
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.gradientContainer, style]}
                >
                    {isLoading ? (
                        <ActivityIndicator color={textColor || theme.colors.white} />
                    ) : (
                        <CustomText color={borderColor || textColor || theme.colors.white} variant="h5">
                            {title}
                        </CustomText>
                    )}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[styles.buttonContainer, style]}
            onPress={!isDisabled && !isLoading ? onPress : undefined}
            activeOpacity={0.8}
            disabled={isDisabled}
        >
            {isLoading ? (
                <ActivityIndicator color={borderColor || textColor || theme.colors.white} />
            ) : (
                <CustomText color={borderColor || textColor || theme.colors.white} variant="h5">
                    {title}
                </CustomText>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
