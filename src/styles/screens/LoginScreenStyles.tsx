import { StyleSheet } from "react-native";
import { ThemeType } from "@utils/theme/ThemeContext";

const LoginScreenStyles = (
    theme: ThemeType,
) => {
    const { size, fonts, colors, margins, borderRadius, fontSize } = theme;

    return StyleSheet.create({
        imageConatainer: {
            height: "100%",
            width: "100%"
        },
        transparentContaine: {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "#ffffff90",
            justifyContent: "center",
            alignItems: "center",
        },
        maincontainer: {
            backgroundColor: "#fff",
            width: '94%',
            padding: 20,
            borderRadius: 10
        }
    });
};
export default LoginScreenStyles;