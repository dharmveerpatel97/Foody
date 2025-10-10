import { StyleSheet } from "react-native";
import { ThemeType } from "@utils/theme/ThemeContext";

const HomeSearchStyle = (theme: ThemeType) => {
    const { colors, fonts, size, SF, fontSize,} = theme;
    return StyleSheet.create({
        container: {
            width:"100%"
        },
        
    });
};
export default HomeSearchStyle