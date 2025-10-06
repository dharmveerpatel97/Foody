import { StyleSheet } from "react-native";
import { ThemeType } from "@utils/theme/ThemeContext";

const CustomButtonStyles = (
    theme: ThemeType,
    isDisabled: boolean,
    widthPercent: number,
    backgroundColor?: string,
    isBordered?: boolean,
    borderColor?: string
) => {
    const { size, fonts, colors, margins, borderRadius, fontSize } = theme;

    const activeBorderColor = borderColor || colors.primary;

    return StyleSheet.create({
        buttonContainer: {
            width: `${widthPercent}%`,
            borderRadius: size.SF(10),
            overflow: "hidden",
            backgroundColor: isBordered ? "transparent" : backgroundColor || colors.primary,
            opacity: isDisabled ? 0.6 : 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: theme.padding.md,
            borderWidth: isBordered ? 1 : 0,
            borderColor: isBordered ? activeBorderColor : "transparent",
        },
        gradientContainer: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: borderRadius?.md ?? size.SF(10),
            paddingVertical:theme.padding.md,
            borderWidth: isBordered ? 1 : 0,
            borderColor: isBordered ? activeBorderColor : "transparent",
            backgroundColor: isBordered ? "transparent" : undefined,
            opacity: isDisabled ? 0.6 : 1,
        },
        buttonText: {
            fontSize: fontSize?.sm ?? size.SF(14),
            fontFamily: fonts.Medium,
            color: colors.white,
            textAlign: "center",
        },
    });
};
export default CustomButtonStyles;