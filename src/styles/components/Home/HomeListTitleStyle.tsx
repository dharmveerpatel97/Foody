import {StyleSheet } from "react-native";
import { ThemeType } from "@utils/theme/ThemeContext";

const HomeListTitleStyle = (theme: ThemeType) => {
    const { fontSize,colors,fonts,margins} = theme;
    return StyleSheet.create({
        container: {  marginTop: margins.sm, flexDirection: 'row',justifyContent:"space-between",alignItems:"center"},
        title: { fontSize: fontSize.md,fontFamily:fonts.Medium, color:colors.text },
    });
};
export default HomeListTitleStyle